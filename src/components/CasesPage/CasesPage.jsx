import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { SubscriptionBanner } from '../SubscriptionBanner';
import downloadIcon from './icons/download.svg';

import './CasesPage.scss';

const getBlocksWith = createBemBlockBuilder(['cases-page']);

export const CasesPage = ({ cases, handleLoadMore, showLoadMore }) => {
  return (
    <>
      <div className={getBlocksWith()}>
        <div className="container">
          <h1 className={getBlocksWith('__title')}>Case Studies</h1>
          <p className={getBlocksWith('__subtitle')}>
            These are some of the companies that ship confidently with ReportPortal
          </p>

          <div className={getBlocksWith('__download')}>
            <button className={cx('btn', 'btn--secondary-2', 'btn--large')} onClick={() => {}}>
              <img src={downloadIcon} alt="" />
              Download all Studies
            </button>
          </div>
        </div>
      </div>
      <div className={getBlocksWith('__cases-list')}>
        {cases.map(({ id, industry, title, icon, cardBackgroundImage }) => (
          <div
            style={{ backgroundImage: `url(${cardBackgroundImage?.file?.url})` }}
            className={cx(getBlocksWith('__cases-list-item-box'), industry.toLowerCase())}
            key={id}
            id={id}
          >
            <div className={getBlocksWith('__cases-list-item')} key={industry}>
              <div className={getBlocksWith('__cases-list-item-leading')}>
                <p>{industry}</p>
              </div>

              <div className={getBlocksWith('__cases-list-item-icon')}>
                <img src={icon?.file?.url} alt="" />
              </div>

              <div className={getBlocksWith('__cases-list-item-trailing')}>
                <p>{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showLoadMore ? (
        <div className={getBlocksWith('__load-more')}>
          <button
            className={cx('btn', 'btn--outline', 'btn--large', 'btn--white')}
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      ) : (
        <div className={getBlocksWith('__no-more')}></div>
      )}
      <SubscriptionBanner />
    </>
  );
};
