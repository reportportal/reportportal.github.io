import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@utils';
import LinkArrow from '@svg/externalLinkArrow.inline.svg';

import { Link } from '../../../Link';

import '../ComparePlans.scss';
import './RowSection.scss';

const getBlocksWith = createBemBlockBuilder(['rowSection']);
const getBlocksWithCompare = createBemBlockBuilder(['compare']);

export const FooterColumns = ({ footerButtons }) => (
  <div className={classNames(getBlocksWith(), getBlocksWith('__container'))}>
    <div className={getBlocksWithCompare('__row-title-wrapper')}>
      <div
        className={classNames(getBlocksWith('__row-title'), getBlocksWith('__row-title-footer'))}
      >
        <Link to="/legal/terms">
          Terms & Conditions <LinkArrow />
        </Link>
        <div>*billed quarterly</div>
      </div>
      <div
        className={classNames(
          getBlocksWithCompare('__row-title-cols'),
          getBlocksWithCompare('__row-title-cols-visible'),
        )}
      >
        {footerButtons.map(({ btn, mode, href, compareHref }) => (
          <div key={href} className={getBlocksWithCompare('__row-title-col')}>
            <div className={getBlocksWith('__buttonsWrapper')}>
              <Link
                className={classNames('btn', `btn--${mode}`, getBlocksWith('__button'))}
                to={compareHref ?? href}
              >
                {btn}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
