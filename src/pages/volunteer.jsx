/* eslint-disable react/prop-types */
import React from 'react';

import Volunteer from 'components/pages/volunteer/volunteer';
import FAQ from 'components/shared/faq';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const VolunteerPage = () => (
  <Layout>
    <Volunteer />
    <br />
    <FAQ question="Foobar" answer="is a test" />
  </Layout>
);

export default VolunteerPage;

export const Head = ({ location: { pathname } }) => <SEO {...SEO_DATA.volunteer} pathname={pathname} />;
