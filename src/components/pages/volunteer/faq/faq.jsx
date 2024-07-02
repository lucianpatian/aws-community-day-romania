import React from 'react';

import FAQ from 'components/shared/faq';

const VFaq = () => (
  <section className="safe-paddings container-md">
    <h3>Frequently Asked Questions</h3>
    <div>
      <FAQ
        question="What are the requirements for volunteers?"
        answer="To be a volunteer at AWS Community Day, you must be at least 18 years old.
        You should also have good English skills and be motivated.
        Depending on the area of application, you should also be able to remain calm in stressful situations and be good at interacting with people."
      />
      <FAQ
        question="What are the benefits of volunteering?"
        answer={
          <>Every volunteer who helps out will get
            <li>Free entrance to the conference </li>
            <li>Volunteer shirt</li>
            <li>Free drinks and food</li>
          </>}
      />
      <FAQ
        question="Which areas can I volunteer in?"
        answer={
          <>You can volunteer in the following areas:
            <li>Set up/Take down</li>
            <li>Registration</li>
            <li>Stage/Host assistant</li>
            <li>Miscellaneous</li>
          </>
        }
      />
      <FAQ
        question="Where can I register as a volunteer?"
        answer={
          <>Contact us at{' '}
          <a
            href="mailto:contact@aws-community.ro"
            className="text-orange"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            contact@aws-community.ro{' '}
          </a>
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
          </>
        }
      />
    </div>
  </section>
);

export default VFaq;
