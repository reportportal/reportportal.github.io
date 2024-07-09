import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { IndividualPage } from '@app/containers/SponsorsPage/IndividualPage';
import { SEO_DATA } from '@app/utils';

const Individual: FC = () => (
  <Layout>
    <IndividualPage />
  </Layout>
);

export default Individual;

export const Head = () => {
  const { title, description } = SEO_DATA.individual;

  return <Seo title={title} description={description} />;
};
