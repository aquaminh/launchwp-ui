import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export function ApprovalQueueCard({ kind, siteName, description, proposedAt, source, approveLabel = 'Approve', rejectLabel = 'Reject', onApprove, onReject, }) {
    return (_jsxs("article", { className: "launchwp launchwp-approval-card", children: [_jsxs("div", { className: "launchwp-approval-card__head", children: [_jsx("span", { className: "launchwp-approval-card__kind", children: kind }), _jsx("span", { className: "launchwp-approval-card__site", children: siteName })] }), _jsx("p", { className: "launchwp-approval-card__body", children: description }), _jsxs("span", { className: "launchwp-approval-card__meta", children: [proposedAt, source ? ` - ${source}` : ''] }), _jsxs("div", { className: "launchwp-approval-card__actions", children: [_jsx("button", { type: "button", className: "launchwp-approval-card__approve", onClick: onApprove, children: approveLabel }), _jsx("button", { type: "button", className: "launchwp-approval-card__reject", onClick: onReject, children: rejectLabel })] })] }));
}
