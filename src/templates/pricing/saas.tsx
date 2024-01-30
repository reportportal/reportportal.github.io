import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { SaasPage } from '@app/containers/SassPage';
import { SassPricingConfig } from '@app/utils';

const Saas: FC<PageProps<null, SassPricingConfig>> = ({ pageContext }) => (
  <Layout className="offer-page-wrapper">
    <SaasPage {...pageContext} />
  </Layout>
);

export default Saas;
