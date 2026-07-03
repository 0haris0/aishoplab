import ContactSection from '@/components/ContactSection';
import Container from '@/components/Container';
import FadeIn from '@/components/FadeIn';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-4xl">
          <p className="text-base font-semibold text-indigo-600">Ai Shop Lab</p>
          <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl">
            Build, optimize, and scale digital products.
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-neutral-600">
            We design and develop Shopify solutions, web applications, and
            AI-assisted workflows that reduce manual work and support measurable
            business growth.
          </p>
        </FadeIn>
      </Container>

      <section className="mt-24 sm:mt-32">
        <Container>
          <FadeIn>
            <div className="overflow-hidden rounded-3xl bg-neutral-950 px-8 py-12 text-white sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
                  Our Shopify product
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Meet NexGen AI — Store Growth OS
                </h2>
                <p className="mt-5 text-base leading-7 text-neutral-300 sm:text-lg">
                  Audit product data, identify SEO and catalog issues, generate
                  AI-assisted improvements, and review supported changes before
                  they are published to your Shopify store.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:ml-10 lg:flex-col">
                <a
                  href="/nexgen"
                  className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-neutral-950 hover:bg-neutral-100"
                >
                  Explore NexGen
                </a>
                <a
                  href="https://apps.shopify.com/analytics-app-2"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-neutral-700 px-5 py-3 text-center text-sm font-semibold text-white hover:border-neutral-500"
                >
                  View on Shopify
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Services />
      <ContactSection />
    </main>
  );
}
