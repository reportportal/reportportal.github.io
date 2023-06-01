import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { buttonsData } from './dataPlans';
import { Link } from '../../../Link';

import './ComparePlans.scss';

const getCompareContainer = createBemBlockBuilder(['compare']);

export const RowSection = ({ footer }) => <>{footer ? <FooterColumns /> : <TitleRow />}</>;

const TitleRow = () => (
  <div className={cx(getCompareContainer('__section'), getCompareContainer('__section-title'))}>
    Premium Features
  </div>
);

const FooterColumns = () => (
  <div className={cx(getCompareContainer('__section'), getCompareContainer('__section-btns'))}>
    <div className={getCompareContainer('__row-title-wrapper')}>
      <div
        className={cx(
          getCompareContainer('__row-title'),
          getCompareContainer('__row-title-footer'),
        )}
      >
        <Link to="https://reportportal.io/legal/terms">Terms and Conditions &#x2197;</Link>
      </div>

      <div
        className={cx(
          getCompareContainer('__row-title-cols'),
          getCompareContainer('__row-title-cols-visible'),
        )}
      >
        {buttonsData.map(({ btn, mode, href }) => (
          <div key={btn} className={cx(getCompareContainer('__row-title-col'), {})}>
            <div className={getCompareContainer('__section-btn-wrapper')}>
              {href ? (
                <Link
                  className={cx('btn', `btn--${mode}`, getCompareContainer('__section-btn'))}
                  to={href}
                >
                  {btn}
                </Link>
              ) : (
                <button
                  type="button"
                  className={cx('btn', `btn--${mode}`, getCompareContainer('__section-btn'))}
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
