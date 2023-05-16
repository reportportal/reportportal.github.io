import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';

import './Banner.scss';

const getBlocksWith = createBemBlockBuilder(['banner']);

export const Banner = () => (
  <div className={getBlocksWith()}>
    <div className={getBlocksWith('__inner')}>
      <div className={getBlocksWith('__titles')}>
        <div className={getBlocksWith('__title')}>Still have questions with installation?</div>
        <div className={getBlocksWith('__subtitle')}>Chat with us in Slack channel</div>
      </div>

      <div className={getBlocksWith('__btn-wrapper')}>
        <a href="https://slack.epmrpp.reportportal.io/">
          <button className={cx('btn', 'btn--primary', 'btn--large')}>Go to Slack channel</button>
        </a>
      </div>
    </div>
  </div>
);
