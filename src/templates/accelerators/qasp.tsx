import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@app/components';
import { QaspPage } from '@app/containers/AcceleratorsPage';
import { OnPremisesPricingConfig } from '@app/utils';

const Qasp: FC<PageProps<null, OnPremisesPricingConfig>> = ({ pageContext }) => (
  <Layout className="offer-page-wrapper">
    <QaspPage {...pageContext} />
  </Layout>
);

export default Qasp;
