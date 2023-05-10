import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../../utils';

import './PricingCard.scss';

const getPricingCard = createBemBlockBuilder(['card']);

export const PricingCard = (card) => {
  const { title, description, listItems, price, actionText, isPopular, actionVariant } = card;

  return (
    <div className={getPricingCard()}>
      {isPopular && <div className={getPricingCard('__popular')}>Most popular</div>}

      <div className={getPricingCard('__title')}>{title}</div>
      <div className={getPricingCard('__description')}>{description}</div>

      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className={getPricingCard('__bottom-panel')}>
        <div className={getPricingCard('__price')}>
          <span>{price.value}</span>
          {price.period && price.period}
        </div>

        {/* `btn--${actionVariant}`, 'btn--large')   -?????????????????????   */}

        <button type="button" className={cx('btn', `btn--${actionVariant}`, 'btn--large')}>
          {actionText}
        </button>
      </div>
    </div>
  );
};
