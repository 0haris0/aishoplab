/* jshint esversion: 6 */
'use client'
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import NexGenPricing from "@/components/NexGenPricing";

import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
export default function Home() {

  return (
      <main className="text-black">
        <Container className="mt-24 sm:mt-32">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Make your online presence a reality with us!
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              We are a team of developers working at the intersection of design,
              technology, and innovation. Whether you need sleek designs,
              cutting-edge solutions, or a powerful digital strategy, we make it
              happen seamlessly.
            </p>
          </FadeIn>
        </Container>
        <Clients/>
        <Testimonials
            className="py-24"
            client={{
              name: 'Phobia',
              logo: logoPhobiaDark,
            }}
        >
          The team at Studio went above and beyond with our onboarding, even
          finding a way to access the user microphone without triggering one of
          those annoying permission dialogs.
        </Testimonials>
        <Services/>
        <ContactSection/>
      </main>
  );
  }
