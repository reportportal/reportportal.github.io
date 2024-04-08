import React, { FC } from 'react';
import isString from 'lodash/isString';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import {
  createBemBlockBuilder,
  Discount,
  formatNumberWithCommas,
  isAbsoluteURL,
  PricingConfigOptionDto,
} from '@app/utils';
import ArrowIcon from '@app/svg/arrow.inline.svg';

import './PricingCard.scss';

interface PricingCardProps {
  title: string;
  currency: string;
  priceValue: string | PricingConfigOptionDto;
  period: string;
  actionVariant: string;
  actionText: string;
  href: string;
  discount: Discount;
  listItems?: string[];
  description?: string;
  dataGtm?: string;
  isPopular?: boolean;
  isDiamond?: boolean;
  isFullWidth?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['pricing-card']);

export const PricingCard: FC<PricingCardProps> = ({
  isPopular,
  title,
  description,
  listItems,
  priceValue,
  currency,
  discount,
  period,
  href,
  actionVariant,
  actionText,
  isDiamond,
  isFullWidth,
  dataGtm,
}) => (
  <div className={classNames(getBlocksWith(), { [getBlocksWith('--full-width')]: isFullWidth })}>
    <div>
      {isPopular && <div className={getBlocksWith('__popular')}>Most popular</div>}
      {isDiamond && <div className={getBlocksWith('__diamond')} />}
      <div className={getBlocksWith('__title')}>{title}</div>
      {description && <div className={getBlocksWith('__description')}>{description}</div>}
      {listItems && (
        <ul>
          {listItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
    <div className={getBlocksWith('__bottom-panel')}>
      <div className={getBlocksWith('__price')}>
        {isString(priceValue) ? (
          <span className={getBlocksWith('__price-value')}>{priceValue}</span>
        ) : (
          <>
            <span className={getBlocksWith('__price-value')}>
              {currency} {formatNumberWithCommas(priceValue[discount])}
              {isDiamond && '+'}
            </span>
            / {period}
          </>
        )}
      </div>
      <Link
        className={classNames('btn', `btn--${actionVariant}`, 'btn--large')}
        to={`${isAbsoluteURL(href) ? `${href}` : `${href}/${discount}`}`}
        {...(dataGtm && { 'data-gtm': dataGtm })}
      >
        {actionText}
        {isAbsoluteURL(href) && <ArrowIcon />}
      </Link>
    </div>
  </div>
);
