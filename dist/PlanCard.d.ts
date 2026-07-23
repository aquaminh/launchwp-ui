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
    cta: {
        label: string;
        href: string;
    };
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
export declare function PlanCard({ name, price, period, features, highlight, highlightLabel, perSiteMath, cta, }: PlanCardProps): React.JSX.Element;
