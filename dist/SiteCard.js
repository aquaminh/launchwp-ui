import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StatusBadge } from './StatusBadge';
/**
 * One WordPress site in the dashboard's site grid: name, domain, status,
 * region, storage usage, and an actions slot.
 *
 * @example
 * <SiteCard
 *   name="fittric.com"
 *   domain="fittric.com"
 *   status="ready"
 *   region="Singapore"
 *   storage="1.2 GB / 5 GB"
 *   actions={<>
 *     <a href="/dashboard/sites/fittric">Manage</a>
 *     <a href="https://fittric.com" target="_blank" rel="noreferrer">Visit</a>
 *   </>}
 * />
 */
export function SiteCard({ name, domain, status, region, storage, actions }) {
    return (_jsxs("article", { className: "launchwp launchwp-site-card", children: [_jsxs("div", { className: "launchwp-site-card__header", children: [_jsxs("div", { children: [_jsx("h3", { className: "launchwp-site-card__name", children: name }), _jsx("span", { className: "launchwp-site-card__domain", children: domain })] }), _jsx(StatusBadge, { status: status })] }), _jsxs("div", { className: "launchwp-site-card__meta", children: [_jsxs("span", { children: ["Region: ", _jsx("strong", { children: region })] }), _jsxs("span", { children: ["Storage: ", _jsx("strong", { children: storage })] })] }), actions && _jsx("div", { className: "launchwp-site-card__actions", children: actions })] }));
}
