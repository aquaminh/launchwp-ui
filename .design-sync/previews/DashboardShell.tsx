import * as React from 'react';
import { DashboardShell, StatStrip } from '@launchwp/ui';

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
        { label: 'Pending approvals', value: '1', sublabel: 'awaiting review' },
      ]}
    />
  </DashboardShell>
);
