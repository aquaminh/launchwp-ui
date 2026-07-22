import * as React from 'react';
import { Hero } from '@launchwp/ui';

export const Landing = () => (
  <Hero
    badge="Now in Singapore + Bangalore"
    titleTop="Managed WordPress hosting,"
    titleBottom="reviewed before it ships."
    subhead="Staging, restic backups, and an approval queue for every AI-proposed change - so nothing hits production unreviewed."
    primaryCta={{ label: 'Start on Starter - $9/mo', href: '/signup' }}
    secondaryCta={{ label: 'See plans', href: '/pricing' }}
  />
);
