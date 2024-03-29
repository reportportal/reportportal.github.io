import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components/Layout';
import { QaspPage } from '@app/containers/AcceleratorsPage';
import { OnPremisesPricingConfig, SEO_DATA } from '@app/utils';

const Qasp: FC<PageProps<null, OnPremisesPricingConfig>> = ({ pageContext }) => (
  <Layout seoData={SEO_DATA.qasp} className="offer-page-wrapper">
    <QaspPage {...pageContext} />
  </Layout>
);

export default Qasp;
