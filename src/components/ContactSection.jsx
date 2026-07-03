'use client';

import Container from './Container';
import FadeIn from './FadeIn';
import Button from './Button';
import Offices from './Offices';
import {useRouter} from 'next/navigation';

const ContactSection = () => {
  const router = useRouter();

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="relative -mx-6 overflow-hidden rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-28 md:px-12">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
            Start a conversation
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Build the next product, platform, or commerce workflow with us.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            Share the business problem, current stack, and expected outcome. We
            will help define the most practical delivery path.
          </p>

          <div className="mt-8 flex">
            <Button onClick={() => router.push('/contact')} invert>
              Discuss your project
            </Button>
          </div>

          <div className="mt-12 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-semibold text-white">
              Our office
            </h3>
            <Offices
              invert
              className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
            />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
