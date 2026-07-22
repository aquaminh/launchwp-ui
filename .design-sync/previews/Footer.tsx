import * as React from 'react';
import { Footer } from '@launchwp/ui';

export const SiteFooter = () => (
  <Footer
    brand="LaunchWP"
    tagline="Managed WordPress hosting with a human in the loop."
    columns={[
      {
        heading: 'Product',
        links: [
          { label: 'Pricing', href: '/pricing' },
          { label: 'Regions', href: '/regions' },
          { label: 'Docs', href: '/docs' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'Contact', href: '/contact' },
          { label: 'Status', href: '/status' },
        ],
      },
    ]}
    legal="(c) 2026 LaunchWP"
    note="Payments processed by PayPal"
  />
);
