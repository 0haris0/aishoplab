import {
  ArrowRight,
  BarChart3,
  Braces,
  CheckCircle2,
  Code2,
  Gauge,
  Layers3,
  PackageSearch,
  ServerCog,
  ShoppingBag,
  Sparkles,
  Workflow,
} from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import Container from '@/components/Container';
import FadeIn from '@/components/FadeIn';
import Services from '@/components/Services';

const capabilities = [
  {
    title: 'Shopify products',
    description:
      'Public and custom apps, product workflows, analytics, integrations, and merchant-facing experiences.',
    icon: ShoppingBag,
  },
  {
    title: 'Full-stack platforms',
    description:
      'Production web applications with clear architecture, responsive interfaces, APIs, and operational tooling.',
    icon: Layers3,
  },
  {
    title: 'AI-assisted workflows',
    description:
      'Practical automation for content, analysis, internal operations, and data-heavy business processes.',
    icon: Workflow,
  },
];

const stackItems = [
  {label: 'React / Next.js', icon: Code2},
  {label: 'Node.js APIs', icon: ServerCog},
  {label: 'Shopify GraphQL', icon: Braces},
  {label: 'AI integrations', icon: Sparkles},
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-gray-950">
      <section className="relative isolate px-6 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,_rgba(99,102,241,0.13),_transparent_32%),radial-gradient(circle_at_88%_24%,_rgba(16,185,129,0.10),_transparent_28%)]" />

        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Product engineering from Sarajevo
              </div>

              <h1 className="mt-7 max-w-4xl font-display text-5xl font-medium tracking-[-0.04em] text-neutral-950 sm:text-7xl lg:text-[76px] lg:leading-[0.98]">
                Build software that moves the business forward.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
                Ai Shop Lab designs and develops Shopify products, full-stack web
                platforms, and AI-assisted workflows built around measurable
                operational outcomes.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-neutral-950/15 transition hover:-translate-y-0.5 hover:bg-neutral-800"
                >
                  Discuss a project
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/nexgen"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50"
                >
                  Explore NexGen
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-neutral-500">
                {['Product-first delivery', 'Maintainable architecture', 'Transparent execution'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn className="relative">
              <div className="absolute -left-10 top-16 h-48 w-48 rounded-full bg-indigo-300/30 blur-3xl" />
              <div className="absolute -right-10 bottom-6 h-48 w-48 rounded-full bg-emerald-300/30 blur-3xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-950 p-3 shadow-[0_35px_100px_-35px_rgba(15,23,42,0.45)] sm:p-5">
                <div className="flex items-center justify-between px-3 py-2 text-white">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Product system
                  </span>
                </div>

                <div className="mt-2 rounded-[24px] bg-neutral-100 p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                        Delivery overview
                      </p>
                      <p className="mt-1 text-lg font-semibold tracking-tight text-neutral-950">
                        From business problem to production
                      </p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950 text-white">
                      <Sparkles className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                          <ShoppingBag className="h-4 w-4" />
                        </span>
                        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold text-emerald-600">
                          Live product
                        </span>
                      </div>
                      <p className="mt-5 text-xs font-semibold text-neutral-950">NexGen AI</p>
                      <p className="mt-1 text-[10px] leading-4 text-neutral-500">
                        Shopify catalog audit, optimization, translation, and analytics.
                      </p>
                      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                        <div className="h-full w-[78%] rounded-full bg-indigo-600" />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-neutral-950 p-4 text-white shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-indigo-300">
                          <Layers3 className="h-4 w-4" />
                        </span>
                        <span className="text-[9px] font-semibold text-neutral-500">FULL STACK</span>
                      </div>
                      <p className="mt-5 text-xs font-semibold">Web platforms</p>
                      <p className="mt-1 text-[10px] leading-4 text-neutral-400">
                        Interfaces, services, data models, integrations, and deployment.
                      </p>
                      <div className="mt-4 grid grid-cols-4 gap-1.5">
                        {[44, 70, 58, 88].map((height, index) => (
                          <div key={`${height}-${index}`} className="flex h-10 items-end rounded bg-white/5 p-1">
                            <div style={{height: `${height}%`}} className="w-full rounded-sm bg-indigo-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                          Engineering stack
                        </p>
                        <p className="mt-1 text-xs font-semibold text-neutral-900">
                          Modern tools, selected for the operating model
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {stackItems.map(({label, icon: Icon}) => (
                          <div key={label} className="flex items-center gap-2 rounded-lg bg-neutral-50 px-2.5 py-2 text-[9px] font-semibold text-neutral-600">
                            <Icon className="h-3 w-3 text-indigo-600" />
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="border-y border-neutral-100 bg-neutral-50/70 px-6 py-10 lg:px-8">
        <Container>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              ['10+', 'Years of engineering experience'],
              ['Full-stack', 'End-to-end product delivery'],
              ['Shopify', 'Commerce specialization'],
              ['AI-ready', 'Practical automation workflows'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-medium text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-6 py-24 sm:py-32 lg:px-8">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Core capabilities
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-[-0.035em] text-neutral-950 sm:text-5xl">
              One delivery partner across product, platform, and automation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              We work from the operational problem outward, choosing the smallest
              architecture that can deliver the required outcome and remain easy to evolve.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {capabilities.map(({title, description, icon: Icon}, index) => (
              <article
                key={title}
                className={
                  index === 1
                    ? 'relative overflow-hidden rounded-[28px] bg-neutral-950 p-8 text-white'
                    : 'relative overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50 p-8'
                }
              >
                <div
                  className={
                    index === 1
                      ? 'absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl'
                      : 'absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl'
                  }
                />
                <span
                  className={
                    index === 1
                      ? 'relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-300'
                      : 'relative flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white'
                  }
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-8 text-xl font-semibold tracking-tight">{title}</h3>
                <p
                  className={
                    index === 1
                      ? 'relative mt-3 text-sm leading-6 text-neutral-400'
                      : 'relative mt-3 text-sm leading-6 text-neutral-600'
                  }
                >
                  {description}
                </p>
                <div className="relative mt-8 flex items-center gap-2 text-xs font-semibold text-indigo-500">
                  Explore capability
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-6 lg:px-8">
        <Container>
          <div className="relative overflow-hidden rounded-[36px] bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-14">
            <div className="absolute left-1/3 top-0 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-500/25 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-500/15 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-indigo-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  Ai Shop Lab product
                </div>
                <h2 className="mt-6 font-display text-4xl font-medium tracking-[-0.035em] sm:text-5xl">
                  NexGen turns Shopify catalog issues into an actionable growth workflow.
                </h2>
                <p className="mt-6 text-base leading-7 text-neutral-400 sm:text-lg">
                  Audit products, generate controlled AI improvements, translate
                  content, and connect catalog quality with revenue signals.
                </p>
                <a
                  href="/nexgen"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-neutral-100"
                >
                  See NexGen in detail
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-white/[0.05] p-4 backdrop-blur sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Store health
                    </p>
                    <p className="mt-1 text-sm font-semibold">Catalog overview</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                    Audit complete
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-[150px_1fr]">
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-white/[0.05] p-5">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-[8px] border-white/10 border-r-indigo-400 border-t-indigo-400">
                      <span className="text-3xl font-semibold">78</span>
                      <span className="mt-3 text-[10px] text-neutral-500">/100</span>
                    </div>
                    <p className="mt-4 text-[10px] text-neutral-500">Store score</p>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      ['34', 'SEO issues', PackageSearch, 'text-red-300 bg-red-400/10'],
                      ['12', 'Content opportunities', Sparkles, 'text-amber-300 bg-amber-400/10'],
                      ['8', 'Deadstock risks', Gauge, 'text-violet-300 bg-violet-400/10'],
                      ['+14%', 'Revenue trend', BarChart3, 'text-emerald-300 bg-emerald-400/10'],
                    ].map(([value, label, Icon, color]) => (
                      <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/10 px-3 py-2.5">
                        <div className="flex items-center gap-3">
                          <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${color}`}>
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-[10px] text-neutral-400">{label}</span>
                        </div>
                        <span className="text-xs font-semibold text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Services />
      <ContactSection />
    </div>
  );
}
