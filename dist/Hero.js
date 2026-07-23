import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * The homepage hero: badge line, two-line title, subhead, one or two CTAs,
 * and a media slot for a real product screenshot underneath. Use once, at
 * the top of the page.
 *
 * @example
 * <Hero
 *   badge="Now in Singapore + Bangalore"
 *   titleTop="Managed WordPress hosting,"
 *   titleBottom="reviewed before it ships."
 *   subhead="Staging, restic backups, and an approval queue for every AI-proposed change - so nothing hits production unreviewed."
 *   primaryCta={{ label: 'Start on Starter - $9/mo', href: '/signup' }}
 *   secondaryCta={{ label: 'See plans', href: '/pricing' }}
 *   media={<DashboardScreenshot />}
 * />
 */
export function Hero({ badge, titleTop, titleBottom, subhead, primaryCta, secondaryCta, media }) {
    return (_jsx("section", { className: "launchwp launchwp-hero", children: _jsxs("div", { className: "launchwp-hero__inner", children: [badge && _jsx("span", { className: "launchwp-hero__badge", children: badge }), _jsxs("h1", { className: "launchwp-hero__title", children: [_jsx("span", { className: "launchwp-hero__title-line", children: titleTop }), _jsx("span", { className: "launchwp-hero__title-line launchwp-hero__title-line--accent", children: titleBottom })] }), subhead && _jsx("p", { className: "launchwp-hero__subhead", children: subhead }), (primaryCta || secondaryCta) && (_jsxs("div", { className: "launchwp-hero__actions", children: [primaryCta && (_jsx("a", { href: primaryCta.href, className: "launchwp-hero__cta-primary", children: primaryCta.label })), secondaryCta && (_jsx("a", { href: secondaryCta.href, className: "launchwp-hero__cta-secondary", children: secondaryCta.label }))] })), media && _jsx("div", { className: "launchwp-hero__media", children: media })] }) }));
}
