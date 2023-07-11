import React from 'react';

import { Layout } from '../components/Layout';
import { FeaturesPage } from '../components/FeaturesPage';

const Features = ({ location }) => {
  return (
    <Layout className="features-page-layout" location={location}>
      <FeaturesPage />
    </Layout>
  );
};

export default Features;
