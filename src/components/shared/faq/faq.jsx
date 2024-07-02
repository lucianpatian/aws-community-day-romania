import PropTypes from 'prop-types';
import React, { useState } from 'react';

const FAQ = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="safe-paddings container-md mb-4">
      <h4 className="text-start">
        <button onClick={toggleExpand} className="text-left w-full">
          {expanded ? '-' : '+'} {question}
        </button>
      </h4>
      {expanded && <p className="mt-2 text-base mb-4">{answer}</p>}
    </section>
  );
};

FAQ.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default FAQ;
