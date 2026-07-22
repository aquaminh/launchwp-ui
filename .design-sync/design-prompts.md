# LaunchWP - Claude Design prompts (Phase B)

One prompt per page/surface. Paste into the Claude Design project AFTER /design-sync completes. Template to pick is noted per prompt ("UI mockups" for pages, "Animation" for the hero demo loop). Every prompt already carries the page's true current inventory - do not let the design agent invent a greenfield site.

Global constraints (apply to every prompt, restated in conventions.md):
- Voice: direct, technically literate, no hype ("blazing-fast", "effortlessly", "seamless" are banned). Hyphen with spaces " - ", never em dashes.
- One primary CTA per section. Secondary CTAs are text links or outline buttons.
- Dark-first technical aesthetic (Linear/Vercel register), but every screen must also work in light mode - use tokens only.
- Honest proof only: no fabricated customer counts, logos of real infra vendors only (WordPress, DigitalOcean, Cloudflare, Let's Encrypt, Redis), real product screenshots.
- Terminology: "human-approved AI" / "approval queue" / "review queue" - never "governance/governed".
- Imagery: editorial photo-real, candid warm-lit humans-in-the-loop (a person reviewing a change, an agency owner with a client, a developer at a terminal) - never mascots, glossy 3D, or stock-photo grins. Approved assets live in this project under assets/ - when a prompt names one, place the ACTUAL file in the design (not a placeholder). Placements whose asset is not generated yet get an image SLOT in the same style; assets are generated one at a time as placements are approved. Product UI moments are rendered with this design system's own components (ApprovalQueueCard, SiteCard, WizardSteps...), never screenshots of the old UI.
- Blueprints are DEMOTED product-wide: no Blueprints nav item, no homepage blueprints band. The concept survives only as "starter baselines" - a wizard step plus one reframed page.

---

## 1. Homepage (template: UI mockups; hero media additionally: Animation)

Redesign the homepage of an existing managed WordPress hosting app (launchwp.dev). Today it contains, in order: hero (badge, 2-line title, subhead, 2 CTAs, stylized empty browser-mockup art), tech-stack logo row, 6-card feature grid, niche links grid, pricing preview cards, migration CTA band, 3-step "how it works", bottom CTA band. (A blueprint showcase band existed and is REMOVED - do not design one; the Blueprints nav item is gone too.) Keep the remaining content jobs and order EXCEPT: (a) the hero media slot holds the approval moment - design it with the ApprovalQueueCard component from this design system (an AI-proposed change with Approve/Reject; this is the product's core moment: "AI runs your WordPress. You approve every change."). Do NOT reference the old dashboard's look; at port-back the app renders the real component live in the hero, so design the moment in the new visual language, (b) insert a ProofStrip directly under the hero (infra logos + 3 stats: regions Singapore + Bangalore, daily offsite backups, 14-day money-back guarantee), (c) the pricing preview must show the per-site math line ($3.30/site at Agency scale), (d) the migration CTA band and the "how it works" strip each get an editorial photo-real image slot (candid human moment - e.g. a specialist mid-handover for migration). Build with: Navbar, Hero, ProofStrip, FeatureCard, PlanCard, CtaBand, FaqList, Footer. Improve: visual hierarchy (today it is a wall of same-weight text sections), scannability, and conversion focus - exactly one primary CTA per viewport.

Hero animation variant (Animation template): a 6-8s loop inside the hero media slot: an AI agent proposes a change (card slides into the approval queue) -> human clicks Approve -> status flips to published with a subtle success state. No mascots, no 3D, restrained motion.

## 2. Pricing (template: UI mockups)

Redesign the pricing page. Today: hero (title + per-site-math subhead), 4 plan cards (Starter $9/1 site, Growth $19/3, Pro $59/10 dedicated, Agency $99/30 dedicated - Pro is "Most Popular"), full comparison table, migration CTA band, 3 one-time service cards (migrations from $99, AI-ready setup $299, agency onboarding $499), FAQ accordion (6 items incl. 14-day money-back guarantee). Keep all content jobs and order. Build with: PlanCard, ComparisonTable, CtaBand, FaqList. Improve: plan differentiation at a glance (shared vs dedicated boundary should be visible), guarantee visibility near the cards, per-site math anchored on Agency, mobile table handling (horizontal scroll container, never squeezed columns).

## 3. Features (template: UI mockups)

Redesign the features page. Today: hero, then 4 alternating copy/illustration rows (Performance, Security, Management, GPL Themes - each 6 bullet points, abstract SVG art), CTA band. Keep the 4 sections and their bullets. Replace abstract art with product moments composed from this design system's own components (SiteCard, StatusBadge, ApprovalQueueCard, a monospace WP-CLI output block); keep restrained token-styled illustration only where no component composition fits. Do not reference the old UI's look. Build with: FeatureCard, CtaBand + free-form sections. Improve: bullet scannability (6 dense bullets per section today), section rhythm.

## 4. /vs/[competitor] template (template: UI mockups)

Redesign the comparison page TEMPLATE (6 static pages: wordpress-com, wp-engine, kinsta, pressable, cloudways, flywheel). Today: hero (headline, subhead), feature-by-feature table, 3 prose sections (why this comparison exists / where we differ / where the competitor wins - the honest section stays), FAQ, cross-links to other comparisons, CTA band. Keep all jobs including the "where the competitor wins" honesty section - it is a trust feature. Build with: ComparisonTable, FaqList, CtaBand. Improve: table readability (check/cross/text cells), keep prose sections but give them visual anchors.

## 5. /for/[industry] template (template: UI mockups)

Redesign the niche page TEMPLATE (6 pages: developers, agencies, ecommerce, +3). Today: hero + illustration, pain-point cards, differentiator cards, optional starter-baseline recommendations, optional service cards (agencies only), FAQ, cross-links, CTA. Keep all jobs, but the hero illustration becomes an editorial photo-real image slot - one candid persona moment per niche (agency owner reviewing an AI-proposed change with a client, developer at a terminal, store operator checking orders). Build with: FeatureCard, FaqList, CtaBand. Improve: pain-point cards should read as problems (not feature clones), differentiators tie each pain to a mechanism.

## 6. Services + Migrate (template: UI mockups)

Redesign the two near-identical service pages. Today each is: hero text + a payment form (tier picker, URL/email fields, PayPal buttons) - zero visuals, the barest pages on the site. Keep the form jobs untouched (PayPal flow, Turnstile). Add: a 3-step "what happens after payment" strip (we email within 1 business day -> you reply with admin access -> DNS+SSL cutover handled), a small honest-proof row, and the approved editorial image assets/migrate-handover.png (in this design project) placed in the reassurance column - use the actual file, cropped as needed, not a placeholder. Build with: CtaBand, StatStrip/WizardSteps + the existing form dropped into a two-column layout (form right, reassurance left).

## 7. AI-ready (template: UI mockups)

Redesign /ai-ready. Today: hero (badge/title/subhead), problem-framing prose block, 6-item icon checklist ("what AI-ready actually means"), service band ($299), CTA. Keep all jobs. This page carries the human-approved-AI story hardest: pair the checklist with an ApprovalQueueCard composition (this design system's component - not an old-UI screenshot) and (if the Animation hero loop exists) reuse it here smaller. Build with: FeatureCard, CtaBand, Hero.

## 8. Starter baselines page (template: UI mockups) - DEMOTED, reframed

The /blueprints URL survives for SEO but is REFRAMED as "Starter baselines" and linked only from the footer and the features page (no nav item, no homepage band). Honest scope: a baseline = a block theme + curated plugin stack + caching/security/backups/staging configured on a FRESH install, chosen as a step in the new-site wizard - NOT a cloned demo site; never use "clone" language. Design: compact hero, a modest baseline-card grid (title, theme, included stack - token-styled, no fake screenshots), one WizardSteps strip showing where the choice happens, CTA. Keep it deliberately smaller than the other pages.

## 9. Blog index (template: UI mockups)

Redesign /blog. Today: hero + post card grid with NO images. Design the card for an optional cover image with a clean no-image fallback (the query currently selects no image field - the port-back adds per-post cover/OG support; default covers are editorial photo-real AI-generated assets in the same imagery direction).

---

# Dashboard round (run AFTER the public surface ships)

## 10. Dashboard shell + overview (template: UI mockups)

Redesign the customer dashboard overview of the same app. Today: fixed 264px sidebar (logo, Dashboard/Sites/Billing/API Tokens/Account, sign-out), main column with: PendingApprovalsCard (AI-proposed changes with Approve/Reject - the product's hero moment, keep it top), welcome heading, subscription status banner, 2 stat cards (current plan, sites n/m). Build with: DashboardShell, ApprovalQueueCard, StatStrip. Improve: information density (Linear-like), status visibility, empty states.

## 11. Site list + site detail (template: UI mockups)

Site list today: 2-col card grid (name, domain, StatusBadge, storage banners, empty state). Site detail today: ONE long stacked column - SiteDetailPanel (domain, custom domains + aliases, SSH access), StagingBackupPanel (staging create/promote, offsite restic snapshots, restore), ReviewQueuePanel (AI edit approvals with wp-cli output on decided items), AiReadinessCard. Redesign the detail page as TABS (Overview / Domains / Staging & Backups / AI Reviews / Access) while keeping every panel's jobs and states (provisioning spinners, error banners, confirm dialogs). Build with: DashboardShell, SiteCard, StatusBadge, ApprovalQueueCard, StatStrip.

## 12. New-site wizard + billing (template: UI mockups)

Wizard today: 3 steps (Name+region picker Singapore/Bangalore with subdomain preview and plan-inclusions box / baseline-blueprint picker with icons / review+launch), quick "Launch blank site now" path. Billing today: plan panel, change-plan flow, payment history table mined from webhook logs. Keep all jobs and states. Build with: WizardSteps, PlanCard, StatStrip. Improve: step clarity, region choice as a first-class decision, billing history readability.
