import React from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';
import { $tabletSm } from '../../../../utils/breakpoint';
import { buttonsData } from './dataPlans';
import { Link } from '../../../Link';

import './ComparePlans.scss';

const getCompareContainer = createBemBlockBuilder(['compare']);

export const RowSection = ({ footer }) => {
  const isDesktop = useMediaQuery({ query: $tabletSm });

  return (
    <>
      {footer ? (
        <div
          className={cx(getCompareContainer('__section'), getCompareContainer('__section-btns'))}
        >
          <FooterColumns />
        </div>
      ) : (
        <div
          className={cx(getCompareContainer('__section'), getCompareContainer('__section-title'), {
            [getCompareContainer('__section-adjustment')]: !isDesktop,
          })}
        >
          Premium Features
        </div>
      )}
    </>
  );
};

const FooterColumns = () => {
  const isDesktop = useMediaQuery({ query: $tabletSm });

  return (
    <div className={getCompareContainer('__row-title-wrapper')}>
      <div
        className={cx(
          getCompareContainer('__row-title'),
          getCompareContainer('__row-title-footer'),
          { [getCompareContainer('__row-title-footer-centred')]: !isDesktop },
        )}
      >
        <Link to="https://reportportal.io/legal/terms">Terms and Conditions &#x2197;</Link>
      </div>

      {isDesktop && (
        <div className={getCompareContainer('__row-title-cols')}>
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
      )}
    </div>
  );
};
