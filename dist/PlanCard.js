import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A pricing tier card for the /pricing page: name, price, feature checklist,
 * per-site math line, and one CTA. Put the four LaunchWP tiers side by side;
 * mark exactly one as `highlight`.
 *
 * @example
 * <PlanCard
 *   name="Growth" price="$19" period="/mo"
 *   features={['3 WordPress sites', 'Shared pool server', 'Staging + restic backups', 'Free SSL']}
 *   perSiteMath="$6.33 / site / mo"
 *   cta={{ label: 'Choose Growth', href: '/signup?plan=growth' }}
 * />
 * <PlanCard
 *   highlight highlightLabel="Most Popular"
 *   name="Pro" price="$59" period="/mo"
 *   features={['10 WordPress sites', 'Dedicated droplet', 'Approval queue for AI changes', 'MCP Adapter access']}
 *   perSiteMath="$5.90 / site / mo"
 *   cta={{ label: 'Choose Pro', href: '/signup?plan=pro' }}
 * />
 */
export function PlanCard({ name, price, period, features, highlight = false, highlightLabel = 'Most Popular', perSiteMath, cta, }) {
    return (_jsxs("div", { className: `launchwp launchwp-plan-card ${highlight ? 'launchwp-plan-card--highlight' : ''}`.trim(), children: [highlight && _jsx("span", { className: "launchwp-plan-card__flag", children: highlightLabel }), _jsx("h3", { className: "launchwp-plan-card__name", children: name }), _jsxs("p", { className: "launchwp-plan-card__price", children: [price, period && _jsxs("span", { className: "launchwp-plan-card__price-period", children: [" ", period] })] }), perSiteMath && _jsx("p", { className: "launchwp-plan-card__math", children: perSiteMath }), _jsx("ul", { className: "launchwp-plan-card__features", children: features.map((f, i) => (_jsx("li", { children: f }, i))) }), _jsx("a", { href: cta.href, className: "launchwp-plan-card__cta", children: cta.label })] }));
}
