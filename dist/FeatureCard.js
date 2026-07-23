import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * One feature in a homepage grid: icon, title, short body, optional link.
 * Compose 3-6 side by side in a CSS grid.
 *
 * @example
 * <FeatureCard
 *   icon={<Layers />}
 *   title="Staging on every plan"
 *   body="Clone a site to staging, test changes, promote when ready - no separate add-on."
 *   link={{ label: 'How staging works', href: '/docs/staging' }}
 * />
 */
export function FeatureCard({ icon, title, body, link }) {
    return (_jsxs("article", { className: "launchwp launchwp-feature-card", children: [icon && _jsx("span", { className: "launchwp-feature-card__icon", children: icon }), _jsx("h3", { className: "launchwp-feature-card__title", children: title }), _jsx("p", { className: "launchwp-feature-card__body", children: body }), link && (_jsx("a", { href: link.href, className: "launchwp-feature-card__link", children: link.label }))] }));
}
