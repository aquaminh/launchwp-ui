import * as React from 'react';
export interface FaqItem {
    question: string;
    answer: React.ReactNode;
}
export interface FaqListProps {
    items: FaqItem[];
}
/**
 * A frequently-asked-questions list rendered as accessible native
 * `<details>`/`<summary>` pairs - keyboard operable and screen-reader
 * friendly with no extra JS.
 *
 * @example
 * <FaqList items={[
 *   { question: 'Can I move an existing WordPress site to LaunchWP?', answer: 'Yes - point us at your current host and we migrate database, files, and DNS.' },
 *   { question: 'What happens to a rejected AI change?', answer: 'It stays in the approval queue as rejected; nothing is applied to the site.' },
 * ]} />
 */
export declare function FaqList({ items }: FaqListProps): React.JSX.Element;
