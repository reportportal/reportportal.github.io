import React, { FC, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import Marquee from 'react-fast-marquee';
import { InView } from 'react-intersection-observer';
import { useAtom } from 'jotai';
import { motion } from 'framer-motion';
import { Link } from '@app/components/Link';
import { useClientCarouselItems } from '@app/hooks/useClientCarouselItems';
import { createBemBlockBuilder, watchProductOverviewAtom } from '@app/utils';

import { OrganizationsCarousel } from './OrganizationsCarousel';

import './Showcase.scss';

const getBlocksWith = createBemBlockBuilder(['showcase']);

const getMotionAnimation = ({ inView, delay = 0 }: { inView: boolean; delay?: number }) => ({
  initial: 'hidden',
  animate: inView ? 'show' : 'hidden',
  exit: 'hidden',
  variants: {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
    },
  },
  transition: { type: 'spring', stiffness: 400, damping: 30, mass: 1, delay },
});

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
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div ref={ref}>
            <motion.h1 className={getBlocksWith('__title')} {...getMotionAnimation({ inView })}>
              AI-powered <br />
              Test Automation Dashboard
            </motion.h1>
            <motion.p
              className={getBlocksWith('__subtitle')}
              {...getMotionAnimation({ inView, delay: 0.1 })}
            >
              Aggregate and analyze test reports to ascertain release health
            </motion.p>
            <motion.div
              className={getBlocksWith('__btn-row')}
              {...getMotionAnimation({ inView, delay: 0.2 })}
            >
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
            </motion.div>
            <motion.div
              className={getBlocksWith('__watch-video-container')}
              {...getMotionAnimation({ inView, delay: 0.3 })}
            >
              <button className={getBlocksWith('__btn-watch-video')} onClick={toggleEmbedVideoOpen}>
                <span className={getBlocksWith('__btn-watch-video-icon')} />
                <span>Watch video</span>
              </button>
            </motion.div>
          </div>
        )}
      </InView>
      {isDesktop && <OrganizationsCarousel slides={slides} logoKey="primaryLogo" />}
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
