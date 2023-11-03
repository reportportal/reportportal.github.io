import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder, formatNumberWithCommas } from '@app/utils';

import './PricingCard.scss';

interface PricingCardProps {
  card: {
    title: string;
    description: string;
    listItems: string[];
    price: {
      currency: string;
      value: string;
      period: string;
      message: string;
      discountedValue: string;
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
  const { title, description, listItems, price, actionText, isPopular, actionVariant, href } = card;
  const { currency, value, period, message, discountedValue } = price;
  const contactUsURL = !value ? href : `${href}/${discountState ? 'yearly' : 'quarterly'}`;

  return (
    <div className={getBlocksWith()}>
      <div>
        {isPopular && <div className={getBlocksWith('__popular')}>Most popular</div>}
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
            <span>{message}</span>
          ) : (
            <>
              <span>
                {currency} {formatNumberWithCommas(discountState ? discountedValue : value)}
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
