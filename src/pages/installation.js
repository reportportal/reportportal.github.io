import React from 'react';
import { Layout } from '../components/Layout';
import { Installation as InstallationPage } from '../components/Installation';

import '../styles/global.scss';

const Installation = ({ location }) => {
  return (
    <Layout location={location}>
      <InstallationPage />
    </Layout>
  );
};

export default Installation;
