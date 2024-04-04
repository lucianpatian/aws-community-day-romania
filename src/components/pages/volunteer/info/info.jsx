import React from 'react';
import Link from 'components/shared/link';

export const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <button onClick={toggleExpand}>+</button>
      <h3>Question</h3>
      {expanded && (
        <p>
          Answer
        </p>
      )}
    </div>
  );
};

const Info = () => (
  <section className="safe-paddings container-md">
    <p>
      KCD Austria is constantly growing and is not possible without dedicated volunteers.
      We are therefore extremely grateful for anyone who wants to take a look behind the scenes and help out.
      As a thank you for your support, we also offer you some benefits.
      <br />
      <br />
      Every volunteer who helps out will get free entrance to both conference days.
      <br />
      <br />
      If you are interested in volunteering, please fill out this <Link to="https://forms.gle/R9peGcYxQVEchjQ49" target="_blank" ariaLabel="form for volunteer registration">form for volunteer registration</Link>.
      The registration deadline is May 31st. If you are unable to attend for any reason,
      please let us know as soon as possible so that we can find a replacement.
    </p>
  </section>
);

export default Info;
