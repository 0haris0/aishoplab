import {CheckIcon} from '@heroicons/react/20/solid';

const shopifyAppUrl = 'https://apps.shopify.com/analytics-app-2';

const tiers = [
  {
    name: 'Trial plan',
    id: 'tier-trial',
    href: shopifyAppUrl,
    priceMonthly: 'Free',
    description: 'Run a full store diagnostic and test the NexGen optimization workflow before upgrading.',
    features: [
      'Full store health diagnostic',
      '1 AI product enhancement (100 credits)',
      'Review changes before publishing',
      'One-click optimization',
    ],
    featured: false,
  },
  {
    name: 'Basic plan',
    id: 'tier-basic',
    href: `${shopifyAppUrl}?plan=1`,
    priceMonthly: '$19.99',
    description: 'For growing stores that need product optimization and day-to-day profitability visibility.',
    features: [
      'Full store health diagnostic',
      '10 AI product enhancements (1,000 credits)',
      'Global sales map tracking',
      'Real-time profit tracking',
    ],
    featured: false,
  },
  {
    name: 'Professional plan',
    id: 'tier-professional',
    href: `${shopifyAppUrl}?plan=2`,
    priceMonthly: '$49.99',
    description: 'For merchants optimizing more products with a controlled review and approval workflow.',
    features: [
      'Everything in Basic',
      '25 AI product enhancements (2,500 credits)',
      'Manual review before changes go live',
      'One-click optimization',
    ],
    featured: true,
  },
  {
    name: 'Enterprise plan',
    id: 'tier-enterprise',
    href: `${shopifyAppUrl}?plan=3`,
    priceMonthly: '$99.99',
    description: 'For larger catalogs that need multilingual content and advanced AI search integrations.',
    features: [
      'Everything in Professional',
      '65 AI product enhancements (6,500 credits)',
      '30+ language translation with RTL support',
      'External AI search API',
    ],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NexGenPricing = () => {
  return (
    <section className="relative isolate bg-white px-6 py-20 sm:py-28 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <p className="text-base font-semibold text-indigo-600">NexGen pricing</p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Start free and scale when the catalog grows
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Every plan includes a store health diagnostic. Upgrade based on the number of AI product enhancements and advanced growth features you need.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <article
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'bg-gray-900 shadow-2xl ring-gray-900'
                : 'bg-white ring-gray-200',
              'flex h-full flex-col rounded-3xl p-8 ring-1',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-indigo-300' : 'text-indigo-600',
                'text-base font-semibold',
              )}
            >
              {tier.name}
            </h3>

            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-4xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              {tier.priceMonthly !== 'Free' && (
                <span className={tier.featured ? 'text-gray-400' : 'text-gray-500'}>
                  /month
                </span>
              )}
            </p>

            <p
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-5 text-sm leading-6',
              )}
            >
              {tier.description}
            </p>

            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 flex-1 space-y-3 text-sm leading-6',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? 'text-indigo-300' : 'text-indigo-600',
                      'h-6 w-5 flex-none',
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={tier.href}
              target="_blank"
              rel="noreferrer"
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-700 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
              )}
            >
              {tier.priceMonthly === 'Free' ? 'Install free' : 'Choose plan'}
            </a>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-500">
        All charges are billed in USD. Recurring and usage-based charges are billed every 30 days through Shopify.
      </p>
    </section>
  );
};

export default NexGenPricing;
