import React from 'react';
import { atom } from 'jotai';

import '../../styles/global.scss';

import { Seo } from '../Seo';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

export const subscriptionFormAtom = atom({ isSubmitted: false, isAlreadySubscribed: false });

export const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};
