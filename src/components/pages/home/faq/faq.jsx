import React from 'react';

import FAQ from 'components/shared/faq';

const Faq = () => (
  <section className="safe-paddings container-md">
    <h2 id="faq">Frequently Asked Questions</h2>
    <div>
      <FAQ
        question="What is AWS Community Day?"
        answer="AWS Community Day is a one-day event organized by the AWS community for the community. 
        It's an opportunity for AWS users to meet and learn from each other, 
        share best practices, and listen to presentations from industry experts."
      />
      <FAQ
        question="Who can participate in the event?"
        answer="AWS Community Day is open to all interested AWS users, regardless of their level of expertise."
      />
      <FAQ
        question="Is registration required for the event?"
        answer="Yes, registration is required to participate in the event. 
        Please register on the event website."
      />
      <FAQ
        question="What is the official language for the event?"
        answer="We would like to inform all participants that the official language for the event is English.
        All presentations, materials and communications will be conducted in English."
      />      
      <FAQ
        question="Where can I register as a volunteer?"
        answer={
          <>
            Feel free to contact us directly by sending an email to{' '}
            <a
            href="mailto:contact@aws-community.ro"
            className="text-orange"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            contact@aws-community.ro{' '}
          </a>
            .
          </>
        }
      />
      <FAQ
        question="Do you have another question?"
        answer={
          <>
            Feel free to contact us directly by sending an email to{' '}
            <a
            href="mailto:contact@aws-community.ro"
            className="text-orange"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            contact@aws-community.ro{' '}
          </a>
            .
          </>
        }
      />
    </div>
  </section>
);

export default Faq;
