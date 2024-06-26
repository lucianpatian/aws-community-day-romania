import React from 'react';

import illustration from './images/hero-illustration.webp';
import Button from '../../../shared/button';

const Hero = () => (
  <section className="safe-paddings overflow-hidden mt-12 mb-16">
    <div className="container w-full flex flex-row items-center md:flex-col">
      <div className="flex flex-col flex-grow flex-shrink w-1/2 md:w-full pr-[48px] md:pr-0">
        <span className="w-fit rounded-full bg-pink px-4 py-2 text-sm font-bold leading-none text-white">
          October 8th - 10th, 2024
        </span>
        <h1 className="my-0 text-start w-full text-8xl sm:text-7xl">KCD Austria</h1>
        <p className="mt-8 w-full">
          On October 8th - 10th the Kubernetes & Cloud Native community will gather in Vienna,
          Austria.
          <br />
          <br />
          Join us for a three-day technical event loaded with exciting talks, workshops and
          networking opportunities. KCD Austria is aimed at developers, platform people, and other
          IT professionals interested in cloud native technologies. This community event is
          supported by the CNCF.
        </p>
        <div className="mt-10 flex container flex-row gap-4 w-full sm:flex-col p-0">
          <Button onClick={(e) => {
            e.preventDefault();
            document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
          }}>
            Get your Tickets
          </Button>
        </div>
      </div>
      <img
        className="flex-grow flex-shrink w-1/2 object-contain md:mt-12 md:w-3/4 md:max-w-[400px] pl-[48px] md:pl-0"
        src={illustration}
        loading="eager"
        alt="Illustration"
      />
    </div>
  </section>
);

export default Hero;
