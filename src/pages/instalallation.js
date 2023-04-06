import React from 'react';

import { Layout } from '../components/Layout';

import '../styles/global.scss';
import { Inst } from '../components/installation';

const Installation = ({ location }) => {
  return (
    <Layout location={location}>
      <Inst />
    </Layout>
  );
};

export default Installation;
