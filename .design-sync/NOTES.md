# design-sync notes — @launchwp/ui

- Standalone brand library (NOT a class-mirror of the Next.js app). Tokens copied from the live app's real palette (`apps/launchwp/src/app/globals.css`) into `--launchwp-*` custom properties; the app itself is Tailwind v4 — porting approved designs back means translating `launchwp-*` component structure into the app's Tailwind idiom (design intent + exact token values carry over; the porting step does the translation), UNLESS the app adopts `@launchwp/ui` as a workspace dependency first, in which case approved JSX drops in directly.
- No provider/context. Inter + JetBrains Mono ship via a Google Fonts `@import` in styles.css → validate reports `[FONT_REMOTE]`, informational only (not counted toward the warning total).
- Wide components run `cardMode: column` (`.design-sync/config.json` `overrides`): Navbar, Hero, ProofStrip, ComparisonTable, PlanCard, CtaBand, Footer, DashboardShell, StatStrip, ApprovalQueueCard, FeatureCard, SiteCard. The last two (FeatureCard, SiteCard) were added after the first validate flagged `[GRID_OVERFLOW]` on their `Grid` preview stories (a 2-3 column CSS grid in the preview crops a full card) — targeted-rebuilt via `preview-rebuild.mjs --components FeatureCard,SiteCard`, then a full `package-build.mjs` re-run for consistency before the final validate.
- Never put "⚠" in any component or preview output — the render harness reads a literal "⚠" in mounted text as a crashed-cell marker (false `bad` flag, cell dropped from `texts[]`). `StatusBadge`/`ApprovalQueueCard`/`WizardSteps` use "!" or a CSS dot, never the triangle glyph.
- Preview content is realistic LaunchWP data: plan tiers (Starter $9/1 site, Growth $19/3, Pro $59/10 dedicated "Most Popular", Agency $99/30 dedicated at $3.30/site), real-shaped sites (`launch-smoke.launchwp.dev`, `fittric.com`), real regions (Singapore `sgp1`, Bangalore `blr1`), and the `ApprovalQueueCard` "Promote launch-smoke staging → production" pending item (kind "Staging changes", proposed via MCP client) plus a WP-CLI/WooCommerce update item. `ComparisonTable` previews LaunchWP vs Pressable (staging on every plan vs tier-gated, human-approval queue yes/no, per-site price at 30 sites $3.30 vs $6-7).

## Known render warns

- `[FONT_REMOTE]` — always present, informational (Google Fonts `@import`, not counted as a warning).
- (no other warns as of the v0.1.0 sync — validate is clean: 0 errors, 0 warnings beyond FONT_REMOTE)

## Playwright chromium revision drift (repo-specific gotcha)

The `.ds-sync` toolchain's `playwright-core@1.61.1` expects `chromium_headless_shell` revision **1228**, but the shared cache at `~/Library/Caches/ms-playwright` currently only has revision **1223** installed (a prior session's cache state — do not assume the two stay in sync). Rather than re-downloading a browser (forbidden — costs bandwidth and the sandbox may block the download), `package-validate.mjs` reads a `DS_CHROMIUM_PATH` env var and launches that executable instead of the version-pinned default:

```sh
DS_CHROMIUM_PATH=~/Library/Caches/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell-mac-arm64/chrome-headless-shell \
  node .ds-sync/package-validate.mjs ./ds-bundle
```

If a future re-sync hits `[RENDER_SKIPPED] ... Executable doesn't exist ...` again, check `~/Library/Caches/ms-playwright` for whatever `chromium_headless_shell-<rev>` dir IS present and point `DS_CHROMIUM_PATH` at its `chrome-headless-shell-mac-arm64/chrome-headless-shell` binary before reaching for `npx playwright install`.

## Re-sync risks

- Token drift: if the live app's `globals.css` palette changes, `src/styles.css` here must be updated by hand (values were copied, not imported) — both the light `:root` block and the `.dark` override block.
- Google Fonts `@import` needs network at render-check time; offline runs will fall back to system-ui/monospace (cosmetic).
- Node 20 + npm; playwright chromium-headless-shell — see the revision-drift note above before assuming the cached browser matches what this toolchain's `playwright-core` wants.
- `.design-sync/config.json` `overrides.cardMode` entries are load-bearing for the render check (12 of 15 components are wide/full-bleed) — a new wide component added later needs the same override BEFORE its first validate, or expect a `[GRID_OVERFLOW]` warn on its grid-style preview stories.
