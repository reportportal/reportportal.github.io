import React, { FC } from 'react';
import { Layout, Seo } from '@app/components/Layout';
import { TermsPage } from '@app/containers/TermsPage';
import { SEO_DATA } from '@app/utils';

const Terms: FC = () => (
  <Layout>
    <TermsPage />
  </Layout>
);

export default Terms;

export const Head = () => {
  const { title, description } = SEO_DATA.terms;

  return <Seo title={title} description={description} />;
};
