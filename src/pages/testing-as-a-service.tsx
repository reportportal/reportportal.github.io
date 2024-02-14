import React, { FC } from 'react';
import { Layout } from '@app/components';
import { TestingAsServicePage } from '@app/containers/TestingAsServicePage';
import { SEO_DATA } from "@app/pages/constants";

const TestingAsService: FC = () => (
  <Layout seoData={SEO_DATA.testingAsAService}>
    <TestingAsServicePage />
  </Layout>
);

export default TestingAsService;
