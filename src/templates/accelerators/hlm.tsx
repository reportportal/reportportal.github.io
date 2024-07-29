import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { HealeniumPage } from '@app/containers/AcceleratorsPage';
import { SEO_DATA } from '@app/utils';

const Hlm: FC = () => (
  <Layout className="offer-page-wrapper">
    <HealeniumPage />
  </Layout>
);

export default Hlm;

export const Head = () => {
  const { title, description } = SEO_DATA.hlm;

  return <Seo title={title} description={description} />;
};
