import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { OnPremisesPage } from '@app/containers/OnPremisesPage';
import { SEO_DATA } from '@app/utils';

const OnPremises: FC = () => (
  <Layout seoData={SEO_DATA.onPremises} className="offer-page-wrapper">
    <OnPremisesPage />
  </Layout>
);

export default OnPremises;
