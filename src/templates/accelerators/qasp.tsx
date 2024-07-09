import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { QaspPage } from '@app/containers/AcceleratorsPage';
import { SEO_DATA } from '@app/utils';

const Qasp: FC = () => (
  <Layout className="offer-page-wrapper">
    <QaspPage />
  </Layout>
);

export default Qasp;

export const Head = () => {
  const { title, description } = SEO_DATA.qasp;

  return <Seo title={title} description={description} />;
};
