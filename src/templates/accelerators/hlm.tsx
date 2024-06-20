import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { HealeniumPage } from '@app/containers/AcceleratorsPage';
import { SEO_DATA } from '@app/utils';

const Hlm: FC = () => (
  <Layout seoData={SEO_DATA.hlm} className="offer-page-wrapper">
    <HealeniumPage />
  </Layout>
);

export default Hlm;
