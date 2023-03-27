import React, { useCallback } from 'react';
import { useAtom } from 'jotai';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { watchProductOverviewAtom } from '../Layout';
import { EmbedVideo } from '../EmbedVideo';

import videoSrc1 from './RP_promo_video.mp4';
import videoSrc2 from './RP_promo_video.webm';

import './Showcase.scss';

const getBlocksWith = createBemBlockBuilder(['showcase']);

export const Showcase = () => {
  const [watchProductOverviewState, setWatchProductOverviewState] =
    useAtom(watchProductOverviewAtom);

  const toggleEmbedVideoOpen = useCallback(
    () => setWatchProductOverviewState(({ isOpen }) => ({ isOpen: !isOpen })),
    [],
  );

  return (
    <>
      <div className={getBlocksWith()}>
        <div className={getBlocksWith('__bg-video-container')}>
          <video className={getBlocksWith('__bg-video')} autoPlay loop muted>
            <source src={videoSrc2} type="video/webm" />
            <source src={videoSrc1} type="video/mp4" />
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
        <div className={getBlocksWith('__watch-video-container')}>
          <button className={getBlocksWith('__btn-watch-video')} onClick={toggleEmbedVideoOpen}>
            <span className={getBlocksWith('__btn-watch-video-icon')} />
            <span>Watch video</span>
          </button>
        </div>
      </div>
      <EmbedVideo
        isOpen={watchProductOverviewState.isOpen}
        embedId="Xci19TAiO50"
        onClick={toggleEmbedVideoOpen}
      />
    </>
  );
};
