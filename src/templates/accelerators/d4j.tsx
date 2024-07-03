import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { D4jPage } from '@app/containers/AcceleratorsPage';
import { SEO_DATA } from '@app/utils';

const D4j: FC = () => (
  <Layout className="offer-page-wrapper">
    <D4jPage />
  </Layout>
);

export default D4j;

// eslint-disable-next-line react/no-multi-comp
export const Head = () => {
  const { title, description } = SEO_DATA.d4j;

  return <Seo title={title} description={description} />;
};
