import React from 'react';

import { Layout } from '../components/Layout';
import { TestingAsServicePage } from '../components/TestingAsServicePage';

import '../styles/global.scss';

const TestingAsService = ({ location }) => {
  return (
    <Layout location={location}>
      <TestingAsServicePage />
    </Layout>
  );
};

export default TestingAsService;
