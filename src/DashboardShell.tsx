import * as React from 'react';

export interface DashboardNavItem {
  label: string;
  href: string;
  /** Icon slot, e.g. a Lucide icon. */
  icon?: React.ReactNode;
  active?: boolean;
}

export interface DashboardShellProps {
  /** Logo/wordmark shown at the top of the sidebar. */
  logo: React.ReactNode;
  /** Sidebar nav items. */
  navItems: DashboardNavItem[];
  /** Sign-out button label. */
  signOutLabel?: string;
  onSignOut?: () => void;
  /** Content rendered in the collapsed mobile top bar (hamburger, etc). */
  mobileBarActions?: React.ReactNode;
  /** Main content area. */
  children: React.ReactNode;
}

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
export function DashboardShell({
  logo,
  navItems,
  signOutLabel = 'Sign out',
  onSignOut,
  mobileBarActions,
  children,
}: DashboardShellProps) {
  return (
    <div className="launchwp launchwp-dashboard-shell">
      <aside className="launchwp-dashboard-shell__sidebar">
        <div className="launchwp-dashboard-shell__logo">{logo}</div>
        <nav className="launchwp-dashboard-shell__nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`launchwp-dashboard-shell__nav-item ${
                item.active ? 'launchwp-dashboard-shell__nav-item--active' : ''
              }`.trim()}
            >
              {item.icon && <span className="launchwp-dashboard-shell__nav-icon">{item.icon}</span>}
              {item.label}
            </a>
          ))}
        </nav>
        <button type="button" className="launchwp-dashboard-shell__signout" onClick={onSignOut}>
          {signOutLabel}
        </button>
      </aside>
      <div className="launchwp-dashboard-shell__main">
        <div className="launchwp-dashboard-shell__topbar">
          <span className="launchwp-dashboard-shell__logo">{logo}</span>
          {mobileBarActions}
        </div>
        <div className="launchwp-dashboard-shell__content">{children}</div>
      </div>
    </div>
  );
}
