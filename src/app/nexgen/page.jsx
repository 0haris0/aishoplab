import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Gauge,
  Globe2,
  Languages,
  PackageSearch,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Wand2,
} from 'lucide-react';
import Container from '@/components/Container';
import Accordion from '@/components/Accordion';
import NexGenPricing from '@/components/NexGenPricing';
import NexGenDashboardPreview from '@/components/NexGenDashboardPreview';

const shopifyAppUrl = 'https://apps.shopify.com/analytics-app-2';

const auditSignals = [
  'Missing SEO metadata',
  'Weak descriptions',
  'Incomplete product data',
  'Image and alt-text issues',
  'Deadstock risk',
  'Pricing opportunities',
];

const workflowSteps = [
  {
    number: '01',
    title: 'Analyze the store',
    description:
      'NexGen scans the catalog and groups product, SEO, content, and performance issues by priority.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Generate improvements',
    description:
      'Create AI-assisted titles, descriptions, metadata, translations, and optimization recommendations.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Review and publish',
    description:
      'Approve, edit, reject, or restore supported changes before they become part of the live catalog.',
    icon: CheckCircle2,
  },
];

const featureCards = [
  {
    title: 'AI Store Audit',
    description:
      'Turn a complex catalog into a prioritized action plan with a clear store score and issue breakdown.',
    icon: Gauge,
    className: 'lg:col-span-2',
    visual: 'audit',
  },
  {
    title: 'Product optimizer',
    description:
      'Improve titles, descriptions, tags, SEO fields, and image alt text without losing editorial control.',
    icon: Wand2,
    className: 'lg:col-span-1',
    visual: 'optimizer',
  },
  {
    title: 'Translations at scale',
    description:
      'Translate products and supporting content into 30+ languages, including RTL-ready workflows.',
    icon: Languages,
    className: 'lg:col-span-1',
    visual: 'translations',
  },
  {
    title: 'Profit and sales intelligence',
    description:
      'Connect catalog work with revenue, margin, discounts, and geographic sales performance.',
    icon: BarChart3,
    className: 'lg:col-span-2',
    visual: 'analytics',
  },
];

const accordionItems = [
  {
    title: 'What does NexGen do?',
    content:
      'NexGen audits your Shopify catalog, identifies product and SEO issues, and generates AI-assisted improvements for titles, descriptions, metadata, translations, and supporting store content.',
  },
  {
    title: 'Can I review changes before they go live?',
    content:
      'Yes. NexGen is built around a controlled review workflow. You can inspect, edit, approve, or reject supported AI suggestions before publishing them to your store.',
  },
  {
    title: 'What is included in the free plan?',
    content:
      'The Trial plan includes a full store health diagnostic, one AI product enhancement with 100 credits, review controls, and one-click optimization.',
  },
  {
    title: 'How do credits work?',
    content:
      'Credits are consumed by AI operations. Paid plans currently include 1,000 credits for 10 enhancements, 2,500 credits for 25 enhancements, or 6,500 credits for 65 enhancements.',
  },
  {
    title: 'Does NexGen support translations?',
    content:
      'The Enterprise plan includes translation support for more than 30 languages, including right-to-left language support where available.',
  },
  {
    title: 'How is my store data used?',
    content:
      'NexGen uses authorized Shopify data only to provide requested app functionality, analytics, support, and product improvements. Full details are available in the NexGen Privacy Policy.',
  },
];

const AuditVisual = () => (
  <div className="mt-8 grid gap-3 sm:grid-cols-[160px_1fr]">
    <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 text-center">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm">
        <div className="absolute inset-2 rounded-full border-[7px] border-indigo-100 border-r-indigo-600 border-t-indigo-600" />
        <div className="relative">
          <span className="text-3xl font-semibold text-gray-950">78</span>
          <span className="text-xs text-gray-400">/100</span>
        </div>
      </div>
      <p className="mt-3 text-xs font-semibold text-gray-900">Store health score</p>
      <p className="mt-1 text-[10px] font-medium text-emerald-600">+6 this month</p>
    </div>
    <div className="grid gap-2 sm:grid-cols-2">
      {[
        ['34', 'SEO issues', 'bg-red-50 text-red-600'],
        ['12', 'Weak descriptions', 'bg-amber-50 text-amber-600'],
        ['8', 'Deadstock risks', 'bg-violet-50 text-violet-600'],
        ['5', 'Pricing signals', 'bg-emerald-50 text-emerald-600'],
      ].map(([value, label, color]) => (
        <div key={label} className="rounded-xl border border-gray-200 bg-white p-4">
          <div className={`inline-flex rounded-md px-2 py-1 text-[10px] font-semibold ${color}`}>
            Needs attention
          </div>
          <p className="mt-3 text-2xl font-semibold text-gray-950">{value}</p>
          <p className="mt-1 text-xs text-gray-500">{label}</p>
        </div>
      ))}
    </div>
  </div>
);

const OptimizerVisual = () => (
  <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <div className="border-b border-gray-100 bg-gray-50 px-4 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
        AI suggestion
      </p>
    </div>
    <div className="space-y-3 p-4">
      <div>
        <p className="text-[10px] font-medium text-gray-400">Original title</p>
        <p className="mt-1 text-xs text-gray-500 line-through">Leather Backpack</p>
      </div>
      <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-3">
        <p className="text-[10px] font-medium text-indigo-600">Optimized title</p>
        <p className="mt-1 text-xs font-semibold leading-5 text-gray-900">
          Classic Leather Backpack — Handmade Everyday Carry
        </p>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-gray-950 px-3 py-2 text-[10px] font-semibold text-white">
          <Check className="h-3 w-3" />
          Approve
        </div>
        <div className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-gray-500">
          <RefreshCcw className="h-3 w-3" />
        </div>
      </div>
    </div>
  </div>
);

const TranslationVisual = () => (
  <div className="mt-8 space-y-3">
    {[
      ['EN', 'English', 'Published', 'bg-blue-50 text-blue-600'],
      ['DE', 'Deutsch', 'Ready', 'bg-emerald-50 text-emerald-600'],
      ['FR', 'Français', 'Ready', 'bg-emerald-50 text-emerald-600'],
      ['AR', 'العربية', 'Review', 'bg-amber-50 text-amber-600'],
    ].map(([code, language, status, statusClass]) => (
      <div
        key={code}
        className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-3"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-950 text-[10px] font-semibold text-white">
            {code}
          </span>
          <span className="text-xs font-semibold text-gray-800">{language}</span>
        </div>
        <span className={`rounded-full px-2 py-1 text-[9px] font-semibold ${statusClass}`}>
          {status}
        </span>
      </div>
    ))}
  </div>
);

const AnalyticsVisual = () => {
  const bars = [34, 48, 42, 64, 58, 76, 88, 82, 94, 100];

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_180px]">
      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-900">Revenue trend</p>
            <p className="mt-1 text-[10px] text-gray-400">Last 30 days</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-600">
            +14.2%
          </span>
        </div>
        <div className="mt-6 flex h-28 items-end gap-2">
          {bars.map((bar, index) => (
            <div key={`${bar}-${index}`} className="flex h-full flex-1 items-end">
              <div
                style={{height: `${bar}%`}}
                className={
                  index > 6
                    ? 'w-full rounded-t-md bg-indigo-600'
                    : 'w-full rounded-t-md bg-indigo-100'
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <div className="rounded-2xl bg-gray-950 p-4 text-white">
          <CircleDollarSign className="h-5 w-5 text-emerald-300" />
          <p className="mt-5 text-[10px] text-gray-400">Tracked revenue</p>
          <p className="mt-1 text-2xl font-semibold">$18.4k</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <Globe2 className="h-5 w-5 text-indigo-600" />
          <p className="mt-5 text-[10px] text-gray-400">Top market</p>
          <p className="mt-1 text-sm font-semibold text-gray-900">United States</p>
        </div>
      </div>
    </div>
  );
};

const NexGenPage = () => {
  return (
    <div className="overflow-hidden bg-white text-gray-950">
      <section className="relative isolate px-6 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.13),_transparent_36%),radial-gradient(circle_at_85%_18%,_rgba(16,185,129,0.10),_transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <a
              href="#audit"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              AI-powered Shopify catalog optimization
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-gray-950 sm:text-7xl lg:text-[82px] lg:leading-[0.98]">
              Turn catalog problems into{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
                growth opportunities.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl">
              NexGen audits your Shopify store, prioritizes product and SEO issues,
              generates AI-assisted improvements, and keeps you in control before
              anything goes live.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={shopifyAppUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-950/15 transition hover:-translate-y-0.5 hover:bg-gray-800 sm:w-auto"
              >
                Install free on Shopify
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#product"
                className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-gray-500">
              {['Free store audit', 'Review before publishing', 'Safe change history'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div id="product" className="mt-16 sm:mt-20">
            <NexGenDashboardPreview />
          </div>
        </Container>
      </section>

      <section className="border-y border-gray-100 bg-gray-50/70 px-6 py-10 lg:px-8">
        <Container>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              ['6', 'Catalog issue groups'],
              ['30+', 'Supported languages'],
              ['100%', 'Review control'],
              ['1', 'Unified growth workflow'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-3xl font-semibold tracking-tight text-gray-950">{value}</p>
                <p className="mt-1 text-xs font-medium text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="audit" className="px-6 py-24 sm:py-32 lg:px-8">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
                See the whole catalog
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-gray-950 sm:text-5xl">
                Stop guessing what to optimize next.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                NexGen converts scattered catalog quality problems into one clear,
                prioritized backlog. Every recommendation is tied to a product,
                issue type, and next action.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {auditSignals.map((signal) => (
                  <div key={signal} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {signal}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[32px] border border-gray-200 bg-gray-50 p-4 shadow-sm sm:p-7">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-200/50 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5">
                <div className="flex flex-col gap-5 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-950 text-white">
                        <PackageSearch className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-950">Store audit complete</p>
                        <p className="text-[11px] text-gray-400">213 products analyzed in 42 seconds</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-700">
                    Ready for review
                  </div>
                </div>

                <div className="grid gap-5 p-5 sm:grid-cols-[180px_1fr] sm:p-7">
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-950 p-6 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Store score
                    </p>
                    <div className="mt-5 flex h-28 w-28 items-center justify-center rounded-full border-[9px] border-white/10 border-r-indigo-400 border-t-indigo-400">
                      <span className="text-4xl font-semibold">72</span>
                      <span className="mt-4 text-xs text-gray-500">/100</span>
                    </div>
                    <p className="mt-5 text-center text-xs text-gray-400">
                      59 improvements can raise catalog quality.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['34 products', 'Missing or weak SEO metadata', 'High', 'bg-red-500', 'w-[92%]'],
                      ['12 products', 'Descriptions need improvement', 'High', 'bg-amber-500', 'w-[68%]'],
                      ['8 products', 'Potential deadstock risk', 'Medium', 'bg-violet-500', 'w-[46%]'],
                      ['5 products', 'Pricing opportunity detected', 'Medium', 'bg-emerald-500', 'w-[34%]'],
                    ].map(([count, label, priority, barColor, width]) => (
                      <div key={label} className="rounded-xl border border-gray-200 p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold text-gray-900">{label}</p>
                            <p className="mt-1 text-[10px] text-gray-400">{count}</p>
                          </div>
                          <span className="rounded-full bg-gray-100 px-2 py-1 text-[9px] font-semibold text-gray-500">
                            {priority}
                          </span>
                        </div>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
                          <div className={`h-full rounded-full ${barColor} ${width}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-gray-500">
                    Recommended next action:{' '}
                    <span className="font-semibold text-gray-900">Fix missing SEO metadata</span>
                  </p>
                  <div className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white">
                    <Sparkles className="h-3.5 w-3.5" />
                    Fix with AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-950 px-6 py-24 text-white sm:py-32 lg:px-8">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
              Controlled automation
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              AI speed without giving up control.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              NexGen separates analysis, generation, and publishing so merchants
              can move faster without blindly rewriting the live catalog.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {workflowSteps.map(({number, title, description, icon: Icon}, index) => (
              <div key={title} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                {index < workflowSteps.length - 1 && (
                  <div className="absolute left-full top-14 hidden h-px w-5 bg-white/15 lg:block" />
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-gray-600">{number}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Current product content
                  </span>
                  <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-[10px] font-semibold text-red-300">
                    Score 48
                  </span>
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs text-gray-500">Product title</p>
                  <p className="mt-2 text-base font-medium text-gray-300">Leather Backpack</p>
                  <div className="my-5 h-px bg-white/10" />
                  <p className="text-xs text-gray-500">Description</p>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Nice leather bag. Good for daily use. Available in brown and black.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['No SEO title', 'No alt text', 'Weak copy'].map((issue) => (
                      <span key={issue} className="rounded-full bg-red-500/10 px-2.5 py-1 text-[10px] font-medium text-red-300">
                        {issue}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative p-7 lg:p-10">
                <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-indigo-500/15 blur-3xl" />
                <div className="relative flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                    NexGen optimized
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                    Score 92
                  </span>
                </div>
                <div className="relative mt-8 rounded-2xl border border-indigo-400/20 bg-indigo-400/[0.07] p-5">
                  <p className="text-xs text-indigo-300">Optimized title</p>
                  <p className="mt-2 text-base font-semibold text-white">
                    Classic Leather Backpack — Handmade Everyday Carry
                  </p>
                  <div className="my-5 h-px bg-white/10" />
                  <p className="text-xs text-indigo-300">Optimized description</p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    A durable full-grain leather backpack designed for work,
                    travel, and everyday carry, with organized storage and a
                    timeless silhouette.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['SEO ready', 'Brand aligned', 'Alt text added'].map((benefit) => (
                      <span key={benefit} className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                        <Check className="h-3 w-3" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative mt-4 flex gap-3">
                  <div className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold text-gray-950">
                    <Check className="h-4 w-4" />
                    Approve change
                  </div>
                  <div className="flex items-center justify-center rounded-xl border border-white/10 px-4 text-gray-400">
                    <RefreshCcw className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="px-6 py-24 sm:py-32 lg:px-8">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
              One operating system
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-gray-950 sm:text-5xl">
              Everything required to improve and scale the catalog.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Move from isolated AI tools to one connected workflow for audit,
              optimization, content, translation, and performance analysis.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {featureCards.map(({title, description, icon: Icon, className, visual}) => (
              <article
                key={title}
                className={`overflow-hidden rounded-[28px] border border-gray-200 bg-gray-50 p-6 sm:p-8 ${className}`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-gray-950">{title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">{description}</p>
                {visual === 'audit' && <AuditVisual />}
                {visual === 'optimizer' && <OptimizerVisual />}
                {visual === 'translations' && <TranslationVisual />}
                {visual === 'analytics' && <AnalyticsVisual />}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20 lg:px-8">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                Built for safe catalog operations.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
                Review controls, change history, and clear publishing actions keep
                AI assistance inside a merchant-controlled workflow. NexGen does
                not require blind, irreversible automation.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ['Review', 'Inspect every supported suggestion'],
                ['Approve', 'Publish only selected changes'],
                ['Restore', 'Keep a recoverable content history'],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="mt-1 text-xs text-gray-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <NexGenPricing />

      <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">FAQ</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-gray-950">
                Questions before installation.
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-600">
                NexGen starts with a free diagnostic so you can understand the
                workflow and catalog opportunities before choosing a paid plan.
              </p>
              <a
                href="/nexgen/policy"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Read the Privacy Policy
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-4 sm:p-7">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </Container>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <Container>
          <div className="relative overflow-hidden rounded-[36px] bg-gray-950 px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-300">
                <Sparkles className="h-6 w-6" />
              </span>
              <h2 className="mt-7 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Your next catalog improvement starts with one audit.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                Install NexGen, analyze the store, and see which product and SEO
                issues should be fixed first.
              </p>
              <a
                href={shopifyAppUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-gray-100"
              >
                Start free on Shopify
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default NexGenPage;
