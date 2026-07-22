import * as React from 'react';
import { FeatureCard } from '@launchwp/ui';

export const Single = () => (
  <FeatureCard
    title="Staging on every plan"
    body="Clone a site to staging, test changes, promote when ready - no separate add-on."
    link={{ label: 'How staging works', href: '/docs/staging' }}
  />
);

export const Grid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
    <FeatureCard
      title="Staging on every plan"
      body="Clone a site to staging, test changes, promote when ready - no separate add-on."
      link={{ label: 'How staging works', href: '/docs/staging' }}
    />
    <FeatureCard
      title="Restic-backed backups"
      body="Encrypted, deduplicated backups with self-serve restore on every tier."
    />
    <FeatureCard
      title="MCP Adapter"
      body="Let an AI agent propose WP-CLI runs, plugin updates, or content edits - you approve or reject each one."
      link={{ label: 'Read the approval model', href: '/docs/approvals' }}
    />
  </div>
);
