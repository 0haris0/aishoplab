import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import React from "react";

const CRMPortalPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Private Project"
        title="Customer Relationship Portal"
      >
        <p>
          A modern CRM platform designed to streamline customer interactions, 
          sales processes, and marketing automation for enterprise clients.
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
                This comprehensive CRM portal centralizes customer data, sales 
                pipeline management, and marketing campaigns in a unified platform. 
                The system provides 360-degree customer views, automated lead scoring, 
                and intelligent sales forecasting to drive business growth.
              </p>
              <p className="mt-4 text-base text-neutral-700">
                Key capabilities include email marketing automation, social media 
                integration, customer support ticket management, sales performance 
                analytics, and seamless integration with popular business tools 
                and third-party services.
              </p>
            </div>
            
            <div>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Technology Stack
              </h2>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-950">Frontend</h3>
                  <p className="text-sm text-neutral-700">Next.js, React, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Backend</h3>
                  <p className="text-sm text-neutral-700">Django, Python, PostgreSQL, Celery</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">AI & Analytics</h3>
                  <p className="text-sm text-neutral-700">TensorFlow, Scikit-learn, Pandas, NumPy</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Infrastructure</h3>
                  <p className="text-sm text-neutral-700">Google Cloud, Firebase, Redis, Elasticsearch</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default CRMPortalPage;