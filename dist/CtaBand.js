import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * A full-bleed closing call-to-action band for the bottom of a landing
 * page: dark inverted surface, title, subhead, one or two CTAs.
 *
 * @example
 * <CtaBand
 *   title="Move your first site over this week"
 *   subhead="Starter is $9/mo with no setup fee - cancel any time."
 *   primaryCta={{ label: 'Start on Starter', href: '/signup' }}
 *   secondaryCta={{ label: 'Talk to us first', href: '/contact' }}
 * />
 */
export function CtaBand({ title, subhead, primaryCta, secondaryCta }) {
    return (_jsxs("section", { className: "launchwp launchwp-cta-band", children: [_jsx("h2", { className: "launchwp-cta-band__title", children: title }), subhead && _jsx("p", { className: "launchwp-cta-band__subhead", children: subhead }), (primaryCta || secondaryCta) && (_jsxs("div", { className: "launchwp-cta-band__actions", children: [primaryCta && (_jsx("a", { href: primaryCta.href, className: "launchwp-cta-band__cta-primary", children: primaryCta.label })), secondaryCta && (_jsx("a", { href: secondaryCta.href, className: "launchwp-cta-band__cta-secondary", children: secondaryCta.label }))] }))] }));
}
