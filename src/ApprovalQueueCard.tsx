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
export function ApprovalQueueCard({
  kind,
  siteName,
  description,
  proposedAt,
  source,
  approveLabel = 'Approve',
  rejectLabel = 'Reject',
  onApprove,
  onReject,
}: ApprovalQueueCardProps) {
  return (
    <article className="launchwp launchwp-approval-card">
      <div className="launchwp-approval-card__head">
        <span className="launchwp-approval-card__kind">{kind}</span>
        <span className="launchwp-approval-card__site">{siteName}</span>
      </div>
      <p className="launchwp-approval-card__body">{description}</p>
      <span className="launchwp-approval-card__meta">
        {proposedAt}
        {source ? ` - ${source}` : ''}
      </span>
      <div className="launchwp-approval-card__actions">
        <button type="button" className="launchwp-approval-card__approve" onClick={onApprove}>
          {approveLabel}
        </button>
        <button type="button" className="launchwp-approval-card__reject" onClick={onReject}>
          {rejectLabel}
        </button>
      </div>
    </article>
  );
}
