'use client';
import React from 'react';
import Container from '@/components/Container';
import { useRouter } from 'next/navigation';


const NexGenPolicy = () =>
  {
    const router = useRouter();
    if (router.isFallback) {
      return <div>Loading...</div>;
    }
  return (
      <div className={'text-black py-10'}>
        <Container>
          <h1 className={'text-2xl'}>Privacy Policy</h1>
          <div className={'pl-2'}>

            <p className={'text-xs py-2'}><em>Last updated: 19. January
              2025</em></p>

            <p>
              <strong>NexGen</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              is committed to protecting the privacy and security of our users
              personal information. This Privacy Policy explains how we collect,
              use, and disclose information when you use
              our <strong>NexGen</strong> (the &quot;App&quot;) on the Shopify
              platform.</p>

            <h2 className={'pt-5 text-xl font-bold pb-1'}>1. Information We
              Collect</h2>
            <p>We collect information to provide, improve, and secure our
              services. Information collected includes:</p>

            <h3>Information from Shopify</h3>
            <p>To use our App, you must authorize access to your Shopify store
              data. We collect the following information through Shopify&apos;s
              API:</p>
            <ul>
              <li className={'ml-2'}>Store information (e.g., store name, email,
                and other
                identifiers)
              </li>
              <li className={'ml-2'}>Product data, including titles,
                descriptions, images, and
                analytics
              </li>
              <li className={'ml-2'}>Order data, as needed for features and
                functionalities
              </li>
              <li className={'ml-2'}>Customer data, where applicable and
                authorized
              </li>
            </ul>

            <h3>Usage Data</h3>
            <p>We collect data on how you interact with the App, such as actions
              taken within the App, pages viewed, and features used, to improve
              our services and deliver a better user experience.</p>

            <h3>Device and Log Information</h3>
            <p>We may collect information about the device you use to access the
              App, such as IP address, browser type, operating system, and other
              device identifiers.</p>

            <h2 className={'pt-5 text-xl font-bold pb-1'}>2. How We Use Your
              Information</h2>
            <p>We use the information collected for the following purposes:</p>
            <ul>
              <li className={'ml-2'}><strong>App Functionality</strong>: To
                provide product
                enhancement, optimization, and analytics features as advertised.
              </li>
              <li className={'ml-2'}><strong>App Improvements</strong>: To
                analyze usage patterns,
                monitor app performance, and implement updates or improvements.
              </li>
              <li className={'ml-2'}><strong>Customer Support</strong>: To
                address any support
                inquiries or troubleshooting requests.
              </li>
              <li className={'ml-2'}><strong>Compliance</strong>: To comply with
                Shopify&apos;s Terms of
                Service and other applicable legal requirements.
              </li>
            </ul>

            <h2 className={'pt-5 text-xl font-bold pb-1'}>3. Sharing Your
              Information</h2>
            <p>We will not sell, rent, or trade your information. However, we
              may
              share information with:</p>
            <ul>
              <li className={'ml-2'}><strong>Third-Party Services</strong>:
                Partners or services that
                help us provide core features, such as AI optimization or data
                analysis.
              </li>
              <li className={'ml-2'}><strong>Legal Compliance</strong>: When
                required by law or if we
                believe in good faith that disclosure is necessary to protect
                our
                rights or comply with a judicial proceeding.
              </li>
            </ul>

            <h2 className={'pt-5 text-xl font-bold pb-1'}>4. Data Retention</h2>
            <p>We retain information as long as it is necessary to fulfill the
              purposes outlined in this Privacy Policy. We may also retain
              certain
              information for compliance, auditing, or other legal
              obligations.</p>

            <h2 className={'pt-5 text-xl font-bold pb-1'}>5. Security</h2>
            <p>We take reasonable measures to protect your information from
              unauthorized access, use, or disclosure. However, no internet
              transmission is entirely secure, and we cannot guarantee complete
              data security.</p>

            <h2 className={'pt-5 text-xl font-bold pb-1'}>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li className={'ml-2'}>Access, update, or delete personal data we
                have about you
              </li>
              <li className={'ml-2'}>Restrict or object to certain data
                processing practices
              </li>
              <li className={'ml-2'}>Withdraw consent, where applicable</li>
            </ul>
            <p>To exercise these rights, contact us at <a
                href="mailto:policy@aishoplab.com">policy@aishoplab.com</a>.</p>

            <h2 className={'pt-5 text-xl font-bold pb-1'}>7. Third-Party
              Links</h2>
            <p>The App may include links to third-party websites or services. We
              are not responsible for the privacy practices of these third
              parties, and we encourage you to review their privacy
              policies.</p>

            <h2 className={'pt-5 text-xl font-bold pb-1'}>8. Changes to This
              Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically. Any changes will
              be
              posted on this page, and if the changes are significant, we may
              notify you via email or within the App.</p>

            <h2 className={'pt-5 text-xl font-bold pb-1'}>9. Contact Us</h2>
            <p>For any questions about this Privacy Policy or our privacy
              practices, please contact us at:</p>
            <p><strong>Email</strong>: <a
                href="mailto:policy@aishoplab.com">policy@aishoplab.com</a></p>
          </div>

        </Container>
      </div>
  );
  };
export default NexGenPolicy;