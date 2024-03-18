import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { TestAutomationAsServicePage } from '@app/containers/TestAutomationAsServicePage';
import { SEO_DATA } from '@app/utils';

export const TestAutomationAsService: FC = () => (
  <Layout seoData={SEO_DATA.testAutomationAsAService}>
    <TestAutomationAsServicePage />
  </Layout>
);

export default TestAutomationAsService;
