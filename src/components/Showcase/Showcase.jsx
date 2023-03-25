import React from 'react';
import { useAtom } from 'jotai';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { watchProductOverviewAtom } from '../Layout';
import { EmbedVideo } from '../EmbedVideo';

import videoSrc from './RP_promo_video.mp4';

import './Showcase.scss';

const getBlocksWith = createBemBlockBuilder(['showcase']);

export const Showcase = () => {
  const [watchProductOverviewState, setWatchProductOverviewState] =
    useAtom(watchProductOverviewAtom);

  const toggleEmbedVideoOpen = () =>
    setWatchProductOverviewState(({ isOpen }) => ({ isOpen: !isOpen }));

  const watchVideoBtn = (
    <button className={getBlocksWith('__btn-watch-video')} onClick={toggleEmbedVideoOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M24 44a20 20 0 1 0 0-40 20 20 0 0 0 0 40Z"
        />
        <path
          fill="#fff"
          d="M20 19.74a2 2 0 0 1 3.1-1.67l6.4 4.27a2 2 0 0 1 0 3.32l-6.4 4.27a2 2 0 0 1-3.1-1.67v-8.52Z"
        />
      </svg>
      <span>Watch video</span>
    </button>
  );

  return (
    <>
      <div className={getBlocksWith()}>
        <div className={getBlocksWith('__bg-video-container')}>
          <video className={getBlocksWith('__bg-video')} autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
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
            <button className={cx('btn', 'btn--secondary', 'btn--large')}>Start free trial</button>
            <button className={cx('btn', 'btn--outline-2', 'btn--large')}>Get a quote</button>
          </div>
        </div>
        <div className={getBlocksWith('__watch-video-container')}>{watchVideoBtn}</div>
      </div>
      <EmbedVideo
        isOpen={watchProductOverviewState.isOpen}
        embedId="Xci19TAiO50"
        onClick={toggleEmbedVideoOpen}
      />
    </>
  );
};
