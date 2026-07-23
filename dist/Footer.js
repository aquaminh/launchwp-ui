import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * The public site footer: brand + tagline, link columns, legal bottom row.
 *
 * @example
 * <Footer
 *   brand="LaunchWP"
 *   tagline="Managed WordPress hosting with a human in the loop."
 *   columns={[
 *     { heading: 'Product', links: [{ label: 'Pricing', href: '/pricing' }, { label: 'Regions', href: '/regions' }] },
 *     { heading: 'Company', links: [{ label: 'Contact', href: '/contact' }, { label: 'Status', href: '/status' }] },
 *   ]}
 *   legal="(c) 2026 LaunchWP"
 *   note="Payments processed by PayPal"
 * />
 */
export function Footer({ brand, tagline, columns = [], legal, note }) {
    return (_jsxs("footer", { className: "launchwp launchwp-footer", children: [_jsxs("div", { className: "launchwp-footer__top", children: [_jsxs("div", { children: [_jsx("p", { className: "launchwp-footer__brand", children: brand }), tagline && _jsx("p", { className: "launchwp-footer__tagline", children: tagline })] }), columns.length > 0 && (_jsx("div", { className: "launchwp-footer__columns", children: columns.map((col) => (_jsxs("div", { className: "launchwp-footer__col", children: [_jsx("h4", { children: col.heading }), _jsx("ul", { children: col.links.map((l) => (_jsx("li", { children: _jsx("a", { href: l.href, children: l.label }) }, l.href))) })] }, col.heading))) }))] }), (legal || note) && (_jsxs("div", { className: "launchwp-footer__bottom", children: [_jsx("span", { children: legal }), _jsx("span", { children: note })] }))] }));
}
