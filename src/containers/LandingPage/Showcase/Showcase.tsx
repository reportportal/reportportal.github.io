import React, { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import Marquee from 'react-fast-marquee';
import { useAtom } from 'jotai';

import { createBemBlockBuilder } from '@utils';
import { watchProductOverviewAtom } from '@components/Layout';
import { Link } from '@components/Link';

import { Carousel } from './Carousel/Carousel';
import WalmartIcon from './icons/walmart.inline.svg';
import DowJonesIcon from './icons/dowjones.inline.svg';
import NokiaIcon from './icons/nokia.inline.svg';
import AthenaHealthIcon from './icons/athenahealth.inline.svg';
import DisneyIcon from './icons/disney.inline.svg';
import MastercardIcon from './icons/mastercard.inline.svg';
import IbmIcon from './icons/ibm.inline.svg';
import SiemensIcon from './icons/siemens.inline.svg';
import McKessonIcon from './icons/mckesson.inline.svg';
import RedisIcon from './icons/redis.inline.svg';
import ThompsonReutersIcon from './icons/thompsonreuters.inline.svg';
import StarbucksIcon from './icons/starbucks.inline.svg';
import AzureIcon from './icons/azure.inline.svg';
import AdidasIcon from './icons/adidas.inline.svg';
import CitcoIcon from './icons/citco.inline.svg';
import VerizonIcon from './icons/verizon.inline.svg';
import MilwaukeeIcon from './icons/milwaukee.inline.svg';
import PearsonIcon from './icons/pearson.inline.svg';
import RingIcon from './icons/ring.inline.svg';
import DellIcon from './icons/dell.inline.svg';

import './Showcase.scss';

const getBlocksWith = createBemBlockBuilder(['showcase']);

const slides = [
  [
    { icon: <WalmartIcon /> },
    { icon: <DowJonesIcon /> },
    { icon: <NokiaIcon /> },
    { icon: <AthenaHealthIcon /> },
    { icon: <DisneyIcon /> },
    { icon: <MastercardIcon /> },
    { icon: <IbmIcon /> },
  ],
  [
    { icon: <SiemensIcon /> },
    { icon: <McKessonIcon /> },
    { icon: <RedisIcon /> },
    { icon: <ThompsonReutersIcon /> },
    { icon: <StarbucksIcon /> },
    { icon: <AzureIcon /> },
  ],
  [
    { icon: <AdidasIcon /> },
    { icon: <CitcoIcon /> },
    { icon: <VerizonIcon /> },
    { icon: <MilwaukeeIcon /> },
    { icon: <PearsonIcon /> },
    { icon: <RingIcon /> },
    { icon: <DellIcon /> },
  ],
];

export const Showcase: React.FC = () => {
  const [, setWatchProductOverviewState] = useAtom(watchProductOverviewAtom);
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });

  const toggleEmbedVideoOpen = useCallback(
    () => setWatchProductOverviewState(({ isOpen }) => ({ isOpen: !isOpen })),
    [setWatchProductOverviewState],
  );

  return (
    <>
      <div className={getBlocksWith()}>
        <div className={getBlocksWith('__bg-video-container')}>
          <video className={getBlocksWith('__bg-video')} autoPlay loop muted>
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
        {isDesktop && <Carousel slides={slides} />}
        {!isDesktop && (
          <Marquee
            className={getBlocksWith('__carousel-mobile')}
            speed={25}
            pauseOnHover
            gradient={false}
          >
            {slides.flat().map((slide, index) => (
              <div className={getBlocksWith('__carousel-logo')} key={index}>
                {slide.icon}
              </div>
            ))}
          </Marquee>
        )}
      </div>
    </>
  );
};
