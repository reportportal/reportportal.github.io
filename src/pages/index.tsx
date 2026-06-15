import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { NewLandingPage } from '@app/containers/NewLandingPage';
import { SEO_DATA } from '@app/utils';

const Root: FC = () => (
  <Layout>
    <NewLandingPage />
  </Layout>
);

export default Root;

export const Head = () => {
  const { title, description } = SEO_DATA.index;

  return <Seo title={title} description={description} />;
};
