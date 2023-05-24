import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { Link } from '../../../Link';

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
        <Link
          className={cx('btn', 'btn--primary', 'btn--large')}
          to="https://slack.epmrpp.reportportal.io/"
        >
          Go to Slack channel
        </Link>
      </div>
    </div>
  </div>
);
