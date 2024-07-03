import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { TestAutomationAsServicePage } from '@app/containers/TestAutomationAsServicePage';
import { SEO_DATA } from '@app/utils';

export const TestAutomationAsService: FC = () => (
  <Layout>
    <TestAutomationAsServicePage />
  </Layout>
);

export default TestAutomationAsService;

// eslint-disable-next-line react/no-multi-comp
export const Head = () => {
  const { title, description } = SEO_DATA.testAutomationAsAService;

  return <Seo title={title} description={description} />;
};
