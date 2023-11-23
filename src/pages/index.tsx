import React, { FC } from 'react';
import { Layout } from '@app/components';
import { LandingPage } from '@app/containers/LandingPage';

const Root: FC = () => (
  <Layout className="with-footer-banner">
    <LandingPage />
  </Layout>
);

export default Root;
