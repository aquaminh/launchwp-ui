import { jsx as _jsx } from "react/jsx-runtime";
const DEFAULT_LABEL = {
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
export function StatusBadge({ status, label, className = '', ...rest }) {
    return (_jsx("span", { className: `launchwp-status-badge launchwp-status-badge--${status} ${className}`.trim(), ...rest, children: label ?? DEFAULT_LABEL[status] }));
}
