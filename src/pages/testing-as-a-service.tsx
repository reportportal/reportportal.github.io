import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { TestingAsServicePage } from '@app/containers/TestingAsServicePage';
import { SEO_DATA } from '@app/utils';

const TestingAsService: FC = () => (
  <Layout seoData={SEO_DATA.testingAsAService}>
    <TestingAsServicePage />
  </Layout>
);

export default TestingAsService;
