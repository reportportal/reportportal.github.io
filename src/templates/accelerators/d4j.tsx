import React, { FC } from 'react';
import { Layout } from '@app/components/Layout';
import { D4jPage } from '@app/containers/AcceleratorsPage';
import { SEO_DATA } from '@app/utils';

const D4j: FC = () => (
  <Layout seoData={SEO_DATA.d4j} className="offer-page-wrapper">
    <D4jPage />
  </Layout>
);

export default D4j;
