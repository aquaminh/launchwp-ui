import * as React from 'react';
import { ComparisonTable } from '@launchwp/ui';

export const VsPressable = () => (
  <ComparisonTable
    competitorName="Pressable"
    rows={[
      { feature: 'Staging on every plan', launchwp: true, competitor: 'Tier-gated' },
      { feature: 'Human-approval queue for AI changes', launchwp: true, competitor: false },
      { feature: 'Restic-backed backups', launchwp: true, competitor: false },
      { feature: 'Per-site price at 30 sites', launchwp: '$3.30/site', competitor: '$6-7/site' },
    ]}
  />
);
