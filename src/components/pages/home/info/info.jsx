import React from 'react';

const Info = () => (
  <section id="why-attend" className="safe-paddings container-md">
    {/* <p>
      <strong>AWS Community Day Romania</strong> is the first AWS community conference in Romania.
      <br />
      <br />
      The first edition is in <strong>Timisoara</strong> and we’re thrilled to unite the Romanian
      community. Our goal is to offer a one day experience for professionals and experts with AWS 
      background to explore, connect and exchange their insights.
    </p> */}

    <h1>Why attend and what to expect?</h1>
    <div className="flex flex-row md:flex-col">
      <div className="w-1/3 md:w-full text-center px-4">
        <h2 className="text-orange">10+</h2>
        <p>
          <strong>Technically competent talks & panels</strong> packed with insights that will fuel your professional growth.
          Explore AWS services and learn how to implement them in real-world scenarios.
        </p>
      </div>
      <div className="w-1/3 md:w-full text-center px-4">
        <h2 className="text-orange">ONE</h2>
        <p>
          <strong>Stage</strong> in an exceptional venue offering enough space for{' '}
          <strong>networking</strong> and engaging in <strong>talks</strong> with people
          with similar interests.{' '}Make lasting connections that could transform your career.
          {/* <strong>workshops</strong>. */}
        </p>
      </div>
      <div className="w-1/3 md:w-full text-center px-4">
        <h2 className="text-orange">250+</h2>
        <p>
          <strong>Diverse attendees & speakers</strong> including <strong>leading experts</strong>{' '}
          from AWS User Group communities. Expect interactive sessions, lively discussions and entertaining breaks.
        </p>
      </div>
    </div>
  </section>
);

export default Info;