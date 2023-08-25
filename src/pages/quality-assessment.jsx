import React from 'react';

import { Layout } from '../components/Layout';
import { QualityAssessmentPage } from '../components/QualityAssessmentPage';

const TestAutomationAsService = ({ location }) => {
  return (
    <Layout location={location}>
      <QualityAssessmentPage />
    </Layout>
  );
};

export default TestAutomationAsService;
