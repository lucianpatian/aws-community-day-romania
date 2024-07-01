import React from 'react';


const Info = () => (
  <section className="safe-paddings container-md">
    <h1>Become a Volunteer</h1>
    <p>
      AWS Community Day is constantly growing and is not possible without dedicated volunteers. We are
      therefore extremely grateful for anyone who wants to take a look behind the scenes and help
      out. As a thank you for your support, we also offer you some benefits.
      <br />
      <br />
      If you are interested in volunteering, contact us at{' '}
      <a
        href="mailto:contact@aws-community.ro"
        className="text-orange"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        contact@aws-community.ro{' '}
      </a>
      . If you are unable to attend for any reason, please
      let us know as soon as possible so that we can find a replacement.
      <br />
      <br />
    </p>
  </section>
);

export default Info;
