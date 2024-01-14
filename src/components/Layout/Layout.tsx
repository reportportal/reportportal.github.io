import React, { FC, ReactElement, useCallback } from 'react';
import Snowfall from 'react-snowfall';
import { StyleProvider } from '@ant-design/cssinjs';
import { atom, useAtom } from 'jotai';
import classNames from 'classnames';
import { isNewYearMode } from '@app/utils';

// eslint-disable-next-line import/no-unresolved
import '../../../static/antd.min.css'; // Will be generated at build time
import '../../styles/global.scss';

import { Seo } from './Seo';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { EmbedVideo } from './EmbedVideo';

const snowfallProps = {
  color: '#dee4fd',
  snowflakeCount: 197,
  speed: [1, 3],
  wind: [-0.5, 1],
  radius: [0.5, 1],
  style: { position: 'fixed', zIndex: 1000 },
};

export const subscriptionFormAtom = atom({ isSubmitted: false, isAlreadySubscribed: false });
export const watchProductOverviewAtom = atom({ isOpen: false });

interface LayoutProps {
  children: ReactElement;
  className?: string;
}

export const Layout: FC<LayoutProps> = ({ children, className }) => {
  const [watchProductOverviewState, setWatchProductOverviewState] =
    useAtom(watchProductOverviewAtom);

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
      {isNewYearMode && <Snowfall {...snowfallProps} />}
    </StyleProvider>
  );
};
