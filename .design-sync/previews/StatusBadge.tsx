import * as React from 'react';
import { StatusBadge } from '@launchwp/ui';

export const SiteLifecycle = () => (
  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
    <StatusBadge status="ready" />
    <StatusBadge status="provisioning" />
    <StatusBadge status="deleting" />
    <StatusBadge status="suspended" />
    <StatusBadge status="error" />
  </div>
);

export const ApprovalLifecycle = () => (
  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
    <StatusBadge status="pending" />
    <StatusBadge status="approved" />
    <StatusBadge status="rejected" />
  </div>
);
