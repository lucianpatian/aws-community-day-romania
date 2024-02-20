import React from 'react';

import Person from '../../../shared/person';

import Andi from './images/AndreasGrabner.jpeg';
import Constanze from './images/ConstanzeRoedig.png';
import Daniel from './images/DanielDrack.jpeg';
import David from './images/DavidLeitner.jpeg';
import Erik from './images/ErikAuer.jpg';
import Henrik from './images/HenrikRexed.png';
import Johannes from './images/JohannesGrumboeck.jpeg';
import Juliano from './images/JulianoCosta.jpeg';
import Kathi from './images/KatharinaSick.jpg';
import Thomas from './images/ThomasSchuetz.png';
import Tom from './images/ThomasStagl.jpeg';

const teamMembers = [
  {
    name: 'Andreas Grabner',
    tagLine: 'CNCF Ambassador, CNCF Keptn & Dynatrace DevRel',
    picture: Andi,
  },
  {
    name: 'Constanze Roedig',
    tagLine: 'Head of the Austrian Open Cloud Community',
    picture: Constanze,
  },
  {
    name: 'Daniel Drack',
    tagLine: 'I host the community chapter in Graz, Austria',
    picture: Daniel,
  },
  {
    name: 'David Leitner',
    tagLine: 'Coding Architect',
    picture: David,
  },
  {
    name: 'Erik Auer',
    picture: Erik,
    tagLine: 'CEO, WhizUs',
  },
  {
    name: 'Henrik Rexed',
    picture: Henrik,
  },
  {
    name: 'Johannes Grumböck',
    tagLine: 'Cloud Architect @ Red Bull Media House',
    picture: Johannes,
  },
  {
    name: 'Juliano Costa',
    tagLine: 'Developer Advocate | CNCF Ambassador',
    picture: Juliano,
  },
  {
    name: 'Katharina Sick',
    tagLine: 'Senior Software Engineer, Dynatrace',
    picture: Kathi,
  },
  {
    name: 'Thomas Schuetz',
    tagLine: 'CNCF Ambassador | Co-Chair @ TAG App-Delivery',
    picture: Thomas,
  },
  {
    name: 'Thomas Stagl',
    picture: Tom,
  },
];

const Team = () => (
  <section className="safe-paddings container-md">
    <h1>Team</h1>
    <div className="flex flex-row flex-wrap gap-10 justify-center my-16">
      {teamMembers.map(({ name, tagLine, picture }, index) => (
        <Person name={name} tagLine={tagLine} picture={picture} key={index} />
      ))}
    </div>
  </section>
);

export default Team;
