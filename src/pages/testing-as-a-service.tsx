import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { TestingAsServicePage } from '@app/containers/TestingAsServicePage';
import { SEO_DATA } from '@app/utils';

const TestingAsService: FC = () => (
  <Layout>
    <TestingAsServicePage />
  </Layout>
);

export default TestingAsService;

// eslint-disable-next-line react/no-multi-comp
export const Head = () => {
  const { title, description } = SEO_DATA.testingAsAService;

  return <Seo title={title} description={description} />;
};
