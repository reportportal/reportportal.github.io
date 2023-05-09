import React from 'react';
import './PricingCard.scss';
import { createBemBlockBuilder } from '../../../../../utils';
import cx from 'classnames';

export const PricingCard = (card) => {
  const { title, description, listItems, price, actionText, isPopular, actionVariant } = card;
  const getPricingCard = createBemBlockBuilder(['pricingCard']);
  return (
    <div className={getPricingCard()}>
      {isPopular && <div className={getPricingCard('--popular')}>Most popular</div>}
      <div className={getPricingCard('--title')}>{title}</div>
      <div className={getPricingCard('--description')}>{description}</div>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className={getPricingCard('--bottonPanel')}>
        <div className={getPricingCard('--price')}>
          <span>{price.value}</span>
          {price.period && price.period}
        </div>

        <button type="button" className={cx('btn', `btn--${actionVariant}`, 'btn--large')}>
          {actionText}
        </button>
      </div>
    </div>
  );
};
