import Features from '../components/Features';
import { Layout } from '../components/Layout';
import React from 'react';

class FeaturesIndex extends React.Component {
  
  render() {

    return (
      <Layout location={this.props.location}>
        <Features />
      </Layout>
    );
  }
}


export default FeaturesIndex;
