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
export function WizardSteps({ steps, currentStep }: WizardStepsProps) {
  return (
    <div className="launchwp launchwp-wizard-steps">
      {steps.map((label, i) => {
        const state = i < currentStep ? 'done' : i === currentStep ? 'current' : 'todo';
        return (
          <React.Fragment key={label}>
            <div className={`launchwp-wizard-steps__step launchwp-wizard-steps__step--${state}`}>
              <span className="launchwp-wizard-steps__index">{state === 'done' ? '✓' : i + 1}</span>
              <span className="launchwp-wizard-steps__label">{label}</span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`launchwp-wizard-steps__connector ${
                  i < currentStep ? 'launchwp-wizard-steps__connector--done' : ''
                }`.trim()}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
