import * as React from 'react';
export interface NavbarLink {
    label: string;
    href: string;
    /** Marks the current page. */
    active?: boolean;
}
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    /** Logo/wordmark slot at the left. */
    logo: React.ReactNode;
    /** Primary nav links. */
    links?: NavbarLink[];
    /** Language toggle slot (e.g. an EN/VI switch). */
    languageToggle?: React.ReactNode;
    /** Theme toggle slot (light/dark switch). */
    themeToggle?: React.ReactNode;
    /** Login link. */
    loginHref?: string;
    loginLabel?: string;
    /** Primary CTA on the right. */
    ctaLabel?: string;
    ctaHref?: string;
}
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
export declare function Navbar({ logo, links, languageToggle, themeToggle, loginHref, loginLabel, ctaLabel, ctaHref, className, ...rest }: NavbarProps): React.JSX.Element;
