import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components/Layout';
import { SaasPage } from '@app/containers/SassPage';
import { SassPricingConfig, SEO_DATA } from '@app/utils';

const Saas: FC<PageProps<null, SassPricingConfig>> = ({ pageContext }) => (
  <Layout seoData={SEO_DATA.saas} className="offer-page-wrapper">
    <SaasPage {...pageContext} />
  </Layout>
);

export default Saas;
