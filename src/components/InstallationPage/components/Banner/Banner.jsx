import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { Link } from '../../../Link';

import './Banner.scss';

const getBlocksWith = createBemBlockBuilder(['banner']);

export const Banner = ({ title, subtitle, link, linkTitle }) => (
  <div className={getBlocksWith()}>
    <div className={getBlocksWith('__bg')} />
    <div className="container">
      <div className={getBlocksWith('__wrapper')}>
        <div className={getBlocksWith('__inner')}>
          <div className={getBlocksWith('__titles')}>
            <div className={getBlocksWith('__title')}>{title}</div>
            {subtitle && <div className={getBlocksWith('__subtitle')}>{subtitle}</div>}
          </div>

          <div className={getBlocksWith('__btn-wrapper')}>
            <Link className={cx('btn', 'btn--primary', 'btn--large')} to={link}>
              {linkTitle}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
