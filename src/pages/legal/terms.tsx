import React, { FC } from 'react';
import { Layout } from '@app/components';
import { TermsPage } from '@app/containers/TermsPage';

const Terms: FC = () => (
  <Layout className="with-footer-banner">
    <TermsPage />
  </Layout>
);

export default Terms;
