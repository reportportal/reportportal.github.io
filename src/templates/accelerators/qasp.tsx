import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { QaspPage } from '@app/containers/AcceleratorsPage';
import { SEO_DATA } from '@app/utils';

const Qasp: FC = () => (
  <Layout seoData={SEO_DATA.qasp} className="offer-page-wrapper">
    <QaspPage />
  </Layout>
);

export default Qasp;
