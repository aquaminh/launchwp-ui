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
export function FaqList({ items }: FaqListProps) {
  return (
    <div className="launchwp launchwp-faq">
      {items.map((item, i) => (
        <details className="launchwp-faq__item" key={i}>
          <summary className="launchwp-faq__question">{item.question}</summary>
          <p className="launchwp-faq__answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
