import React from 'react';
import SaveTheDateButton from '../../../shared/save-the-date';

const Contact = () => (
  <section className="safe-paddings container-md text-center">
    <h1 id="contact">Contact</h1>
    <p>
    Contact us at{' '}
      <a
        href="mailto:contact@aws-community.ro"
        className="text-orange"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        contact@aws-community.ro{' '}
      </a>
    </p>
    <div className="mt-6 mb-12 flex flex-row justify-center gap-4 sm:flex-col">
      <SaveTheDateButton />
    </div>
  </section>
);
export default Contact;
