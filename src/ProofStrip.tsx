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
export function ProofStrip({ logos, stats = [] }: ProofStripProps) {
  return (
    <div className="launchwp launchwp-proof">
      {logos && <div className="launchwp-proof__logos">{logos}</div>}
      {stats.length > 0 && (
        <div className="launchwp-proof__stats">
          {stats.map((s, i) => (
            <div className="launchwp-proof__stat" key={i}>
              <span className="launchwp-proof__stat-value">{s.value}</span>
              <span className="launchwp-proof__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
