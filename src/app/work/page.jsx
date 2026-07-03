import ContactSection from '@/components/ContactSection';
import PageIntro from '@/components/PageIntro';

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our work"
        title="Software built around real operational problems"
      >
        <div className="max-w-2xl space-y-6">
          <p>
            We build commerce tools, analytics dashboards, internal operations
            platforms, and custom web applications for teams that need reliable
            software rather than another short-lived prototype.
          </p>
          <p>
            Each engagement starts with the business workflow, defines a focused
            delivery scope, and produces maintainable software with clear paths
            for iteration, integration, and scale.
          </p>
        </div>
      </PageIntro>
      <ContactSection />
    </>
  );
};

export default WorkPage;
