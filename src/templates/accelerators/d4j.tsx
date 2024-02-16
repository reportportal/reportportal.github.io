import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { D4jPage } from '@app/containers/AcceleratorsPage';
import { OnPremisesPricingConfig, SEO_DATA } from '@app/utils';

const D4j: FC<PageProps<null, OnPremisesPricingConfig>> = ({ pageContext }) => (
  <Layout seoData={SEO_DATA.d4j} className="offer-page-wrapper">
    <D4jPage {...pageContext} />
  </Layout>
);

export default D4j;
