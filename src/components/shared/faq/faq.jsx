import PropTypes from 'prop-types';
import React, { useState } from 'react';

const FAQ = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="safe-paddings container-md">
      <strong>{question} <button onClick={toggleExpand}>+</button></strong>
      {expanded && (
        <p>
          {answer}
        </p>
      )}
    </section>
  );
};

FAQ.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default FAQ;