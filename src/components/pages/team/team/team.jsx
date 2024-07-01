import React from 'react';

import Person from '../../../shared/person';

import LucianPatian from './images/lucian_patian.jpg';


const teamMembers = [
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
