import * as React from 'react';
import { SiteCard } from '@launchwp/ui';

export const Ready = () => (
  <SiteCard
    name="fittric.com"
    domain="fittric.com"
    status="ready"
    region="Singapore (sgp1)"
    storage="1.2 GB / 5 GB"
    actions={<>
      <a href="/dashboard/sites/fittric">Manage</a>
      <a href="https://fittric.com" target="_blank" rel="noreferrer">Visit</a>
    </>}
  />
);

export const Grid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
    <SiteCard
      name="launch-smoke.launchwp.dev"
      domain="launch-smoke.launchwp.dev"
      status="ready"
      region="Singapore (sgp1)"
      storage="0.4 GB / 5 GB"
    />
    <SiteCard
      name="fittric.com"
      domain="fittric.com"
      status="provisioning"
      region="Bangalore (blr1)"
      storage="1.2 GB / 5 GB"
    />
  </div>
);
