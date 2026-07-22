import * as React from 'react';
import { Navbar } from '@launchwp/ui';

export const Public = () => (
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
);

export const LoggedIn = () => (
  <Navbar
    logo="LaunchWP"
    links={[
      { label: 'Sites', href: '/dashboard', active: true },
      { label: 'Approvals', href: '/dashboard/approvals' },
      { label: 'Billing', href: '/dashboard/billing' },
    ]}
    ctaLabel="Add a site"
    ctaHref="/dashboard/sites/new"
  />
);
