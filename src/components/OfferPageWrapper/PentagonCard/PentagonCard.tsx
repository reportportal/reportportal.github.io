import React, { FC } from 'react';
import classNames from 'classnames';
import { Link, IconBlock } from '@app/components';
import {
  createBemBlockBuilder,
  Discount,
  formatNumberWithCommas,
  OnPremisesPricingConfig,
} from '@app/utils';

import { OFFER_HOURS } from '../constants';

import './PentagonCard.scss';

interface PentagonCardProps {
  progressNumber: number;
  hours: (typeof OFFER_HOURS)[number];
  pricing: OnPremisesPricingConfig;
  contactLink: string;
  discount: Discount;
}

const getBlocksWith = createBemBlockBuilder(['pentagon-card']);

export const PentagonCard: FC<PentagonCardProps> = ({
  hours,
  discount,
  pricing: { currency, period, prices },
  contactLink,
  progressNumber,
}) => {
  const iconBlockProps = hours
    ? { value: hours, text: 'Professional', benefit: 'Service Points' }
    : { value: 'Open Source' };

  return (
    <div className={getBlocksWith('__wrapper')}>
      <IconBlock type="pentagon" progressNumber={progressNumber} {...iconBlockProps} />
      <div className={getBlocksWith('__price')}>
        {!hours ? (
          prices.openSource
        ) : (
          <>
            {currency}
            {formatNumberWithCommas(prices[`package${hours}`][discount])} <span>/ {period}</span>
          </>
        )}
      </div>
      <Link to={contactLink}>
        <button
          type="button"
          className={classNames(
            getBlocksWith('__contact-button'),
            'btn',
            `btn--${hours ? 'primary' : 'outline'}`,
            'btn--large',
          )}
        >
          {hours ? 'Contact us' : 'Start now'}
        </button>
      </Link>
    </div>
  );
};
