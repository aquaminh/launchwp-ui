import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export function ProofStrip({ logos, stats = [] }) {
    return (_jsxs("div", { className: "launchwp launchwp-proof", children: [logos && _jsx("div", { className: "launchwp-proof__logos", children: logos }), stats.length > 0 && (_jsx("div", { className: "launchwp-proof__stats", children: stats.map((s, i) => (_jsxs("div", { className: "launchwp-proof__stat", children: [_jsx("span", { className: "launchwp-proof__stat-value", children: s.value }), _jsx("span", { className: "launchwp-proof__stat-label", children: s.label })] }, i))) }))] }));
}
