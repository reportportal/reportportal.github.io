import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { HealeniumPage } from '@app/containers/AcceleratorsPage';
import { OnPremisesPricingConfig, SEO_DATA } from '@app/utils';

const Hlm: FC<PageProps<null, OnPremisesPricingConfig>> = ({ pageContext }) => (
  <Layout seoData={SEO_DATA.hlm} className="offer-page-wrapper">
    <HealeniumPage {...pageContext} />
  </Layout>
);

export default Hlm;
