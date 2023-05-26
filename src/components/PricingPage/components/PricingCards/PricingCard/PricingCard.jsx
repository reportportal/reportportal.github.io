import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../../utils';
import { Link } from '../../../../Link';

import './PricingCard.scss';

const getPricingCard = createBemBlockBuilder(['card']);

export const PricingCard = ({ card, discountState }) => {
  const { title, description, listItems, price, actionText, isPopular, actionVariant, href } = card;
  const { currency, value, period, message, discountedValue } = price;

  const formatNumberWithCommas = (number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className={getPricingCard()}>
      <div>
        {isPopular && <div className={getPricingCard('__popular')}>Most popular</div>}

        <div className={getPricingCard('__title')}>{title}</div>
        <div className={getPricingCard('__description')}>{description}</div>

        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={getPricingCard('__bottom-panel')}>
        <div className={getPricingCard('__price')}>
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
          <Link href={href} className={cx('btn', `btn--${actionVariant}`, 'btn--large')}>
            {actionText}
          </Link>
        ) : (
          <button type="button" className={cx('btn', `btn--${actionVariant}`, 'btn--large')}>
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};
