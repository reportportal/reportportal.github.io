import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { LandingPage } from '@app/containers/LandingPage';
import { SEO_DATA } from '@app/utils';

const Root: FC = () => (
  <Layout>
    <LandingPage />
  </Layout>
);

export default Root;

// eslint-disable-next-line react/no-multi-comp
export const Head = () => {
  const { title, description } = SEO_DATA.index;

  return <Seo title={title} description={description} />;
};
