import ContactSection from '@/components/ContactSection';
import Container from '@/components/Container';
import Cultures from '@/components/Cultures';
import PageIntro from '@/components/PageIntro';
import {StatList, StatListItem} from '@/components/StatList';

const AboutPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="About Ai Shop Lab"
        title="Product engineering focused on measurable outcomes"
      >
        <p>
          Ai Shop Lab is a Sarajevo-based software studio focused on Shopify,
          full-stack web applications, and AI-assisted business workflows.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We combine product thinking, interface design, and production-grade
            engineering to turn business requirements into maintainable software.
            Our work spans commerce applications, analytics dashboards, internal
            operations platforms, and custom integrations.
          </p>
          <p>
            We prioritize transparent communication, practical architecture, and
            measurable delivery. The objective is not to add technology for its
            own sake, but to reduce operational friction and create software that
            can evolve with the business.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="10+" label="Years building software" />
          <StatListItem value="Shopify" label="Commerce specialization" />
          <StatListItem value="Full-stack" label="End-to-end product delivery" />
        </StatList>
      </Container>

      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
