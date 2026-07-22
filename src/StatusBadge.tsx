import * as React from 'react';

export type SiteStatus =
  | 'ready'
  | 'provisioning'
  | 'deleting'
  | 'suspended'
  | 'error'
  | 'pending'
  | 'approved'
  | 'rejected';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: SiteStatus;
  /** Override the rendered label; defaults to the capitalized status word. */
  label?: string;
}

const DEFAULT_LABEL: Record<SiteStatus, string> = {
  ready: 'Ready',
  provisioning: 'Provisioning',
  deleting: 'Deleting',
  suspended: 'Suspended',
  error: 'Error',
  pending: 'Pending',
  approved: 'Approved',
  rejected: 'Rejected',
};

/**
 * A monospace status pill covering both site lifecycle states
 * (ready/provisioning/deleting/suspended/error) and approval-queue states
 * (pending/approved/rejected).
 *
 * @example
 * <StatusBadge status="ready" />
 * <StatusBadge status="pending" />
 */
export function StatusBadge({ status, label, className = '', ...rest }: StatusBadgeProps) {
  return (
    <span className={`launchwp-status-badge launchwp-status-badge--${status} ${className}`.trim()} {...rest}>
      {label ?? DEFAULT_LABEL[status]}
    </span>
  );
}
