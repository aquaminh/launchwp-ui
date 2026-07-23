import * as React from 'react';
export interface ProofStripStat {
    label: string;
    value: string;
}
export interface ProofStripProps {
    /** Tech-stack / infrastructure logos slot (e.g. GridPane, DigitalOcean, PayPal). */
    logos?: React.ReactNode;
    /** Honest, verifiable stat items - no fake-customer-count patterns. */
    stats?: ProofStripStat[];
}
/**
 * An honest proof row under the hero: the infrastructure the product runs
 * on, plus a handful of real, checkable stats. Deliberately has no
 * "10,000+ happy customers" style claims - only measurable numbers.
 *
 * @example
 * <ProofStrip
 *   logos={<InfraLogos items={['GridPane', 'DigitalOcean', 'PayPal', 'Upstash']} />}
 *   stats={[
 *     { label: 'Regions live', value: '2' },
 *     { label: 'Backup engine', value: 'restic' },
 *     { label: 'SSL', value: "Let's Encrypt" },
 *   ]}
 * />
 */
export declare function ProofStrip({ logos, stats }: ProofStripProps): React.JSX.Element;
