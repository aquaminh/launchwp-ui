# LaunchWP conventions

LaunchWP is managed WordPress hosting built around one idea: an AI agent can run day-to-day site operations, but nothing it proposes reaches production without a human approving it first. Voice: direct, technically literate, no hype. Audience: solo site owners and small agencies evaluating a host.

## Setup

No provider needed - components self-style via `styles.css` (Inter + JetBrains Mono load from Google Fonts through the stylesheet). Wrap any subtree in `<div className="dark">` to preview the dark palette - every component reads the same `--launchwp-*` tokens either way, and BOTH themes must render correctly. Public pages compose: `Navbar` → `Hero` (once, top) → `ProofStrip` → content sections (`FeatureCard` grid, `PlanCard` row, `ComparisonTable`, `FaqList`) → `CtaBand` → `Footer`. Dashboard pages: `DashboardShell` wrapping a `StatStrip`, `SiteCard` grids, and an `ApprovalQueueCard` stack.

## Styling idiom: launchwp-* semantic classes + tokens ONLY - no Tailwind

Components carry their own look through `launchwp-*` classes shipped in `styles.css`. The app this ports back into is Tailwind v4, but this package emits ZERO Tailwind utility classes - only semantic `launchwp-*` classes and `--launchwp-*` custom properties; layout glue is inline `style` (flex/grid, 16-32px gaps). Validate every class name, token name, and component name against the BUILT bundle (`ds-bundle/`) before shipping - a class referenced in a preview that doesn't appear in `_ds_bundle.css`, or a token missing from `styles.css`, is a defect to fix, not a naming preference to note.

Tokens (all `--launchwp-*`, defined in `styles.css`, light `:root` + `.dark` override): brand `--launchwp-primary`; surfaces `--launchwp-background/--launchwp-card/--launchwp-muted/--launchwp-accent`; status `--launchwp-success/--launchwp-warning/--launchwp-info/--launchwp-destructive` (+ `-foreground` pairs); structure `--launchwp-border/--launchwp-ring`; shape `--launchwp-radius-sm/md/lg/xl/full`, `--launchwp-shadow-1/2`; type `--launchwp-font-sans` (Inter) and `--launchwp-font-mono` (JetBrains Mono - used for status pills, domains, and numeric/price values).

On-brand rules:
- ONE primary CTA per section or view; pair it with a text link or outline-weight secondary action, never two primary-weight CTAs side by side.
- Status-word vocabulary is fixed and exhaustive: site lifecycle = `ready`/`provisioning`/`deleting`/`suspended`/`error`; approval-queue lifecycle = `pending`/`approved`/`rejected`. Never invent a synonym ("live", "processing", "healthy" are all wrong).
- Terminology: say "human-approved AI" / "approval queue" - NEVER "governance" or "governed" (reads as enterprise-compliance-speak, not what a site owner searches for).
- Voice: direct, no hype. Banned words/phrases: blazing-fast, effortlessly, seamless, powerful, unlock, leverage, spin up, "we've got you covered".
- Punctuation: " - " (hyphen with spaces) only, never an em dash "—" or en dash "–".
- Exactly one `highlight` `PlanCard` per pricing row (Pro, flagged "Most Popular").
- Honest proof only: `ProofStrip` stats must be real and checkable - no fabricated customer counts, no invented testimonials or logos.
- Dark-first Linear/Vercel register (crisp 1px borders, restrained shadows, monospace for code-shaped values) - but tokens only, never a raw hex that bypasses `--launchwp-*`; light mode must render correctly too.
- Never render the character "⚠" anywhere in component output or preview text - the render harness reads a literal "⚠" in mounted text as a crashed-cell marker and drops the cell. Use "!" or an inline SVG for warning affordances instead.

## Where the truth lives

Read `styles.css` (every `--launchwp-*` token and `launchwp-*` component class) before styling anything. Per-component APIs and composed examples: the package `README.md` and each component's JSDoc `@example`.

## Idiomatic composition

```tsx
<Hero
  badge="Now in Singapore + Bangalore"
  titleTop="Managed WordPress hosting,"
  titleBottom="reviewed before it ships."
  subhead="Staging, restic backups, and an approval queue for every AI-proposed change - so nothing hits production unreviewed."
  primaryCta={{ label: 'Start on Starter - $9/mo', href: '/signup' }}
  secondaryCta={{ label: 'See plans', href: '/pricing' }}
/>

<div style={{ display: 'flex', gap: 20 }}>
  <PlanCard name="Starter" price="$9" period="/mo"
    features={['1 WordPress site', 'Staging + restic backups', 'Free SSL']}
    cta={{ label: 'Choose Starter', href: '/signup?plan=starter' }} />
  <PlanCard highlight highlightLabel="Most Popular" name="Pro" price="$59" period="/mo"
    features={['10 WordPress sites', 'Dedicated droplet', 'Approval queue for AI changes']}
    perSiteMath="$5.90 / site / mo" cta={{ label: 'Choose Pro', href: '/signup?plan=pro' }} />
</div>
```
