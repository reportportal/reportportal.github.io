import React, { FC } from 'react';
import { Layout } from '@app/components';
import { TestingAsServicePage } from '@app/containers/TestingAsServicePage';

const TestingAsService: FC = () => (
  <Layout>
    <TestingAsServicePage />
  </Layout>
);

export default TestingAsService;
