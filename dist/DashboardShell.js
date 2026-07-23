import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * The logged-in dashboard frame: a fixed sidebar (logo, nav with icon
 * slots, sign-out) plus a main content area. Below 860px the sidebar hides
 * behind a mobile top bar placeholder.
 *
 * @example
 * <DashboardShell
 *   logo="LaunchWP"
 *   navItems={[
 *     { label: 'Sites', href: '/dashboard', icon: <Globe />, active: true },
 *     { label: 'Approvals', href: '/dashboard/approvals', icon: <ShieldCheck /> },
 *     { label: 'Billing', href: '/dashboard/billing', icon: <CreditCard /> },
 *   ]}
 *   onSignOut={() => signOut()}
 * >
 *   <StatStrip items={[{ label: 'Sites', value: '3' }]} />
 * </DashboardShell>
 */
export function DashboardShell({ logo, navItems, signOutLabel = 'Sign out', onSignOut, mobileBarActions, children, }) {
    return (_jsxs("div", { className: "launchwp launchwp-dashboard-shell", children: [_jsxs("aside", { className: "launchwp-dashboard-shell__sidebar", children: [_jsx("div", { className: "launchwp-dashboard-shell__logo", children: logo }), _jsx("nav", { className: "launchwp-dashboard-shell__nav", children: navItems.map((item) => (_jsxs("a", { href: item.href, className: `launchwp-dashboard-shell__nav-item ${item.active ? 'launchwp-dashboard-shell__nav-item--active' : ''}`.trim(), children: [item.icon && _jsx("span", { className: "launchwp-dashboard-shell__nav-icon", children: item.icon }), item.label] }, item.href))) }), _jsx("button", { type: "button", className: "launchwp-dashboard-shell__signout", onClick: onSignOut, children: signOutLabel })] }), _jsxs("div", { className: "launchwp-dashboard-shell__main", children: [_jsxs("div", { className: "launchwp-dashboard-shell__topbar", children: [_jsx("span", { className: "launchwp-dashboard-shell__logo", children: logo }), mobileBarActions] }), _jsx("div", { className: "launchwp-dashboard-shell__content", children: children })] })] }));
}
