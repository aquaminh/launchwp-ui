import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export function FaqList({ items }) {
    return (_jsx("div", { className: "launchwp launchwp-faq", children: items.map((item, i) => (_jsxs("details", { className: "launchwp-faq__item", children: [_jsx("summary", { className: "launchwp-faq__question", children: item.question }), _jsx("p", { className: "launchwp-faq__answer", children: item.answer })] }, i))) }));
}
