import * as React from 'react';
export interface ComparisonRow {
    /** Feature being compared, e.g. "Staging environment". */
    feature: string;
    /** LaunchWP's cell - `true`/`false` render as check/cross, a string renders as-is. */
    launchwp: boolean | string;
    /** Competitor's cell - `true`/`false` render as check/cross, a string renders as-is. */
    competitor: boolean | string;
}
export interface ComparisonTableProps {
    /** Competitor column header, e.g. "Typical shared WP host". */
    competitorName: string;
    rows: ComparisonRow[];
}
/**
 * A feature-by-feature comparison table for the /pricing or /vs pages:
 * LaunchWP vs one named competitor, per row.
 *
 * @example
 * <ComparisonTable
 *   competitorName="Typical shared WP host"
 *   rows={[
 *     { feature: 'Staging environment', launchwp: true, competitor: false },
 *     { feature: 'Restic-backed backups', launchwp: true, competitor: false },
 *     { feature: 'AI changes reviewed before they ship', launchwp: true, competitor: false },
 *     { feature: 'Entry price', launchwp: '$9/mo', competitor: '$25/mo' },
 *   ]}
 * />
 */
export declare function ComparisonTable({ competitorName, rows }: ComparisonTableProps): React.JSX.Element;
