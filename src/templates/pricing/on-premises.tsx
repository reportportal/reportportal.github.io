import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { OnPremisesPage } from '@app/containers/OnPremisesPage';
import { OnPremisesPricingConfig } from '@app/utils';

const OnPremises: FC<PageProps<null, OnPremisesPricingConfig>> = ({ pageContext }) => (
  <Layout className="offer-page-wrapper">
    <OnPremisesPage {...pageContext} />
  </Layout>
);

export default OnPremises;
