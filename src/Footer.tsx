import * as React from 'react';

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  /** Brand name/wordmark. */
  brand: React.ReactNode;
  /** One-line tagline under the brand. */
  tagline?: React.ReactNode;
  /** Link columns (2-4), e.g. Product / Company / Legal. */
  columns?: FooterColumn[];
  /** Bottom-left legal line, e.g. "(c) 2026 LaunchWP". */
  legal?: React.ReactNode;
  /** Bottom-right note. */
  note?: React.ReactNode;
}

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
export function Footer({ brand, tagline, columns = [], legal, note }: FooterProps) {
  return (
    <footer className="launchwp launchwp-footer">
      <div className="launchwp-footer__top">
        <div>
          <p className="launchwp-footer__brand">{brand}</p>
          {tagline && <p className="launchwp-footer__tagline">{tagline}</p>}
        </div>
        {columns.length > 0 && (
          <div className="launchwp-footer__columns">
            {columns.map((col) => (
              <div className="launchwp-footer__col" key={col.heading}>
                <h4>{col.heading}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      {(legal || note) && (
        <div className="launchwp-footer__bottom">
          <span>{legal}</span>
          <span>{note}</span>
        </div>
      )}
    </footer>
  );
}
