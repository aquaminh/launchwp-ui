import * as React from 'react';
import { DashboardShell, StatStrip, SiteCard } from '@launchwp/ui';

export const WithContent = () => (
  <DashboardShell
    logo="LaunchWP"
    navItems={[
      { label: 'Sites', href: '/dashboard', active: true },
      { label: 'Approvals', href: '/dashboard/approvals' },
      { label: 'Billing', href: '/dashboard/billing' },
    ]}
    signOutLabel="Sign out"
  >
    <StatStrip
      items={[
        { label: 'Sites', value: '2', sublabel: 'across 2 regions' },
        { label: 'Storage used', value: '1.6 GB', sublabel: 'of 10 GB' },
        { label: 'Pending approvals', value: '1', sublabel: 'awaiting review' },
      ]}
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 16,
        marginTop: 24,
      }}
    >
      <SiteCard
        name="launch-smoke.launchwp.dev"
        domain="launch-smoke.launchwp.dev"
        status="ready"
        region="Singapore (sgp1)"
        storage="0.4 GB / 5 GB"
      />
      <SiteCard
        name="fittric.com"
        domain="fittric.com"
        status="ready"
        region="Singapore (sgp1)"
        storage="1.2 GB / 5 GB"
      />
    </div>
  </DashboardShell>
);
