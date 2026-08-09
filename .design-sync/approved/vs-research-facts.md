# Kinsta + Cloudways verified facts (July 2026) - source for the new /vs configs

Verified via live-site research 2026-07-23. Every claim below is citable; items marked UNVERIFIED must not appear as facts in copy.

## Kinsta
- Entry: Single 20GB $35/mo ($30 annual): 1 install, 10GB storage, ~25k visits, CDN, staging, daily backups (14d), free SSL, free migrations. https://kinsta.com/pricing/
- ~30 sites: NO 30-site tier; WP 40 at $450/mo ($375 annual) = ~$15/site (~$12.50 annual) with 10 sites unused headroom. Larger agencies -> custom sales quote.
- Staging: 1 free Standard env per install (2 PHP threads, no CDN, sleeps after 24h); Premium staging $20/mo per env add-on. https://kinsta.com/docs/wordpress-hosting/staging-environment/
- Backups: daily, 14-30d retention by tier; downloadable ZIP 1x/week; manual/API export to S3/GCS; proprietary system (backup engine internals UNVERIFIED).
- SSH + WP-CLI: all plans. Node/npm higher tiers only.
- Regions: GCP 30+ DCs incl Mumbai (asia-south1) + Singapore (asia-southeast1). THEY COVER India+SG - region choice is NOT a LaunchWP differentiator vs Kinsta.
- AI/MCP: NO first-party MCP product; official blog teaches build-your-own vs their API + a COMMUNITY MCP server exists (83 tools). Never claim "Kinsta has no MCP" - say "no native, plan-included MCP adapter". APM has AI-assisted troubleshooting (diagnostics, not content-change approval).
- Where they win (concede): GCP Premium Tier network everywhere; free built-in APM; isolated LXD containers + C3D performance; enterprise reputation.
- Guarantee: 30-day money-back, first-time customers only.

## Cloudways
- Entry: DO Micro/Small $11/mo (2GB/1vCPU/50GB, unlimited sites per server, 4 free Copilot credits). Per-SERVER pricing, 5 providers. Autonomous line (autoscaling) is separate: $99-$399/mo.
- ~30 sites: "unlimited sites/server" means a $88/mo Medium COULD host 30 small sites (~$2.93/site) but Cloudways specifies no per-server site guidance - ANY per-site figure at 30 sites is an ESTIMATE, present it as such or omit; the honest frame is per-server-shared vs LaunchWP per-site-priced isolation.
- Staging: free advanced staging+cloning all plans; per-app env cap UNVERIFIED.
- Backups: local scheduled (1h-7d freq, 1-4wk retention, default 7d); TRUE OFFSITE (SafeSync to S3) is a PAID ADD-ON - do not credit them with included offsite backups; LaunchWP's included daily offsite restic IS a differentiator here.
- SSH + WP-CLI: all plans.
- Regions: ~65 DCs incl DO Bangalore + Singapore + Mumbai. THEY MATCH LaunchWP's regions - frame ours as "included, no provider-management" not unique geography.
- AI - CRITICAL: Cloudways Copilot + SmartFix EXISTS and REQUIRES USER APPROVAL before applying fixes ("does not make any changes on its own"). https://www.cloudways.com/en/cloudways-ai-copilot.php  NEVER claim LaunchWP uniquely has a human-approval queue. Honest scoped claim: LaunchWP's queue governs AI-proposed CONTENT/CODE CHANGES TO THE SITE (via MCP - WP-CLI runs, plugin updates, content edits); Cloudways' approval governs AI-DIAGNOSED SERVER/INFRA REMEDIATION. Different domains - state both. Copilot credits beyond the free 4 cost $3.99-$19.99+/mo.
- MCP: none found (flag "not found", not "confirmed absent").
- Where they win (concede): provider choice (DO/Vultr/Linode/AWS/GCP); vertical scaling + pay-as-you-go; unlimited sites per server for many low-traffic sites; Copilot/SmartFix is genuinely useful human-gated AI ops.
- Guarantee: NO traditional money-back window verified; pay-as-you-go prorated billing + 3-day free trial (no card). Do not state a refund-window number.

## Copy rules derived (apply to BOTH new configs + re-check the 3 existing ones)
1. Approval-queue rows/claims: scope to "AI-proposed site changes (content, plugins, WP-CLI)" - for Cloudways the cell is NOT a bare cross: use text "Infra fixes only (Copilot SmartFix)".
2. MCP rows: Kinsta cell = "DIY via API (no native adapter)"; Cloudways cell = "Not offered" (as of July 2026).
3. Region rows: our cell "Singapore + Bangalore, every plan"; their cells list their real coverage - never imply they lack Asia.
4. Offsite backups row: Cloudways = "Paid add-on (SafeSync)"; Kinsta = "Manual/API export; ZIP 1x/week".
5. Per-site price row: Kinsta "$15/site at 30 (WP 40 $450/mo)"; Cloudways "per-server, varies - no per-site pricing".
6. Guarantees: Kinsta 30-day (first-time only); Cloudways "pay-as-you-go + 3-day trial" (no number).
