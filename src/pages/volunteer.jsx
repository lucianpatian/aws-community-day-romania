import React from 'react';

import VFaq from 'components/pages/volunteer/faq';
import Info from 'components/pages/volunteer/info';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const VolunteerPage = () => (
  <Layout>
    <Info />
    <VFaq />
  </Layout>
);

export default VolunteerPage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.volunteer} pathname={pathname} />
);
