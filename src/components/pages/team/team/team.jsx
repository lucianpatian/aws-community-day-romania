import React from 'react';

import Person from '../../../shared/person';

import RaulGeana from './images/raul_geana.jpg';
import MarilenaVelciov from './images/marilena_velciov.jpg';
import LucianPatian from './images/lucian_patian.jpg';
import AnaStaicu from './images/ana_staicu.jpg';


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
  {
    name: 'Ana Staicu',
    tagLine: 'UX/UI Designer @ Haufe Group',
    picture: AnaStaicu,
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
