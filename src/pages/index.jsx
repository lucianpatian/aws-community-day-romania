import React from 'react';

import Hero from 'components/pages/home/hero';
import Info from 'components/pages/home/info';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

import Sponsors from '../components/pages/home/sponsors';
import Schedule from '../components/pages/home/schedule';
import Cfp from '../components/pages/home/cfp';

const HomePage = () => (
  <Layout homepage>
    <Hero />
    <Info />
    <Cfp />
    <Schedule />
    <Sponsors />
  </Layout>
);

export default HomePage;

// eslint-disable-next-line react/prop-types
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
