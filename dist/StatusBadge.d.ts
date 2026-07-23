import * as React from 'react';
export type SiteStatus = 'ready' | 'provisioning' | 'deleting' | 'suspended' | 'error' | 'pending' | 'approved' | 'rejected';
export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    status: SiteStatus;
    /** Override the rendered label; defaults to the capitalized status word. */
    label?: string;
}
/**
 * A monospace status pill covering both site lifecycle states
 * (ready/provisioning/deleting/suspended/error) and approval-queue states
 * (pending/approved/rejected).
 *
 * @example
 * <StatusBadge status="ready" />
 * <StatusBadge status="pending" />
 */
export declare function StatusBadge({ status, label, className, ...rest }: StatusBadgeProps): React.JSX.Element;
