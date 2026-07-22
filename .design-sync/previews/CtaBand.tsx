import * as React from 'react';
import { CtaBand } from '@launchwp/ui';

export const MigrationCta = () => (
  <CtaBand
    title="Move your first site over this week"
    subhead="Starter is $9/mo with no setup fee - cancel any time."
    primaryCta={{ label: 'Start on Starter', href: '/signup' }}
    secondaryCta={{ label: 'Talk to us first', href: '/contact' }}
  />
);
