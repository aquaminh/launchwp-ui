import * as React from 'react';
export interface WizardStepsProps {
    /** Step labels in order, e.g. ["Plan", "Site details", "Region", "Review"]. */
    steps: string[];
    /** 0-based index of the step currently active. */
    currentStep: number;
}
/**
 * A numbered step indicator for multi-step flows like the new-site wizard.
 * Steps before `currentStep` render as done (checked), the active one as
 * current, and the rest as todo.
 *
 * @example
 * <WizardSteps steps={['Plan', 'Site details', 'Region', 'Review']} currentStep={1} />
 */
export declare function WizardSteps({ steps, currentStep }: WizardStepsProps): React.JSX.Element;
