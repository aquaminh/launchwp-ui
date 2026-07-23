import * as React from 'react';
export interface FeatureCardProps {
    /** Icon slot, e.g. a Lucide icon. */
    icon?: React.ReactNode;
    /** Feature name. */
    title: string;
    /** One or two sentences explaining the feature. */
    body: string;
    /** Optional "learn more" link. */
    link?: {
        label: string;
        href: string;
    };
}
/**
 * One feature in a homepage grid: icon, title, short body, optional link.
 * Compose 3-6 side by side in a CSS grid.
 *
 * @example
 * <FeatureCard
 *   icon={<Layers />}
 *   title="Staging on every plan"
 *   body="Clone a site to staging, test changes, promote when ready - no separate add-on."
 *   link={{ label: 'How staging works', href: '/docs/staging' }}
 * />
 */
export declare function FeatureCard({ icon, title, body, link }: FeatureCardProps): React.JSX.Element;
