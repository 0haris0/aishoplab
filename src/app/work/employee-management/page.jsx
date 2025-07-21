import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import React from "react";

const EmployeeManagementPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Private Project"
        title="Employee Management System"
      >
        <p>
          A comprehensive HR management platform for handling employee data, payroll, 
          performance tracking, and organizational workflows.
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
                This internal employee management system streamlines HR operations 
                including employee onboarding, time tracking, leave management, 
                performance reviews, and payroll processing. The platform ensures 
                data security and compliance with labor regulations.
              </p>
              <p className="mt-4 text-base text-neutral-700">
                Key features include automated workflow approvals, document management, 
                reporting and analytics, integration with accounting systems, and 
                mobile accessibility for remote work scenarios.
              </p>
            </div>
            
            <div>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Technology Stack
              </h2>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-950">Frontend</h3>
                  <p className="text-sm text-neutral-700">Vue.js, Vuetify, PWA, Service Workers</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Backend</h3>
                  <p className="text-sm text-neutral-700">Laravel, PHP, MySQL, Redis</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Authentication</h3>
                  <p className="text-sm text-neutral-700">JWT, OAuth 2.0, Role-based Access Control</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Infrastructure</h3>
                  <p className="text-sm text-neutral-700">Docker, DigitalOcean, Nginx, SSL</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default EmployeeManagementPage;