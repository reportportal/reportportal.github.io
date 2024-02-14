import React, { FC } from 'react';
import { Layout } from '@app/components';
import { TestAutomationAsServicePage } from '@app/containers/TestAutomationAsServicePage';
import { SEO_DATA } from "@app/pages/constants";

export const TestAutomationAsService: FC = () => (
  <Layout seoData={SEO_DATA.testAutomationAsAService}>
    <TestAutomationAsServicePage />
  </Layout>
);

export default TestAutomationAsService;
