import {ArrowRight, Check, Sparkles} from 'lucide-react';
import Container from '@/components/Container';

const shopifyAppUrl = 'https://apps.shopify.com/analytics-app-2';

const tiers = [
  {
    name: 'Trial',
    id: 'tier-trial',
    href: shopifyAppUrl,
    price: 'Free',
    priceSuffix: '',
    description: 'Understand your catalog and test the optimization workflow.',
    features: [
      'Full store health diagnostic',
      '1 AI product enhancement',
      '100 AI credits',
      'Review before publishing',
    ],
    cta: 'Install free',
    featured: false,
  },
  {
    name: 'Basic',
    id: 'tier-basic',
    href: `${shopifyAppUrl}?plan=1`,
    price: '$19.99',
    priceSuffix: '/ month',
    description: 'For small stores beginning structured catalog optimization.',
    features: [
      'Full store health diagnostic',
      '10 AI product enhancements',
      '1,000 AI credits',
      'Sales map and profit tracking',
    ],
    cta: 'Choose Basic',
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: `${shopifyAppUrl}?plan=2`,
    price: '$49.99',
    priceSuffix: '/ month',
    description: 'For growing merchants optimizing content on a regular basis.',
    features: [
      'Everything in Basic',
      '25 AI product enhancements',
      '2,500 AI credits',
      'Controlled review workflow',
    ],
    cta: 'Choose Professional',
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: `${shopifyAppUrl}?plan=3`,
    price: '$99.99',
    priceSuffix: '/ month',
    description: 'For larger catalogs, multilingual operations, and advanced AI workflows.',
    features: [
      'Everything in Professional',
      '65 AI product enhancements',
      '6,500 AI credits',
      '30+ languages and AI search API',
    ],
    cta: 'Choose Enterprise',
    featured: false,
  },
];

const NexGenPricing = () => {
  return (
    <section id="pricing" className="relative isolate overflow-hidden bg-gray-950 px-6 py-24 text-white sm:py-32 lg:px-8">
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-violet-500/15 blur-3xl" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            Simple monthly plans
          </div>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Start with the audit. Scale with the catalog.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Every plan begins with a full store diagnostic. Upgrade based on the
            number of AI enhancements and advanced growth features required.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className={
                tier.featured
                  ? 'relative flex h-full flex-col rounded-[28px] border border-indigo-400/40 bg-white p-7 text-gray-950 shadow-2xl shadow-indigo-950/30'
                  : 'relative flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-7 text-white'
              }
            >
              {tier.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-indigo-600 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                  Recommended
                </span>
              )}

              <div>
                <h3
                  id={tier.id}
                  className={
                    tier.featured
                      ? 'text-sm font-semibold text-indigo-600'
                      : 'text-sm font-semibold text-indigo-300'
                  }
                >
                  {tier.name}
                </h3>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
                  {tier.priceSuffix && (
                    <span
                      className={
                        tier.featured
                          ? 'pb-1 text-xs font-medium text-gray-400'
                          : 'pb-1 text-xs font-medium text-gray-500'
                      }
                    >
                      {tier.priceSuffix}
                    </span>
                  )}
                </div>
                <p
                  className={
                    tier.featured
                      ? 'mt-5 min-h-16 text-sm leading-6 text-gray-600'
                      : 'mt-5 min-h-16 text-sm leading-6 text-gray-400'
                  }
                >
                  {tier.description}
                </p>
              </div>

              <div
                className={
                  tier.featured
                    ? 'my-6 h-px bg-gray-100'
                    : 'my-6 h-px bg-white/10'
                }
              />

              <ul className="flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={
                      tier.featured
                        ? 'flex gap-3 text-sm text-gray-700'
                        : 'flex gap-3 text-sm text-gray-300'
                    }
                  >
                    <span
                      className={
                        tier.featured
                          ? 'mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700'
                          : 'mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300'
                      }
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                target="_blank"
                rel="noreferrer"
                aria-describedby={tier.id}
                className={
                  tier.featured
                    ? 'mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 py-3 text-xs font-semibold text-white transition hover:bg-gray-800'
                    : 'mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-white transition hover:border-white/20 hover:bg-white/10'
                }
              >
                {tier.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-xs text-gray-400 sm:flex-row">
          <p>All charges are billed in USD through Shopify every 30 days.</p>
          <a
            href={shopifyAppUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-indigo-300 hover:text-indigo-200"
          >
            View official Shopify listing
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default NexGenPricing;
