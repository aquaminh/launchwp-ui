import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A row of dashboard KPIs, divided by thin rules. Compose at the top of
 * /dashboard or /dashboard/billing.
 *
 * @example
 * <StatStrip items={[
 *   { label: 'Sites', value: '3', sublabel: 'across 2 regions' },
 *   { label: 'Storage used', value: '4.1 GB', sublabel: 'of 15 GB' },
 *   { label: 'Pending approvals', value: '2', sublabel: 'awaiting review' },
 * ]} />
 */
export function StatStrip({ items }) {
    return (_jsx("div", { className: "launchwp launchwp-stat-strip", children: items.map((item, i) => (_jsxs("div", { className: "launchwp-stat-strip__item", children: [item.icon && _jsx("span", { className: "launchwp-stat-strip__icon", children: item.icon }), _jsx("span", { className: "launchwp-stat-strip__label", children: item.label }), _jsx("span", { className: "launchwp-stat-strip__value", children: item.value }), item.sublabel && _jsx("span", { className: "launchwp-stat-strip__sublabel", children: item.sublabel })] }, i))) }));
}
