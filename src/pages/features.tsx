import React from 'react';

import { Layout } from '@app/components/Layout';
import { FeaturesPage } from '@app/containers/FeaturesPage';

const Features: React.FC = () => (
  <Layout className="features-page-layout">
    <FeaturesPage />
  </Layout>
);

export default Features;
