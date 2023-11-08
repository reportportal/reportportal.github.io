import React, { FC } from 'react';
import { Layout } from '@app/components';
import { TestAutomationAsServicePage } from '@app/containers/TestAutomationAsServicePage';

export const TestAutomationAsService: FC = () => (
  <Layout>
    <TestAutomationAsServicePage />
  </Layout>
);

export default TestAutomationAsService;
