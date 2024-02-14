import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { D4jPage } from '@app/containers/AcceleratorsPage';
import { OnPremisesPricingConfig } from '@app/utils';
import { SEO_DATA } from "@app/pages/constants";

const D4j: FC<PageProps<null, OnPremisesPricingConfig>> = ({ pageContext }) => (
  <Layout seoData={SEO_DATA.d4j} className="offer-page-wrapper">
    <D4jPage {...pageContext} />
  </Layout>
);

export default D4j;
