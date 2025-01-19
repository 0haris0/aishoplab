import React from 'react';
import SectionIntro from './SectionIntro';
import Container from './Container';
import FadeIn from './FadeIn';
import StylizedImage from './StylizedImage';
import imageLaptop from '../images/laptop.jpg';
import List, {ListItem} from './List';


const Services = () =>
  {
  return (
      <>
        <SectionIntro
            eyebrow="Services"
            title="We turn challenges into opportunities."
            className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            From building websites to creating custom applications, we deliver
            solutions that empower your business.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <div className="lg:flex lg:items-center lg:justify-end">
            <div
                className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                <StylizedImage
                    src={imageLaptop}
                    sizes="(min-width: 1024px) 41rem, 31rem"
                    className="justify-center lg:justify-end"
                />
              </FadeIn>
            </div>
            {/* List item */}
            <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
              <ListItem title="Web development">
                Transform your ideas into dynamic, responsive, and user-friendly
                websites tailored to your goals.
              </ListItem>
              <ListItem title="Application development">
                Build robust and scalable applications designed to streamline
                your operations and engage your audience.
              </ListItem>
              <ListItem title="E-commerce">
                Launch, manage, or scale your online store with tailored
                solutions that drive sales and enhance the customer experience.
              </ListItem>
              <ListItem title="Custom content management">
                Simplify your workflow with content management systems designed
                specifically for your business needs.
              </ListItem>
              <ListItem title="Digital Strategy & Consulting">
                We help you plan, innovate, and execute strategies that give you a competitive edge in the digital world.
              </ListItem>
            </List>
          </div>
        </Container>
      </>
  );
  };

export default Services;
