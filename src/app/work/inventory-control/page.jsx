import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import React from "react";

const InventoryControlPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Private Project"
        title="Inventory Control System"
      >
        <p>
          An advanced inventory management solution with real-time tracking, 
          automated reordering, and supply chain optimization capabilities.
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
                This comprehensive inventory control system provides end-to-end 
                management of stock levels, supplier relationships, and warehouse 
                operations. The platform integrates barcode scanning, RFID technology, 
                and predictive analytics to optimize inventory turnover and reduce costs.
              </p>
              <p className="mt-4 text-base text-neutral-700">
                The system features automated demand forecasting, multi-location 
                inventory tracking, supplier management, purchase order automation, 
                and detailed reporting for business intelligence and compliance.
              </p>
            </div>
            
            <div>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Technology Stack
              </h2>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-950">Frontend</h3>
                  <p className="text-sm text-neutral-700">Angular, Material Design, RxJS, Chart.js</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Backend</h3>
                  <p className="text-sm text-neutral-700">Spring Boot, Java, PostgreSQL, MongoDB</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">IoT & Hardware</h3>
                  <p className="text-sm text-neutral-700">RFID Readers, Barcode Scanners, Raspberry Pi</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">Infrastructure</h3>
                  <p className="text-sm text-neutral-700">Azure, Docker, Kubernetes, Azure IoT Hub</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default InventoryControlPage;