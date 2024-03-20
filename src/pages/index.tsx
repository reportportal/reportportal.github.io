import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { LandingPage } from '@app/containers/LandingPage';
import { SEO_DATA } from '@app/utils';

const Root: FC = () => (
  <Layout seoData={SEO_DATA.index}>
    <LandingPage />
  </Layout>
);

export default Root;
