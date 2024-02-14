import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { SaasPage } from '@app/containers/SassPage';
import { SassPricingConfig } from '@app/utils';
import { SEO_DATA } from "@app/pages/constants";

const Saas: FC<PageProps<null, SassPricingConfig>> = ({ pageContext }) => (
  <Layout seoData={SEO_DATA.saas} className="offer-page-wrapper">
    <SaasPage {...pageContext} />
  </Layout>
);

export default Saas;
