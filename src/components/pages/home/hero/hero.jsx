import React from 'react';
import { isMobile } from 'react-device-detect';

import illustration from './images/CommunityDay_Sitemerch_hexagon01.png';
import Button from '../../../shared/button';
import LogoFirstEdition from './images/community-day-first-edition.png';

const Hero = () => (
  <section className="safe-paddings overflow-hidden mt-12 mb-16">
    <div className="container w-full flex flex-row items-center md:flex-col">
      <div className="flex flex-col flex-grow flex-shrink w-1/2 md:w-full pr-[48px] md:pr-0">
        <img className="w-260" src={LogoFirstEdition} alt="LogoAWS" />
        <p className="mt-8 w-full">
          On <strong>October 3rd</strong> the first AWS Community Day Romania will gather in Timisoara at  {' '}
          <a
            href="https://maps.app.goo.gl/pRAArsxsin8L3hUp9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Iulius Congress Hall
          </a>.
          <br />
          <br />
          Join us for a one day technical event loaded with exciting talks and
          networking opportunities. The event is aimed at developers, platform people and other
          IT professionals interested in cloud native technologies while being
          supported by all AWS User Groups from Romania.
        </p>
        <div className="mt-10 flex container flex-row gap-4 w-full sm:flex-col p-0">
          <Button onClick={(e) => {
            e.preventDefault();
            document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
          }}>
            Get your Tickets
          </Button>
          <Button onClick={(e) => {
            e.preventDefault();
            document.getElementById('call-for-proposals').scrollIntoView({ behavior: 'smooth' });
          }}>
            Be one of our speakers
          </Button>
        </div>
      </div>
      {!isMobile && (
        <div className="flex flex-grow flex-shrink w-1/2 object-contain md:mt-12 md:w-3/4 md:max-w-[400px] pl-[48px] md:pl-0">
          <img src={illustration} loading="eager" alt="Illustration" />
        </div>
      )}
    </div>
  </section>
);

export default Hero;
