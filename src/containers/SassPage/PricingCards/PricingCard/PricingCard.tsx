import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from '@app/components';
import { createBemBlockBuilder, formatNumberWithCommas } from '@app/utils';

import './PricingCard.scss';

interface PricingCardProps {
  card: {
    title: string;
    description: string;
    listItems: string[];
    price: {
      currency: string;
      value: number;
      period: string;
      message: string;
      discountedValueQuarterly: number;
      discountedValueYearly: number;
    };
    actionText: string;
    isPopular: string;
    actionVariant: string;
    href: string;
  };
  discountState: string;
}

const getBlocksWith = createBemBlockBuilder(['pricing-card']);

export const PricingCard: FC<PricingCardProps> = ({ card, discountState }) => {
  const { title, description, listItems, price, actionText, actionVariant, href } = card;
  const { currency, value, period, message, discountedValueQuarterly, discountedValueYearly } =
    price;
  const contactUsURL = !value ? href : `${href}/${discountState ? 'yearly' : 'quarterly'}`;

  return (
    <div className={getBlocksWith()}>
      <div>
        <div className={getBlocksWith('__popular')}>BLACK FRIDAY -{discountState ? 15 : 10}%</div>
        <div className={getBlocksWith('__title')}>{title}</div>
        <div className={getBlocksWith('__description')}>{description}</div>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={getBlocksWith('__bottom-panel')}>
        <div className={getBlocksWith('__price')}>
          {message ? (
            <span className={getBlocksWith('__price-value')}>{message}</span>
          ) : (
            <>
              <span className={getBlocksWith('__price-value-old')}>
                {currency} {formatNumberWithCommas(value)}
              </span>
              <span className={getBlocksWith('__price-value')}>
                {currency}{' '}
                {formatNumberWithCommas(
                  discountState ? discountedValueYearly : discountedValueQuarterly,
                )}
              </span>
              / {period}
            </>
          )}
        </div>
        {href ? (
          <Link
            className={classNames('btn', `btn--${actionVariant}`, 'btn--large')}
            to={contactUsURL}
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
