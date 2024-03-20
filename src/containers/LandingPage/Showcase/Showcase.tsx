import React, { FC, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import Marquee from 'react-fast-marquee';
import { useAtom } from 'jotai';
import { Link } from '@app/components/Link';
import { useClientCarouselItems } from '@app/hooks/useClientCarouselItems';
import { createBemBlockBuilder, watchProductOverviewAtom } from '@app/utils';

import { Carousel } from './Carousel/Carousel';

import './Showcase.scss';

const getBlocksWith = createBemBlockBuilder(['showcase']);

export const Showcase: FC = () => {
  const [, setWatchProductOverviewState] = useAtom(watchProductOverviewAtom);
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });
  const { slides, allSlidesItems } = useClientCarouselItems();

  const toggleEmbedVideoOpen = useCallback(
    () => setWatchProductOverviewState(({ isOpen }) => ({ isOpen: !isOpen })),
    [setWatchProductOverviewState],
  );

  return (
    <div className={getBlocksWith()}>
      <div className={getBlocksWith('__bg-video-container')}>
        <video
          className={getBlocksWith('__bg-video')}
          preload="auto"
          autoPlay
          loop
          muted
          controlsList="nodownload"
          playsInline
        >
          <source src="/RP_promo_video.webm" type="video/webm" />
          <source src="/RP_promo_video.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
      <h1 className={getBlocksWith('__title')}>
        AI-powered <br />
        Test Automation Dashboard
      </h1>
      <p className={getBlocksWith('__subtitle')}>
        Aggregate and analyze test reports to ascertain release health
      </p>
      <div className={getBlocksWith('__btn-row')}>
        <div className={getBlocksWith('__btn-group')}>
          <Link
            className="btn btn--secondary btn--large"
            to="https://demo.reportportal.io/"
            data-gtm="start_free_trial"
          >
            Try Demo
          </Link>
          <Link
            className="btn btn--outline-2 btn--large"
            to="/contact-us/general"
            data-gtm="get_a_quote"
          >
            Get a quote
          </Link>
        </div>
      </div>
      <div className={getBlocksWith('__watch-video-container')}>
        <button className={getBlocksWith('__btn-watch-video')} onClick={toggleEmbedVideoOpen}>
          <span className={getBlocksWith('__btn-watch-video-icon')} />
          <span>Watch video</span>
        </button>
      </div>
      {isDesktop && <Carousel slides={slides} logoKey="primaryLogo" />}
      {!isDesktop && (
        <Marquee
          className={getBlocksWith('__carousel-mobile')}
          speed={25}
          pauseOnHover
          gradient={false}
        >
          {allSlidesItems.map(({ id, primaryLogo }) => (
            <div className={getBlocksWith('__carousel-logo')} key={id}>
              <img src={primaryLogo?.url} alt={primaryLogo?.title} />
            </div>
          ))}
        </Marquee>
      )}
    </div>
  );
};
