import React from 'react';

import { Layout } from '../components/Layout';
import { LandingPage } from '../components/LandingPage';

const Root = ({ location }) => {
  return (
    <Layout location={location}>
      <LandingPage />
    </Layout>
  );
};

export default Root;
