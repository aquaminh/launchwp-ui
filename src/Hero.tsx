import * as React from 'react';

export interface HeroProps {
  /** Small pill above the title, e.g. "Now live in Singapore + Bangalore". */
  badge?: React.ReactNode;
  /** First line of the headline. */
  titleTop: React.ReactNode;
  /** Second line of the headline - usually the emphasized phrase. */
  titleBottom: React.ReactNode;
  /** Supporting sentence under the title. */
  subhead?: React.ReactNode;
  /** Primary call to action. */
  primaryCta?: { label: string; href: string };
  /** Secondary, lower-emphasis call to action. */
  secondaryCta?: { label: string; href: string };
  /** Media slot - a dashboard screenshot, video, or animation. */
  media?: React.ReactNode;
}

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
export function Hero({ badge, titleTop, titleBottom, subhead, primaryCta, secondaryCta, media }: HeroProps) {
  return (
    <section className="launchwp launchwp-hero">
      <div className="launchwp-hero__inner">
        {badge && <span className="launchwp-hero__badge">{badge}</span>}
        <h1 className="launchwp-hero__title">
          <span className="launchwp-hero__title-line">{titleTop}</span>
          <span className="launchwp-hero__title-line launchwp-hero__title-line--accent">{titleBottom}</span>
        </h1>
        {subhead && <p className="launchwp-hero__subhead">{subhead}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="launchwp-hero__actions">
            {primaryCta && (
              <a href={primaryCta.href} className="launchwp-hero__cta-primary">
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href} className="launchwp-hero__cta-secondary">
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
        {media && <div className="launchwp-hero__media">{media}</div>}
      </div>
    </section>
  );
}
