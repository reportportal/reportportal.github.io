import React, { FC, ReactElement, useCallback, useRef } from 'react';
import { useLocation } from '@reach/router';
import Snowfall from 'react-snowfall';
import { StyleProvider } from '@ant-design/cssinjs';
import { useAtom } from 'jotai';
import { AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import { announcementOpenAtom, isNewYearMode, watchProductOverviewAtom } from '@app/utils';
import { AnnouncementBar } from '@app/components/AnnouncementBar';

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

interface LayoutProps {
  children: ReactElement;
  className?: string;
  seoData?: {
    title?: string;
    description?: string;
    noIndex?: boolean;
    previewImage?: string;
  };
}

export const Layout: FC<LayoutProps> = ({ children, className, seoData }) => {
  const location = useLocation();
  const [watchProductOverviewState, setWatchProductOverviewState] =
    useAtom(watchProductOverviewAtom);
  const [isAnnouncementBarOpen] = useAtom(announcementOpenAtom);
  const announcementBarRef = useRef<HTMLDivElement>(null);
  const isIndexPage = location.pathname === '/';

  const toggleEmbedVideoOpen = useCallback(
    () => setWatchProductOverviewState(({ isOpen }) => ({ isOpen: !isOpen })),
    [setWatchProductOverviewState],
  );

  return (
    <StyleProvider hashPriority="high">
      <div className={classNames(className, { 'new-year-mode': isNewYearMode })}>
        <AnimatePresence>
          {isAnnouncementBarOpen && isIndexPage && (
            <div ref={announcementBarRef}>
              <AnnouncementBar />
            </div>
          )}
        </AnimatePresence>
        <Seo
          description={seoData?.description}
          title={seoData?.title}
          noIndex={seoData?.noIndex}
          previewImage={seoData?.previewImage}
        />
        <Navigation announcementBarRef={announcementBarRef} />
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
