import React from 'react';

import Info from 'components/pages/volunteer/info';
import FAQ from 'components/shared/faq';
import Layout from 'components/shared/layout';
import Link from 'components/shared/link/link';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const VolunteerPage = () => (
  <Layout>
    <Info />
    <h2>Frequently Asked Questions</h2>
    <div>
      <FAQ
        question="What are the requirements for volunteers?"
        answer="To be a volunteer at KCD Austria, you must be at least 18 years old.
      You should also have good English skills (at least B2 level) and be motivated.
      Depending on the area of application, you should also be able to remain calm in stressful situations and be good at interacting with people."
      />
      <FAQ
        question="What are the benefits of volunteering?"
        answer="Every volunteer who helps out will get free entrance to both conference days."
      />
      <FAQ
        question="Can I see anything from KCD Austria as a volunteer?"
        answer="Of course! We will make the schedule flexible so that you can also attend some of the talks."
      />
      <FAQ
        question="Do you have another question?"
        answer={
          <>
            Feel free to contact us directly by sending an email to{' '}
            <Link to="mailto:organizers@kcdaustria.at" ariaLabel="organizers@kcdaustria.at">
              organizers@kcdaustria.at
            </Link>
            .
          </>
        }
      />
    </div>
  </Layout>
);

export default VolunteerPage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.volunteer} pathname={pathname} />
);
