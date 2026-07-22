# @launchwp/ui

LaunchWP's design system for the app-redesign pipeline (see the `app-redesign-pipeline` skill). Tokens live in `src/styles.css` as `--launchwp-*` custom properties, copied 1:1 from `apps/launchwp/src/app/globals.css` (Tailwind v4 `@theme`, shadcn-style HSL set) - both the light `:root` block and the `.dark` override block are real. Every component styles itself through `launchwp-*` classes from that stylesheet; no Tailwind classes ship inside the library. Direction is a dark-first technical register (Linear/Vercel), built with Inter (sans) + JetBrains Mono (mono, used for status pills, domains, and numeric values).

```tsx
import { Navbar, Hero, PlanCard } from '@launchwp/ui';
import '@launchwp/ui/styles.css';
```

Wrap any subtree in `<div className="dark">` to preview the dark palette - every component reads the same tokens either way.

## Components

**Public surface**: `Navbar`, `Hero`, `ProofStrip`, `FeatureCard`, `PlanCard`, `ComparisonTable`, `FaqList`, `CtaBand`, `Footer`.
**Dashboard surface**: `DashboardShell`, `SiteCard`, `StatusBadge`, `ApprovalQueueCard`, `StatStrip`, `WizardSteps`.

## Homepage composition

```tsx
import {
  Navbar, Hero, ProofStrip, FeatureCard, PlanCard, FaqList, CtaBand, Footer,
} from '@launchwp/ui';
import '@launchwp/ui/styles.css';

export function HomePage() {
  return (
    <div className="dark">
      <Navbar
        logo="LaunchWP"
        links={[
          { label: 'Pricing', href: '/pricing' },
          { label: 'Regions', href: '/regions', active: true },
          { label: 'Docs', href: '/docs' },
        ]}
        loginHref="/login"
        ctaLabel="Start hosting"
        ctaHref="/signup"
      />

      <Hero
        badge="Now in Singapore + Bangalore"
        titleTop="Managed WordPress hosting,"
        titleBottom="reviewed before it ships."
        subhead="Staging, restic backups, and an approval queue for every AI-proposed change - so nothing hits production unreviewed."
        primaryCta={{ label: 'Start on Starter - $9/mo', href: '/signup' }}
        secondaryCta={{ label: 'See plans', href: '/pricing' }}
        media={<img src="/dashboard-screenshot.png" alt="LaunchWP dashboard" />}
      />

      <ProofStrip
        stats={[
          { label: 'Regions live', value: '2' },
          { label: 'Backup engine', value: 'restic' },
          { label: 'SSL', value: "Let's Encrypt" },
        ]}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        <FeatureCard
          title="Staging on every plan"
          body="Clone a site to staging, test changes, promote when ready - no separate add-on."
          link={{ label: 'How staging works', href: '/docs/staging' }}
        />
        <FeatureCard
          title="Restic-backed backups"
          body="Encrypted, deduplicated backups with self-serve restore on every tier."
        />
        <FeatureCard
          title="MCP Adapter"
          body="Let an AI agent propose WP-CLI runs, plugin updates, or content edits - you approve or reject each one."
          link={{ label: 'Read the approval model', href: '/docs/approvals' }}
        />
      </div>

      <div style={{ display: 'flex', gap: 20 }}>
        <PlanCard
          name="Starter" price="$9" period="/mo"
          features={['1 WordPress site', 'Shared pool server', 'Staging + restic backups', 'Free SSL']}
          perSiteMath="$9.00 / site / mo"
          cta={{ label: 'Choose Starter', href: '/signup?plan=starter' }}
        />
        <PlanCard
          highlight highlightLabel="Most Popular"
          name="Growth" price="$19" period="/mo"
          features={['3 WordPress sites', 'Shared pool server', 'Staging + restic backups', 'Free SSL']}
          perSiteMath="$6.33 / site / mo"
          cta={{ label: 'Choose Growth', href: '/signup?plan=growth' }}
        />
        <PlanCard
          name="Pro" price="$59" period="/mo"
          features={['10 WordPress sites', 'Dedicated droplet', 'Approval queue for AI changes', 'MCP Adapter access']}
          perSiteMath="$5.90 / site / mo"
          cta={{ label: 'Choose Pro', href: '/signup?plan=pro' }}
        />
        <PlanCard
          name="Agency" price="$99" period="/mo"
          features={['30 WordPress sites', 'Dedicated droplet', 'Approval queue for AI changes', 'Priority support']}
          perSiteMath="$3.30 / site / mo"
          cta={{ label: 'Choose Agency', href: '/signup?plan=agency' }}
        />
      </div>

      <FaqList items={[
        { question: 'Can I move an existing WordPress site to LaunchWP?', answer: 'Yes - point us at your current host and we migrate database, files, and DNS.' },
        { question: 'What happens to a rejected AI change?', answer: 'It stays in the approval queue as rejected; nothing is applied to the site.' },
      ]} />

      <CtaBand
        title="Move your first site over this week"
        subhead="Starter is $9/mo with no setup fee - cancel any time."
        primaryCta={{ label: 'Start on Starter', href: '/signup' }}
        secondaryCta={{ label: 'Talk to us first', href: '/contact' }}
      />

      <Footer
        brand="LaunchWP"
        tagline="Managed WordPress hosting with a human in the loop."
        columns={[
          { heading: 'Product', links: [{ label: 'Pricing', href: '/pricing' }, { label: 'Regions', href: '/regions' }] },
          { heading: 'Company', links: [{ label: 'Contact', href: '/contact' }, { label: 'Status', href: '/status' }] },
        ]}
        legal="(c) 2026 LaunchWP"
        note="Payments processed by PayPal"
      />
    </div>
  );
}
```

## Dashboard composition

```tsx
import {
  DashboardShell, StatStrip, SiteCard, ApprovalQueueCard,
} from '@launchwp/ui';
import '@launchwp/ui/styles.css';

export function DashboardPage() {
  return (
    <div className="dark">
      <DashboardShell
        logo="LaunchWP"
        navItems={[
          { label: 'Sites', href: '/dashboard', active: true },
          { label: 'Approvals', href: '/dashboard/approvals' },
          { label: 'Billing', href: '/dashboard/billing' },
        ]}
        onSignOut={() => signOut()}
      >
        <StatStrip items={[
          { label: 'Sites', value: '3', sublabel: 'across 2 regions' },
          { label: 'Storage used', value: '4.1 GB', sublabel: 'of 15 GB' },
          { label: 'Pending approvals', value: '2', sublabel: 'awaiting review' },
        ]} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 24 }}>
          <SiteCard
            name="fittric.com" domain="fittric.com" status="ready"
            region="Singapore" storage="1.2 GB / 5 GB"
            actions={<>
              <a href="/dashboard/sites/fittric">Manage</a>
              <a href="https://fittric.com" target="_blank" rel="noreferrer">Visit</a>
            </>}
          />
          <SiteCard
            name="hybrid-training.club" domain="hybrid-training.club" status="provisioning"
            region="Bangalore" storage="0.3 GB / 5 GB"
          />
        </div>

        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ApprovalQueueCard
            kind="WP-CLI"
            siteName="fittric.com"
            description="Update WooCommerce from 8.9.1 to 9.0.0 and clear the object cache."
            proposedAt="Proposed 2 hours ago"
            source="MCP Adapter"
            onApprove={() => approve('job_123')}
            onReject={() => reject('job_123')}
          />
        </div>
      </DashboardShell>
    </div>
  );
}
```

## Build

```sh
npm ci && npm run build   # tsc -> dist/ (ESM + .d.ts)
```
