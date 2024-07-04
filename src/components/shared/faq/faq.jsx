import PropTypes from 'prop-types';
import React, { useState } from 'react';

const FAQ = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="safe-paddings container-md">
      <h3 className="text-start">
        <button onClick={toggleExpand}>
          {expanded ? '-' : '+'} {question}
        </button>
      </h3>
      {expanded && <p className="mt-2">{answer}</p>}
    </section>
  );
};

FAQ.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default FAQ;
