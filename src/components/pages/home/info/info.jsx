import React from 'react';

const Info = () => (
  <section className="safe-paddings container-md">
    <p>
      <strong>Kubernetes Community Days</strong> (KCDs) are global, community-organized events that
      gather adopters and technologists from open source and cloud native communities, supported by
      the Cloud Native Computing Foundation (CNCF).
      <br />
      <br />
      This is our second edition in <strong>Vienna</strong>, and we’re thrilled to unite the
      community once again. Our goal is to offer a platform for professionals and experts of all
      experiences and backgrounds to explore, connect, and exchange their insights on everything
      related to Cloud Native.
    </p>

    <h1>What to expect?</h1>
    <div className="flex flex-row md:flex-col">
      <div className="w-1/3 md:w-full text-center px-4">
        <h2 className="text-pink">35+</h2>
        <p>
          <strong>Technically competent talks & workshops</strong> relevant to the larger community
          and coming from end-users.
        </p>
      </div>
      <div className="w-1/3 md:w-full text-center px-4">
        <h2 className="text-pink">2</h2>
        <p>
          <strong>Stages</strong> in an exceptional venue offering enough space for{' '}
          <strong>networking</strong>, engaging in <strong>talks</strong> & participating in{' '}
          <strong>workshops</strong>.
        </p>
      </div>
      <div className="w-1/3 md:w-full text-center px-4">
        <h2 className="text-pink">300+</h2>
        <p>
          <strong>Diverse attendees & speakers</strong> including <strong>leading experts</strong>{' '}
          from Open Source, DevOps and Cloud Native communities.
        </p>
      </div>
    </div>
  </section>
);

export default Info;
