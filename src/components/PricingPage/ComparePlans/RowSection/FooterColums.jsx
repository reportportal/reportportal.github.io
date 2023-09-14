import cx from 'classnames';
import React from 'react';

import { Link } from '../../../Link';
import { createBemBlockBuilder } from '../../../../utils';
import LinkArrow from '../../../../svg/externalLinkArrow.inline.svg';
import { buttonsData } from '../../SassPage/dataPlans';

import '../ComparePlans.scss';
import './RowSection.scss';

const getBlocksWith = createBemBlockBuilder(['rowSection']);
const getBlocksWithCompare = createBemBlockBuilder(['compare']);

export const FooterColumns = () => (
  <div className={cx(getBlocksWith(), getBlocksWith('__container'))}>
    <div className={getBlocksWithCompare('__row-title-wrapper')}>
      <div className={cx(getBlocksWith('__row-title'), getBlocksWith('__row-title-footer'))}>
        <Link to="https://reportportal.io/legal/terms">
          Terms & Conditions <LinkArrow />
        </Link>
      </div>
      <div
        className={cx(
          getBlocksWithCompare('__row-title-cols'),
          getBlocksWithCompare('__row-title-cols-visible'),
        )}
      >
        {buttonsData.map(({ btn, mode, href }) => (
          <div key={btn} className={getBlocksWithCompare('__row-title-col')}>
            <div className={getBlocksWith('__buttonsWrapper')}>
              {href ? (
                <Link className={cx('btn', `btn--${mode}`, getBlocksWith('__button'))} to={href}>
                  {btn}
                </Link>
              ) : (
                <button
                  type="button"
                  className={cx('btn', `btn--${mode}`, getBlocksWith('__button'))}
                >
                  {btn}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
