import React from 'react';
import Link from 'components/shared/link';

import smallGroupPic from './images/small-group.jpg';
import organizersPic from './images/organizers.jpg';
import beerPic from './images/beer.jpg';
import photoPic from './images/photo.jpg';

export const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <button onClick={toggleExpand}>+</button>
      <h3>Question</h3>
      {expanded && <p>Answer</p>}
    </div>
  );
};

const Info = () => (
  <section className="safe-paddings container-md">
    <h1>Become a Volunteer</h1>
    <img
      className="float-left w-1/2 rounded-lg mr-6 sm:w-full sm:mb-6"
      src={organizersPic}
      loading="eager"
      alt="A picture from KCD Austria 2023"
    />
    <p>
      KCD Austria is constantly growing and is not possible without dedicated volunteers. We are
      therefore extremely grateful for anyone who wants to take a look behind the scenes and help
      out. As a thank you for your support, we also offer you some benefits.
      <br />
      <br />
      Every volunteer who helps out will get free entrance to both conference days.
      <br />
      <br />
      If you are interested in volunteering, please fill out this{' '}
      <Link
        to="https://forms.gle/R9peGcYxQVEchjQ49"
        target="_blank"
        ariaLabel="form for volunteer registration"
      >
        form for volunteer registration
      </Link>
      . The registration deadline is May 31st. If you are unable to attend for any reason, please
      let us know as soon as possible so that we can find a replacement.
    </p>
    <div className="sm:hidden w-full grid grid-cols-3 gap-2 my-6">
      <img
        className="rounded-lg"
        src={photoPic}
        loading="eager"
        alt="A picture from KCD Austria 2023"
      />
      <img
        className="rounded-lg"
        src={smallGroupPic}
        loading="eager"
        alt="A picture from KCD Austria 2023"
      />
      <img
        className="rounded-lg"
        src={beerPic}
        loading="eager"
        alt="A picture from KCD Austria 2023"
      />
    </div>
  </section>
);

export default Info;
