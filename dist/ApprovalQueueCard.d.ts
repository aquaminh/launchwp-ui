import * as React from 'react';
export interface ApprovalQueueCardProps {
    /** Change kind badge, e.g. "WP-CLI", "Plugin update", "Content edit". */
    kind: string;
    /** Site the change targets. */
    siteName: string;
    /** Plain-language description of the proposed change. */
    description: string;
    /** When the change was proposed, preformatted, e.g. "Proposed 2 hours ago". */
    proposedAt: string;
    /** Where the proposal came from, e.g. "MCP Adapter" or "Platform agent". */
    source?: string;
    approveLabel?: string;
    rejectLabel?: string;
    onApprove?: () => void;
    onReject?: () => void;
}
/**
 * The product's hero moment: one pending AI-proposed change awaiting a
 * human decision. Kind badge, target site, description, source/date, and
 * Approve/Reject actions. Stack several in the /dashboard/approvals queue.
 *
 * @example
 * <ApprovalQueueCard
 *   kind="WP-CLI"
 *   siteName="fittric.com"
 *   description="Update WooCommerce from 8.9.1 to 9.0.0 and clear the object cache."
 *   proposedAt="Proposed 2 hours ago"
 *   source="MCP Adapter"
 *   onApprove={() => approve(jobId)}
 *   onReject={() => reject(jobId)}
 * />
 */
export declare function ApprovalQueueCard({ kind, siteName, description, proposedAt, source, approveLabel, rejectLabel, onApprove, onReject, }: ApprovalQueueCardProps): React.JSX.Element;
