import React from 'react';

import { Layout } from '../components/Layout';
import { TestAutomationAsServicePage } from '../components/TestAutomationAsServicePage';

const TestAutomationAsService = ({ location }) => {
  return (
    <Layout location={location}>
      <TestAutomationAsServicePage />
    </Layout>
  );
};

export default TestAutomationAsService;
