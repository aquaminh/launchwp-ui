import * as React from 'react';
import { PlanCard } from '@launchwp/ui';

export const Highlighted = () => (
  <PlanCard
    highlight
    highlightLabel="Most Popular"
    name="Pro" price="$59" period="/mo"
    features={['10 WordPress sites', 'Dedicated droplet', 'Approval queue for AI changes', 'MCP Adapter access']}
    perSiteMath="$5.90 / site / mo"
    cta={{ label: 'Choose Pro', href: '/signup?plan=pro' }}
  />
);

export const PricingRow = () => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'stretch', paddingTop: 14 }}>
    <PlanCard
      name="Starter" price="$9" period="/mo"
      features={['1 WordPress site', 'Shared pool server', 'Staging + restic backups', 'Free SSL']}
      perSiteMath="$9.00 / site / mo"
      cta={{ label: 'Choose Starter', href: '/signup?plan=starter' }}
    />
    <PlanCard
      name="Growth" price="$19" period="/mo"
      features={['3 WordPress sites', 'Shared pool server', 'Staging + restic backups', 'Free SSL']}
      perSiteMath="$6.33 / site / mo"
      cta={{ label: 'Choose Growth', href: '/signup?plan=growth' }}
    />
    <PlanCard
      highlight
      highlightLabel="Most Popular"
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
);
