import React, { FC, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import Marquee from 'react-fast-marquee';
import { InView } from 'react-intersection-observer';
import { useAtom } from 'jotai';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from '@app/components/Link';
import { useClientCarouselItems } from '@app/hooks/useClientCarouselItems';
import { createBemBlockBuilder, watchProductOverviewAtom } from '@app/utils';

import { OrganizationsCarousel } from './OrganizationsCarousel';

import './Showcase.scss';

const getBlocksWith = createBemBlockBuilder(['showcase']);

const getMotionAnimation = ({
  inView,
  delay = 0,
  additionalEffects = { hidden: {}, show: {} },
  shouldReduceMotion = false,
}: {
  inView: boolean;
  delay?: number;
  additionalEffects?: { hidden: Record<string, number>; show: Record<string, number> };
  shouldReduceMotion?: boolean | null;
}) => ({
  initial: shouldReduceMotion ? 'show' : 'hidden',
  animate: !shouldReduceMotion && (inView ? 'show' : 'hidden'),
  exit: 'hidden',
  variants: {
    hidden: {
      scale: 0.5,
      opacity: 0,
      ...additionalEffects.hidden,
    },
    show: {
      scale: 1,
      opacity: 1,
      ...additionalEffects.show,
    },
  },
  transition: { type: 'spring', stiffness: 400, damping: 30, mass: 1, delay },
});

export const Showcase: FC = () => {
  const [, setWatchProductOverviewState] = useAtom(watchProductOverviewAtom);
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });
  const { slides, allSlidesItems } = useClientCarouselItems();
  const shouldReduceMotion = useReducedMotion();

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
          poster="/PR_promo_video_poster.png"
        >
          <source src="/RP_promo_video.webm" type="video/webm" />
          <source src="/RP_promo_video.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div ref={ref}>
            <motion.h1
              className={getBlocksWith('__title')}
              {...getMotionAnimation({ inView, shouldReduceMotion })}
            >
              AI-powered <br />
              Test Automation Dashboard
            </motion.h1>
            <motion.p
              className={getBlocksWith('__subtitle')}
              {...getMotionAnimation({ inView, delay: 0.1, shouldReduceMotion })}
            >
              Aggregate and analyze test reports to ascertain release health
            </motion.p>
            <motion.div
              className={getBlocksWith('__btn-row')}
              {...getMotionAnimation({ inView, delay: 0.2, shouldReduceMotion })}
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
              {...getMotionAnimation({ inView, delay: 0.3, shouldReduceMotion })}
            >
              <button className={getBlocksWith('__btn-watch-video')} onClick={toggleEmbedVideoOpen}>
                <span className={getBlocksWith('__btn-watch-video-icon')} />
                <span>Watch video</span>
              </button>
            </motion.div>
          </div>
        )}
      </InView>
      {isDesktop && (
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              {...getMotionAnimation({
                inView,
                additionalEffects: { hidden: { y: 50 }, show: { y: 0 } },
                shouldReduceMotion,
              })}
            >
              <OrganizationsCarousel slides={slides} logoKey="primaryLogo" />
            </motion.div>
          )}
        </InView>
      )}
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
