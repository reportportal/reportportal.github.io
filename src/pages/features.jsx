import React from 'react';

import { Features } from '../components/Features';
import { Layout } from '../components/Layout';

const FeaturesIndex = ({ location }) => {
  return (
    <Layout className="features-page-layout" location={location}>
      <Features />
    </Layout>
  );
};

export default FeaturesIndex;
