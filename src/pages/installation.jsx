import React from 'react';

import { Layout } from '../components/Layout';
import { InstallationPage } from '../components/InstallationPage';

import '../styles/global.scss';

const Installation = ({ location }) => {
  return (
    <Layout location={location}>
      <InstallationPage />
    </Layout>
  );
};

export default Installation;
