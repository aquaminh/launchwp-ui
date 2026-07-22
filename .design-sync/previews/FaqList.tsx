import * as React from 'react';
import { FaqList } from '@launchwp/ui';

export const PricingFaq = () => (
  <FaqList
    items={[
      {
        question: 'Can I move an existing WordPress site to LaunchWP?',
        answer: 'Yes - point us at your current host and we migrate database, files, and DNS.',
      },
      {
        question: 'What happens to a rejected AI change?',
        answer: 'It stays in the approval queue as rejected; nothing is applied to the site.',
      },
      {
        question: 'What is the difference between Growth and Pro?',
        answer: 'Growth runs on the shared pool server; Pro and Agency get a dedicated droplet plus the approval queue for AI-proposed changes.',
      },
    ]}
  />
);
