import React from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { atom } from 'jotai';

import '../../../static/antd.min.css';
import '../../styles/global.scss';

import { Seo } from '../Seo';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

export const subscriptionFormAtom = atom({ isSubmitted: false, isAlreadySubscribed: false });
export const watchProductOverviewAtom = atom({ isOpen: false });

export const Layout = ({ children, className }) => {
  return (
    <StyleProvider hashPriority="prependQueue">
      <div className={className}>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </StyleProvider>
  );
};
