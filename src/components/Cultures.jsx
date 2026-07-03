import React from 'react';
import SectionIntro from './SectionIntro';
import Container from './Container';
import {GridList, GridListItem} from './GridList';

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="How we work"
        title="Build responsibly. Communicate clearly. Deliver measurable value."
        invert
      >
        <p>
          Our delivery model is built around ownership, transparency, and
          practical innovation.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Ownership" invert>
            We take responsibility for decisions, delivery quality, and the
            long-term maintainability of the software we build.
          </GridListItem>
          <GridListItem title="Transparency" invert>
            We communicate constraints, risks, progress, and trade-offs early so
            projects can move forward without avoidable surprises.
          </GridListItem>
          <GridListItem title="Practical innovation" invert>
            We adopt new technology when it creates a clear operational or
            commercial advantage, not simply because it is new.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
