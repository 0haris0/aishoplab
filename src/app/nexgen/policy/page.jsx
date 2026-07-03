import Container from '@/components/Container';

const contactEmail = 'nexgen@aishoplab.com';

const NexGenPolicy = () => {
  return (
    <main className="bg-gray-50 py-12 text-black">
      <Container>
        <article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm">
          <header className="mb-8 border-b pb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              NexGen Privacy Policy
            </h1>
            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Last updated:</span> July 3,
                2026
              </p>
              <p>
                <span className="font-semibold">Contact:</span>{' '}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
              <p>
                <span className="font-semibold">Address:</span> Tešanjska 1,
                71000 Sarajevo, Bosnia and Herzegovina
              </p>
            </div>
          </header>

          <div className="space-y-8 leading-relaxed text-gray-700">
            <section>
              <p>
                NexGen (the &quot;App&quot;) provides AI-assisted product
                optimization, translations, content generation, and analytics to
                merchants using Shopify. This policy explains what information
                the App processes, why it is used, and the choices available to
                merchants.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Information the App processes
              </h2>
              <p className="mb-3">
                After a merchant authorizes the App, NexGen may process the data
                required for enabled features, including:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Store information:</strong> shop name, domain, email,
                  locale, and Shopify identifiers.
                </li>
                <li>
                  <strong>Product and content data:</strong> titles,
                  descriptions, images, tags, collections, product attributes,
                  SEO fields, metafields, translations, blogs, and articles.
                </li>
                <li>
                  <strong>Order and analytics data:</strong> order summaries,
                  product performance, revenue, discounts, and other aggregated
                  metrics used by analytics features.
                </li>
                <li>
                  <strong>Customer-related data:</strong> only where required by
                  an enabled feature and authorized through Shopify permissions.
                </li>
                <li>
                  <strong>Usage and technical data:</strong> feature usage,
                  application events, IP address, browser, operating system, and
                  diagnostic logs used for security, support, and reliability.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                How information is used
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Provide requested product optimization and AI features.</li>
                <li>Generate and manage translations and store content.</li>
                <li>Calculate analytics, reports, and store health insights.</li>
                <li>Maintain security, prevent abuse, and diagnose errors.</li>
                <li>Provide support and improve App performance.</li>
                <li>Comply with applicable legal and Shopify requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Service providers and AI processing
              </h2>
              <p>
                NexGen uses service providers to operate the App. When a merchant
                requests an AI feature, the product or content fields required to
                produce that result may be sent to OpenAI for processing. NexGen
                limits the submitted data to the fields needed for the requested
                operation. Infrastructure, email, monitoring, and analytics
                providers may also process limited data on our behalf under their
                applicable terms and security controls.
              </p>
              <p className="mt-3">
                We do not sell merchant or customer personal information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Data retention and deletion
              </h2>
              <p>
                NexGen retains operational data only while it is needed to provide
                the App, resolve support or security issues, and meet legal
                obligations. Stored shop data is deleted or anonymized within 60
                days after the App is uninstalled or after the related account
                becomes inactive, unless a longer period is required for legal,
                fraud-prevention, or security purposes.
              </p>
              <p className="mt-3">
                Merchants may request access, correction, export, or deletion by
                contacting us at{' '}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {contactEmail}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                International processing
              </h2>
              <p>
                Service providers may process information outside the merchant&apos;s
                country, including in the United States. Where required, we use
                appropriate contractual and organizational safeguards for such
                transfers.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Security
              </h2>
              <p>
                We apply reasonable technical and organizational measures to
                protect information against unauthorized access, alteration,
                disclosure, or loss. No online service can guarantee absolute
                security, but we review access and data handling as the App
                evolves.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Changes to this policy
              </h2>
              <p>
                We may update this policy to reflect changes to the App, service
                providers, legal requirements, or data practices. The current
                version and its effective date will remain available on this
                page.
              </p>
            </section>

            <section className="rounded-md border border-gray-100 bg-gray-50 p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Contact us
              </h2>
              <p>
                Questions or privacy requests can be sent to{' '}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 hover:underline"
                >
                  {contactEmail}
                </a>
                .
              </p>
              <div className="mt-4 font-medium text-gray-800">
                <p>Ai Shop Lab</p>
                <p>Tešanjska 1</p>
                <p>71000 Sarajevo</p>
                <p>Bosnia and Herzegovina</p>
              </div>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
};

export default NexGenPolicy;
