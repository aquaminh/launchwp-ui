import * as React from 'react';
import { type SiteStatus } from './StatusBadge';
export interface SiteCardProps {
    /** Site display name, e.g. "fittric.com". */
    name: string;
    /** Live domain, e.g. "fittric.com" or a *.launchwp.dev subdomain. */
    domain: string;
    status: SiteStatus;
    /** Region label, e.g. "Singapore" or "Bangalore". */
    region: string;
    /** Storage usage line, e.g. "1.2 GB / 5 GB". */
    storage: string;
    /** Actions slot - visit/manage/staging buttons. */
    actions?: React.ReactNode;
}
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
export declare function SiteCard({ name, domain, status, region, storage, actions }: SiteCardProps): React.JSX.Element;
