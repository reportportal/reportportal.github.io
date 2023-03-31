import { Features } from '../components/Features';
import { Layout } from '../components/Layout';
import React from 'react';
import { Showcase } from '../components/Showcase';
import { WhyReportPortal } from '../components/WhyReportPortal';

const RootIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Features />
    </Layout>
    
      /* Comment Layout Abobe and uncomment this one to Render Features Page
      <Layout location={this.props.location}>
        <Features />
      </Layout>
      */
  );
};

export default RootIndex;
