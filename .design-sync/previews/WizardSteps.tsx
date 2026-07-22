import * as React from 'react';
import { WizardSteps } from '@launchwp/ui';

export const NewSiteWizard = () => (
  <WizardSteps steps={['Plan', 'Site details', 'Region', 'Review']} currentStep={2} />
);
