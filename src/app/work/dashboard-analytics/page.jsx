import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import React from "react";

const DashboardAnalyticsPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Private Project"
        title="Dashboard Analytics Platform"
      >
        <p>
          A comprehensive analytics dashboard designed for enterprise-level data visualization and business intelligence.
        </p>
      </PageIntro>
      
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Project Overview
              </h2>
              <p className="mt-6 text-base text-neutral-700">
                This private analytics platform provides real-time data visualization, 
                customizable dashboards, and advanced reporting capabilities for internal 
                business operations. The system processes large datasets and presents 
                insights through interactive charts and graphs.
              </p>
              <p className="mt-4 text-base text-neutral-700">
                Features include user role management, automated report generation, 
                data export functionality, and integration with various data sources 
                including databases, APIs, and third-party services.
              </p>
            </div>
            
            <div>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Technology Stack
              </h2>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-950">Frontend</h3>
                  <p className="text-sm text-neutral-700">React.js, TypeScript, D3.js, Chart.js, Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Backend</h3>
                  <p className="text-sm text-neutral-700">Node.js, Express.js, PostgreSQL, Redis</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Data Processing</h3>
                  <p className="text-sm text-neutral-700">Python, Pandas, NumPy, Apache Kafka</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Infrastructure</h3>
                  <p className="text-sm text-neutral-700">Docker, AWS, Kubernetes, CI/CD</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default DashboardAnalyticsPage;