import * as React from 'react';

export interface PlanCardProps {
  /** Plan name, e.g. "Growth". */
  name: string;
  /** Price string, preformatted, e.g. "$19". */
  price: string;
  /** Billing period shown after the price, e.g. "/mo". */
  period?: string;
  /** Feature lines, each rendered with a check mark. */
  features: string[];
  /** Highlights this tier with a brand border + flag. */
  highlight?: boolean;
  /** Flag text when `highlight` is set. */
  highlightLabel?: string;
  /** Small line under the feature list doing the per-site math. */
  perSiteMath?: string;
  cta: { label: string; href: string };
}

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
export function PlanCard({
  name,
  price,
  period,
  features,
  highlight = false,
  highlightLabel = 'Most Popular',
  perSiteMath,
  cta,
}: PlanCardProps) {
  return (
    <div className={`launchwp launchwp-plan-card ${highlight ? 'launchwp-plan-card--highlight' : ''}`.trim()}>
      {highlight && <span className="launchwp-plan-card__flag">{highlightLabel}</span>}
      <h3 className="launchwp-plan-card__name">{name}</h3>
      <p className="launchwp-plan-card__price">
        {price}
        {period && <span className="launchwp-plan-card__price-period"> {period}</span>}
      </p>
      {perSiteMath && <p className="launchwp-plan-card__math">{perSiteMath}</p>}
      <ul className="launchwp-plan-card__features">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <a href={cta.href} className="launchwp-plan-card__cta">
        {cta.label}
      </a>
    </div>
  );
}
