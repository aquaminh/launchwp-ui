import * as React from 'react';
import { ProofStrip } from '@launchwp/ui';

export const HomepageStrip = () => (
  <ProofStrip
    stats={[
      { label: 'Regions live', value: '2' },
      { label: 'Backup engine', value: 'restic' },
      { label: 'SSL', value: "Let's Encrypt" },
    ]}
  />
);
