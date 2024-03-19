import React, { FC } from 'react';
import isString from 'lodash/isString';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import {
  createBemBlockBuilder,
  Discount,
  formatNumberWithCommas,
  SAAS_OFFERS_KEYS,
  SassPricingConfig,
} from '@app/utils';

import './PricingCard.scss';

interface PricingCardProps {
  offer: {
    key: SAAS_OFFERS_KEYS;
    title: string;
    description: string;
    listItems: string[];
    actionText: string;
    isPopular: boolean;
    actionVariant: string;
    href: string;
  };
  discount: Discount;
  pricing: SassPricingConfig;
}

const getBlocksWith = createBemBlockBuilder(['pricing-card']);

export const PricingCard: FC<PricingCardProps> = ({
  offer: { key, title, description, listItems, actionText, isPopular, actionVariant, href },
  pricing: { prices, currency, period },
  discount,
}) => {
  const priceValue = prices[key];

  return (
    <div className={getBlocksWith()}>
      <div>
        {isPopular && <div className={getBlocksWith('__popular')}>Most popular</div>}
        <div className={getBlocksWith('__title')}>{title}</div>
        <div className={getBlocksWith('__description')}>{description}</div>
        <ul>
          {listItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={getBlocksWith('__bottom-panel')}>
        <div className={getBlocksWith('__price')}>
          {isString(priceValue) ? (
            <span className={getBlocksWith('__price-value')}>{priceValue}</span>
          ) : (
            <>
              <span className={getBlocksWith('__price-value')}>
                {currency} {formatNumberWithCommas(priceValue[discount])}
              </span>
              / {period}
            </>
          )}
        </div>
        {href ? (
          <Link
            className={classNames('btn', `btn--${actionVariant}`, 'btn--large')}
            to={`${href}/${discount}`}
          >
            {actionText}
          </Link>
        ) : (
          <button
            type="button"
            className={classNames('btn', `btn--${actionVariant}`, 'btn--large')}
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};
