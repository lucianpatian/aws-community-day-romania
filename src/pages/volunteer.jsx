import React from 'react';

import Info from 'components/pages/volunteer/info';
import Faq from 'components/pages/volunteer/faq';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const VolunteerPage = () => (
  <Layout>
    <Info />
    <Faq />
  </Layout>
);

export default VolunteerPage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.volunteer} pathname={pathname} />
);
