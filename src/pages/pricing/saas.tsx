import React, { FC } from 'react';
import { Layout } from '@app/components';
import { SaasPage } from '@app/containers/SassPage';

const Saas: FC = () => (
  <Layout className="offer-page-wrapper">
    <SaasPage />
  </Layout>
);

export default Saas;
