import React from 'react';

const Cfp = () => (
  <section className="safe-paddings container-md text-center">
    <h1 id="call-for-proposals">Call for Proposals</h1>
    <p>
      Our call for proposals is currently <strong>open</strong> until 20th of August 2024.
      <br /><br />
    </p>
    <p>
      We’re excited to create a conference lineup filled with insightful and inspiring talks. Share your expertise and passion with our community by submitting your talk through this {' '}
      <a 
        href="https://forms.gle/4jfbaRSs92iui2Px5" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-orange"
      >
        form
      </a>
    </p>
  </section>
);

export default Cfp;