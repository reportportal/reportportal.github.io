import React from 'react';
import classNames from 'classnames';

import DownloadIcon from '@svg/download.inline.svg';
import { createBemBlockBuilder } from '@utils';
import { Link } from '@components/Link';
import { SubscriptionBanner } from '@components/SubscriptionBanner';

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

          <div className={classNames(getBlocksWith('__download'), 'temporary-hide')}>
            <button className="btn btn--secondary-2 btn--large" onClick={() => {}}>
              <DownloadIcon />
              Download all Studies
            </button>
          </div>
        </div>
      </div>
      <div className={classNames(getBlocksWith('__cases-list'), 'container')}>
        {cases.map(({ id, industry, title, icon, cardBackgroundImage, slug }) => (
          <div
            style={{ backgroundImage: `url(${cardBackgroundImage?.file?.url})` }}
            className={classNames(getBlocksWith('__cases-list-item-box'), industry.toLowerCase())}
            key={id}
            id={id}
          >
            <Link
              className={getBlocksWith('__cases-list-item')}
              key={industry}
              to={`/case-studies/${slug}`}
            >
              <div className={getBlocksWith('__cases-list-item-leading')}>
                <p>{industry}</p>
              </div>

              <div className={getBlocksWith('__cases-list-item-icon')}>
                <img src={icon?.file?.url} alt="" />
              </div>

              <div className={getBlocksWith('__cases-list-item-trailing')}>
                <p>{title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {showLoadMore ? (
        <div className={getBlocksWith('__load-more')}>
          <button className="btn btn--outline btn--large btn--white" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      ) : (
        <div className={getBlocksWith('__no-more')} />
      )}
      <SubscriptionBanner />
    </>
  );
};
