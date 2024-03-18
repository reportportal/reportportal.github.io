import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { FeaturesPage } from '@app/containers/FeaturesPage';
import { SEO_DATA } from '@app/utils';

const Features: FC = () => (
  <Layout seoData={SEO_DATA.features} className="features-page-layout">
    <FeaturesPage />
  </Layout>
);

export default Features;
