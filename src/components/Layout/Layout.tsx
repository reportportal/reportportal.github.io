import React, { FC, useCallback } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { atom, useAtom } from 'jotai';

// eslint-disable-next-line import/no-unresolved
import '../../../static/antd.min.css'; // Will be generated at build time
import '../../styles/global.scss';

import { Seo } from './Seo';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { EmbedVideo } from './EmbedVideo';

export const subscriptionFormAtom = atom({ isSubmitted: false, isAlreadySubscribed: false });
export const watchProductOverviewAtom = atom({ isOpen: false });

interface Props {
  children: JSX.Element;
  className?: string;
}

export const Layout: FC<Props> = ({ children, className }) => {
  const [watchProductOverviewState, setWatchProductOverviewState] =
    useAtom(watchProductOverviewAtom);

  const toggleEmbedVideoOpen = useCallback(
    () => setWatchProductOverviewState(({ isOpen }) => ({ isOpen: !isOpen })),
    [setWatchProductOverviewState],
  );

  return (
    <StyleProvider hashPriority="high">
      <div className={className}>
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
