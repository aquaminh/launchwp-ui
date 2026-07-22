import * as React from 'react';
import { ApprovalQueueCard } from '@launchwp/ui';

export const PendingStagingPromotion = () => (
  <ApprovalQueueCard
    kind="Staging changes"
    siteName="Launch Smoke"
    description="Promote launch-smoke staging - production, requested by the account operator via Claude Code."
    proposedAt="Proposed 14 minutes ago - via MCP client"
    onApprove={() => {}}
    onReject={() => {}}
  />
);

export const Queue = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <ApprovalQueueCard
      kind="Staging changes"
      siteName="Launch Smoke"
      description="Promote launch-smoke staging - production, requested by the account operator via Claude Code."
      proposedAt="Proposed 14 minutes ago - via MCP client"
      onApprove={() => {}}
      onReject={() => {}}
    />
    <ApprovalQueueCard
      kind="WP-CLI"
      siteName="fittric.com"
      description="Update WooCommerce from 8.9.1 to 9.0.0 and clear the object cache."
      proposedAt="Proposed 2 hours ago - via MCP Adapter"
      onApprove={() => {}}
      onReject={() => {}}
    />
  </div>
);
