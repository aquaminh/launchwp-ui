import * as React from 'react';
import { StatStrip } from '@launchwp/ui';

export const DashboardKpis = () => (
  <StatStrip
    items={[
      { label: 'Sites', value: '2', sublabel: 'across 2 regions' },
      { label: 'Storage used', value: '1.6 GB', sublabel: 'of 10 GB' },
      { label: 'Pending approvals', value: '1', sublabel: 'awaiting review' },
    ]}
  />
);
