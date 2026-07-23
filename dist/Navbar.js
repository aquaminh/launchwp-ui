import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * The public site header: logo, nav links, language + theme toggle slots,
 * login link, and one primary CTA. Renders as a translucent blurred bar
 * fixed to the top of the page.
 *
 * @example
 * <Navbar
 *   logo="LaunchWP"
 *   links={[
 *     { label: 'Pricing', href: '/pricing', active: true },
 *     { label: 'Docs', href: '/docs' },
 *   ]}
 *   languageToggle={<LangSwitch />}
 *   themeToggle={<ThemeSwitch />}
 *   loginHref="/login"
 *   ctaLabel="Start hosting"
 *   ctaHref="/signup"
 * />
 */
export function Navbar({ logo, links = [], languageToggle, themeToggle, loginHref, loginLabel = 'Log in', ctaLabel = 'Get started', ctaHref = '/signup', className = '', ...rest }) {
    return (_jsxs("nav", { className: `launchwp launchwp-navbar ${className}`.trim(), ...rest, children: [_jsx("span", { className: "launchwp-navbar__brand", children: logo }), _jsx("div", { className: "launchwp-navbar__links", children: links.map((l) => (_jsx("a", { href: l.href, className: `launchwp-navbar__link ${l.active ? 'launchwp-navbar__link--active' : ''}`.trim(), children: l.label }, l.href))) }), (languageToggle || themeToggle) && (_jsxs("div", { className: "launchwp-navbar__toggles", children: [languageToggle, themeToggle] })), _jsxs("div", { className: "launchwp-navbar__actions", children: [loginHref && (_jsx("a", { href: loginHref, className: "launchwp-navbar__login", children: loginLabel })), _jsx("a", { href: ctaHref, className: "launchwp-navbar__cta", children: ctaLabel })] })] }));
}
