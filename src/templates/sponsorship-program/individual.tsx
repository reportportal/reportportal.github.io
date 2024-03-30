import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { IndividualPage } from '@app/containers/SponsorsPage/IndividualPage';
import { SEO_DATA } from '@app/utils';

const Individual: FC = () => (
  <Layout seoData={SEO_DATA.individual}>
    <IndividualPage />
  </Layout>
);

export default Individual;
