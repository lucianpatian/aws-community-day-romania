import React from 'react';

import Person from '../../../shared/person';

import RaulGeana from './images/raul_geana.jpeg';
import MarilenaVelciov from './images/marilena_velciov.jpeg';
import LucianPatian from './images/lucian_patian.jpeg';


const teamMembers = [
  {
    name: 'Raul Geana',
    tagLine: 'Managing Director @ Haufe Group & Community Leader AWS User Group Timisoara',
    picture: RaulGeana,
  },
  {
    name: 'Marilena Velciov',
    tagLine: 'Community Manager @ Haufe Group',
    picture: MarilenaVelciov,
  },  
  {
    name: 'Lucian Patian',
    tagLine: 'Cloud Solutions Architect @ Haufe Group & Community Leader AWS User Group Timisoara',
    picture: LucianPatian,
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
