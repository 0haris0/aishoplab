import React from 'react';
import Container from '@/components/Container';
import NexGenPricing from '@/components/NexGenPricing';
import Accordion from '@/components/Accordion';

const shopifyAppUrl = 'https://apps.shopify.com/analytics-app-2';

const accordionItems = [
  {
    title: 'What does NexGen do?',
    content:
      'NexGen audits your Shopify catalog, identifies product and SEO issues, and generates AI-assisted improvements for titles, descriptions, metadata, translations, and related store content.',
  },
  {
    title: 'Can I review changes before they go live?',
    content:
      'Yes. NexGen is built around a review workflow, so you can inspect, edit, approve, or reject supported AI suggestions before publishing them to your store.',
  },
  {
    title: 'What is included in the free plan?',
    content:
      'The free Trial plan includes a full store health diagnostic, one AI product enhancement with 100 credits, review controls, and one-click optimization.',
  },
  {
    title: 'How do credits work?',
    content:
      'Credits are consumed by AI operations. The paid plans currently include 1,000 credits for 10 enhancements, 2,500 credits for 25 enhancements, or 6,500 credits for 65 enhancements.',
  },
  {
    title: 'Does NexGen support translations?',
    content:
      'The Enterprise plan includes translation support for more than 30 languages, including right-to-left language support where available.',
  },
  {
    title: 'How is my store data used?',
    content:
      'NexGen uses authorized Shopify data only to provide requested app functionality, analytics, support, and product improvements. More details are available in the NexGen Privacy Policy.',
  },
];

const benefits = [
  {
    title: 'Find catalog issues',
    description:
      'Run a store health diagnostic and prioritize missing SEO, weak product content, incomplete data, and optimization opportunities.',
  },
  {
    title: 'Generate controlled improvements',
    description:
      'Create AI-assisted product content while retaining manual review and approval before supported changes are published.',
  },
  {
    title: 'Track growth signals',
    description:
      'Use product, sales, and profitability insights to focus optimization work where it can have the highest business impact.',
  },
];

const NexGenPage = () => {
  return (
    <main className="bg-white text-gray-900">
      <section className="border-b border-gray-100 px-6 py-20 sm:py-28 lg:px-8">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-base font-semibold text-indigo-600">
              NexGen AI for Shopify
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Audit and optimize your product catalog with AI
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Scan your store for product and SEO issues, generate improvements,
              and review every supported change before it goes live.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={shopifyAppUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Install from Shopify
              </a>
              <a
                href="/nexgen/policy"
                className="text-sm font-semibold text-gray-700 hover:text-indigo-600"
              >
                Read the Privacy Policy →
              </a>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-7"
              >
                <h2 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <NexGenPricing />

      <section className="bg-gray-50 px-6 py-20 sm:py-24 lg:px-8">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-base font-semibold text-indigo-600">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Common questions about NexGen
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <Accordion items={accordionItems} />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default NexGenPage;
