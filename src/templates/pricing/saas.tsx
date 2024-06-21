import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { SaasPage } from '@app/containers/SassPage';
import { SEO_DATA } from '@app/utils';

const Saas: FC = () => (
  <Layout seoData={SEO_DATA.saas} className="offer-page-wrapper">
    <SaasPage />
  </Layout>
);

export default Saas;
