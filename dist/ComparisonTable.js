import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
function Cell({ value }) {
    if (typeof value === 'boolean') {
        return (_jsx("span", { className: value ? 'launchwp-comparison-table__cell--yes' : 'launchwp-comparison-table__cell--no', children: value ? '✓' : '✕' }));
    }
    return _jsx(_Fragment, { children: value });
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
export function ComparisonTable({ competitorName, rows }) {
    return (_jsxs("table", { className: "launchwp launchwp-comparison-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Feature" }), _jsx("th", { children: "LaunchWP" }), _jsx("th", { children: competitorName })] }) }), _jsx("tbody", { children: rows.map((r, i) => (_jsxs("tr", { children: [_jsx("td", { children: r.feature }), _jsx("td", { children: _jsx(Cell, { value: r.launchwp }) }), _jsx("td", { children: _jsx(Cell, { value: r.competitor }) })] }, i))) })] }));
}
