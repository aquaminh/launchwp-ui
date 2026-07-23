import * as React from 'react';
export interface CtaBandProps {
    title: React.ReactNode;
    subhead?: React.ReactNode;
    primaryCta?: {
        label: string;
        href: string;
    };
    secondaryCta?: {
        label: string;
        href: string;
    };
}
/**
 * A full-bleed closing call-to-action band for the bottom of a landing
 * page: dark inverted surface, title, subhead, one or two CTAs.
 *
 * @example
 * <CtaBand
 *   title="Move your first site over this week"
 *   subhead="Starter is $9/mo with no setup fee - cancel any time."
 *   primaryCta={{ label: 'Start on Starter', href: '/signup' }}
 *   secondaryCta={{ label: 'Talk to us first', href: '/contact' }}
 * />
 */
export declare function CtaBand({ title, subhead, primaryCta, secondaryCta }: CtaBandProps): React.JSX.Element;
