import React from 'react';
import Container from './Container';
import FadeIn from './FadeIn';
import Button from './Button';
import Offices from './Offices';


const ContactSection = () =>
  {
  return (
      <div className="mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 ">
        <Container className="">
          <FadeIn
              className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                Tell us about your project
              </h2>
              <h3 className={"text-white text-sm"}>We’d love to hear about your ideas and help bring them to life. Let’s create something incredible together!</h3>
              <div className="mt-6 flex">
                <Button href={'/contact'} invert>
                  Say Hello
                </Button>
              </div>
              <div className="mt-10 border-t border-white/10 pt-10">
                <h3 className="font-display text-base font-semibold text-white">
                  Our offices
                </h3>
                <Offices
                    invert
                    className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
  );
  };

export default ContactSection;
