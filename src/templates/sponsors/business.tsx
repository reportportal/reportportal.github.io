import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { BusinessPage } from '@app/containers/SponsorsPage/BusinessPage';
import { SEO_DATA } from '@app/utils';

const Business: FC = () => (
  <Layout seoData={SEO_DATA.business}>
    <BusinessPage />
  </Layout>
);

export default Business;
