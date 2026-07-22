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
export function Navbar({
  logo,
  links = [],
  languageToggle,
  themeToggle,
  loginHref,
  loginLabel = 'Log in',
  ctaLabel = 'Get started',
  ctaHref = '/signup',
  className = '',
  ...rest
}: NavbarProps) {
  return (
    <nav className={`launchwp launchwp-navbar ${className}`.trim()} {...rest}>
      <span className="launchwp-navbar__brand">{logo}</span>
      <div className="launchwp-navbar__links">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`launchwp-navbar__link ${l.active ? 'launchwp-navbar__link--active' : ''}`.trim()}
          >
            {l.label}
          </a>
        ))}
      </div>
      {(languageToggle || themeToggle) && (
        <div className="launchwp-navbar__toggles">
          {languageToggle}
          {themeToggle}
        </div>
      )}
      <div className="launchwp-navbar__actions">
        {loginHref && (
          <a href={loginHref} className="launchwp-navbar__login">
            {loginLabel}
          </a>
        )}
        <a href={ctaHref} className="launchwp-navbar__cta">
          {ctaLabel}
        </a>
      </div>
    </nav>
  );
}
