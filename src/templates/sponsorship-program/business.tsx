import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { BusinessPage } from '@app/containers/SponsorsPage/BusinessPage';
import { SEO_DATA } from '@app/utils';

const Business: FC = () => (
  <Layout>
    <BusinessPage />
  </Layout>
);

export default Business;

// eslint-disable-next-line react/no-multi-comp
export const Head = () => {
  const { title, description } = SEO_DATA.business;

  return <Seo title={title} description={description} />;
};
