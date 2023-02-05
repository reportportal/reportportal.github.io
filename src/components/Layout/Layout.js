import React from 'react';

import '../../styles/global.scss';

import { Seo } from '../Seo';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

export class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}
