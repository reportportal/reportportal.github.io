import React from 'react';
import classNames from 'classnames';

import { Link } from '@app/components/Link';
import { createBemBlockBuilder } from '@app/utils';

import LinkArrow from '../../../../svg/externalLinkArrow.inline.svg';

import '../../ComparePlans.scss';
import '../RowSection.scss';

interface Props {
  footerButtons: {
    btn: string;
    mode: string;
    href: string;
    compareHref: string;
  }[];
}

const getBlocksWith = createBemBlockBuilder(['row-section']);
const getBlocksWithCompare = createBemBlockBuilder(['compare']);

export const FooterColumns: React.FC<Props> = ({ footerButtons }) => (
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
            <div className={getBlocksWith('__buttons-wrapper')}>
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
