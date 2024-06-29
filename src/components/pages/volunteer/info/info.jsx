import React from 'react';

import smallGroupPic from './images/small-group.jpg';
import organizersPic from './images/organizers.jpg';
import beerPic from './images/beer.jpg';
import photoPic from './images/photo.jpg';

const Info = () => (
  <section className="safe-paddings container-md">
    <h1>Become a Volunteer</h1>
    <img
      className="float-left w-1/2 rounded-lg mr-6 sm:w-full sm:mb-6"
      src={organizersPic}
      loading="eager"
      alt="A picture from AWS Community Day 2023"
    />
    <p>
      AWS Community Day is constantly growing and is not possible without dedicated volunteers. We are
      therefore extremely grateful for anyone who wants to take a look behind the scenes and help
      out. As a thank you for your support, we also offer you some benefits.
      <br />
      <br />
      Every volunteer who helps out will gets
      <li>free entrance to both conference days</li>
      <li>Volunteer shirt</li>
      <li>free drinks and food</li>
      <li>free parking ticket</li>
      <br />
      If you are interested in volunteering, contact us at{' '}
      <a
        href="mailto:contact@aws-community.ro"
        className="text-orange"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        contact@aws-community.ro{' '}
      </a>
      . The registration deadline is July 31st. If you are unable to attend for any reason, please
      let us know as soon as possible so that we can find a replacement.
      <br />
      <br />
      Depending on how many volunteers we have in the respective areas, the shifts will last around 6 hours.
      We will send you your exact schedule at least 2 weeks before the event.
    </p>
    <div className="sm:hidden w-full grid grid-cols-3 gap-2 my-6">
      <img
        className="rounded-lg"
        src={photoPic}
        loading="eager"
        alt="A picture from AWS Community Day 2023"
      />
      <img
        className="rounded-lg"
        src={smallGroupPic}
        loading="eager"
        alt="A picture from AWS Community Day 2023"
      />
      <img
        className="rounded-lg"
        src={beerPic}
        loading="eager"
        alt="A picture from AWS Community Day 2023"
      />
    </div>
  </section>
);

export default Info;
