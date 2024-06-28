import React from 'react';

const Info = () => (
  <section className="safe-paddings container-md">
    <p>
      <strong>AWS Community Day Romania</strong> is the first AWS community conference in Romania.
      <br />
      <br />
      The first edition is in <strong>Timisoara</strong>, and we’re thrilled to unite the romanian
      community. Our goal is to offer a one day experience for professionals and experts with AWS 
      background to explore, connect and exchange their insights.
    </p>

    <h1>What to expect?</h1>
    <div className="flex flex-row md:flex-col">
      <div className="w-1/3 md:w-full text-center px-4">
        <h2 className="text-pink">35+</h2>
        <p>
          <strong>Technically competent talks & panels</strong> relevant to the AWS community
          and coming from end-users.
        </p>
      </div>
      <div className="w-1/3 md:w-full text-center px-4">
        <h2 className="text-pink">ONE</h2>
        <p>
          <strong>Stage</strong> in an exceptional venue offering enough space for{' '}
          <strong>networking</strong>and engaging in <strong>talks</strong> with people
          with similar interests{' '}
          {/* <strong>workshops</strong>. */}
        </p>
      </div>
      <div className="w-1/3 md:w-full text-center px-4">
        <h2 className="text-pink">250+</h2>
        <p>
          <strong>Diverse attendees & speakers</strong> including <strong>leading experts</strong>{' '}
          from AWS Usergroup communities.
        </p>
      </div>
    </div>
  </section>
);

export default Info;
