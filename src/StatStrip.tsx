import * as React from 'react';

export interface StatStripItem {
  label: string;
  value: string;
  sublabel?: string;
  /** Icon slot, e.g. a Lucide icon. */
  icon?: React.ReactNode;
}

export interface StatStripProps {
  items: StatStripItem[];
}

/**
 * A row of dashboard KPIs, divided by thin rules. Compose at the top of
 * /dashboard or /dashboard/billing.
 *
 * @example
 * <StatStrip items={[
 *   { label: 'Sites', value: '3', sublabel: 'across 2 regions' },
 *   { label: 'Storage used', value: '4.1 GB', sublabel: 'of 15 GB' },
 *   { label: 'Pending approvals', value: '2', sublabel: 'awaiting review' },
 * ]} />
 */
export function StatStrip({ items }: StatStripProps) {
  return (
    <div className="launchwp launchwp-stat-strip">
      {items.map((item, i) => (
        <div className="launchwp-stat-strip__item" key={i}>
          {item.icon && <span className="launchwp-stat-strip__icon">{item.icon}</span>}
          <span className="launchwp-stat-strip__label">{item.label}</span>
          <span className="launchwp-stat-strip__value">{item.value}</span>
          {item.sublabel && <span className="launchwp-stat-strip__sublabel">{item.sublabel}</span>}
        </div>
      ))}
    </div>
  );
}
