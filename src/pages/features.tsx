import React, { FC } from 'react';
import { Layout } from '@app/components';
import { FeaturesPage } from '@app/containers/FeaturesPage';

const Features: FC = () => (
  <Layout className="features-page-layout">
    <FeaturesPage />
  </Layout>
);

export default Features;
