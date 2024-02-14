import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { OnPremisesPage } from '@app/containers/OnPremisesPage';
import { OnPremisesPricingConfig } from '@app/utils';
import { SEO_DATA } from "@app/pages/constants";

const OnPremises: FC<PageProps<null, OnPremisesPricingConfig>> = ({ pageContext }) => (
  <Layout seoData={SEO_DATA.onPremises} className="offer-page-wrapper">
    <OnPremisesPage {...pageContext} />
  </Layout>
);

export default OnPremises;
