import React, { FC } from 'react';
import { Layout } from '@app/components';
import { TermsPage } from '@app/containers/TermsPage';
import { SEO_DATA } from '@app/utils';

const Terms: FC = () => (
  <Layout seoData={SEO_DATA.terms}>
    <TermsPage />
  </Layout>
);

export default Terms;
