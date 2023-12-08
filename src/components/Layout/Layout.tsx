import React, { FC, ReactElement, useCallback } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { atom, useAtom } from 'jotai';
import classNames from 'classnames';

// eslint-disable-next-line import/no-unresolved
import '../../../static/antd.min.css'; // Will be generated at build time
import '../../styles/global.scss';

import { Seo } from './Seo';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { EmbedVideo } from './EmbedVideo';
import { isDateBetweenNov25AndDec14 } from './utils';

export const subscriptionFormAtom = atom({ isSubmitted: false, isAlreadySubscribed: false });
export const watchProductOverviewAtom = atom({ isOpen: false });
export const newYearModeAtom = atom(isDateBetweenNov25AndDec14());

interface LayoutProps {
  children: ReactElement;
  className?: string;
}

export const Layout: FC<LayoutProps> = ({ children, className }) => {
  const [watchProductOverviewState, setWatchProductOverviewState] =
    useAtom(watchProductOverviewAtom);
  const [isNewYearMode] = useAtom(newYearModeAtom);

  const toggleEmbedVideoOpen = useCallback(
    () => setWatchProductOverviewState(({ isOpen }) => ({ isOpen: !isOpen })),
    [setWatchProductOverviewState],
  );

  return (
    <StyleProvider hashPriority="high">
      <div className={classNames(className, { 'new-year-mode': isNewYearMode })}>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <EmbedVideo
          isOpen={watchProductOverviewState.isOpen}
          embedId="Xci19TAiO50"
          onClick={toggleEmbedVideoOpen}
        />
      </div>
    </StyleProvider>
  );
};
