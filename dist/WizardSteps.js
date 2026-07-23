import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
/**
 * A numbered step indicator for multi-step flows like the new-site wizard.
 * Steps before `currentStep` render as done (checked), the active one as
 * current, and the rest as todo.
 *
 * @example
 * <WizardSteps steps={['Plan', 'Site details', 'Region', 'Review']} currentStep={1} />
 */
export function WizardSteps({ steps, currentStep }) {
    return (_jsx("div", { className: "launchwp launchwp-wizard-steps", children: steps.map((label, i) => {
            const state = i < currentStep ? 'done' : i === currentStep ? 'current' : 'todo';
            return (_jsxs(React.Fragment, { children: [_jsxs("div", { className: `launchwp-wizard-steps__step launchwp-wizard-steps__step--${state}`, children: [_jsx("span", { className: "launchwp-wizard-steps__index", children: state === 'done' ? '✓' : i + 1 }), _jsx("span", { className: "launchwp-wizard-steps__label", children: label })] }), i < steps.length - 1 && (_jsx("div", { className: `launchwp-wizard-steps__connector ${i < currentStep ? 'launchwp-wizard-steps__connector--done' : ''}`.trim() }))] }, label));
        }) }));
}
