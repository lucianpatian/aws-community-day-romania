import PropTypes from 'prop-types';
import React from 'react';

const Person = ({ name, picture, tagLine }) => (
  <div className="w-[200px] text-center">
    <img src={picture} alt={name} className="rounded-full w-full h-[200px] mb-4 object-cover" />
    <strong>{name}</strong>
    <p className="text-sm">{tagLine}</p>
  </div>
);

Person.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.any,
  tagLine: PropTypes.string,
};

Person.defaultProps = {
  name: null,
  picture: null,
  tagLine: null,
};

export default Person;
