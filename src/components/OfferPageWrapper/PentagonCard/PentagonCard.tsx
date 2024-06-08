import React, { FC } from 'react';
import classNames from 'classnames';
import { IconBlock } from '@app/components/IconBlock';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder, formatNumberWithCommas } from '@app/utils';

import './PentagonCard.scss';

interface PentagonCardProps {
  title: string;
  description?: string;
  pricingInfo?: string;
  priceValue?: number;
  currency: string;
  period: string;
  progressNumber: number;
  contactLink: string;
  actionText: string;
  actionVariant: string;
}

const getBlocksWith = createBemBlockBuilder(['pentagon-card']);

export const PentagonCard: FC<PentagonCardProps> = ({
  pricingInfo,
  title,
  description,
  priceValue,
  currency,
  period,
  contactLink,
  progressNumber,
  actionText,
  actionVariant,
}) => (
  <div className={getBlocksWith('__wrapper')}>
    <IconBlock
      title={title}
      description={description}
      type="pentagon"
      progressNumber={progressNumber}
    />
    <div className={getBlocksWith('__price')}>
      {pricingInfo ?? (
        <>
          {currency}
          {formatNumberWithCommas(priceValue as number)} <span>/ {period}</span>
        </>
      )}
    </div>
    <Link to={contactLink}>
      <button
        type="button"
        className={classNames(
          getBlocksWith('__contact-button'),
          'btn',
          `btn--${actionVariant}`,
          'btn--large',
        )}
      >
        {actionText}
      </button>
    </Link>
  </div>
);
