import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { HealeniumPage } from '@app/containers/AcceleratorsPage';
import { OnPremisesPricingConfig } from '@app/utils';
import { SEO_DATA } from "@app/pages/constants";

const Hlm: FC<PageProps<null, OnPremisesPricingConfig>> = ({ pageContext }) => (
  <Layout seoData={SEO_DATA.hlm} className="offer-page-wrapper">
    <HealeniumPage {...pageContext} />
  </Layout>
);

export default Hlm;
