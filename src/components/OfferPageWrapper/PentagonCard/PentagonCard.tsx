import React, { FC } from 'react';
import classNames from 'classnames';
import { IconBlock } from '@app/components/IconBlock';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder, formatNumberWithCommas, OfferingPlanDto } from '@app/utils';

import './PentagonCard.scss';

interface PentagonCardProps {
  plan: OfferingPlanDto;
  progressNumber: number;
  contactLink: string;
  pricingValue: number;
}

const getBlocksWith = createBemBlockBuilder(['pentagon-card']);

export const PentagonCard: FC<PentagonCardProps> = ({
  plan,
  contactLink,
  progressNumber,
  pricingValue,
}) => (
  <div className={getBlocksWith('__wrapper')}>
    <IconBlock
      title={plan.title}
      description={plan.description}
      type="pentagon"
      progressNumber={progressNumber}
    />
    <div className={getBlocksWith('__price')}>
      {plan.pricingInfo ?? (
        <>
          {plan.price?.currency}
          {formatNumberWithCommas(pricingValue)} <span>/ {plan.price?.period}</span>
        </>
      )}
    </div>
    <Link to={contactLink}>
      <button
        type="button"
        className={classNames(
          getBlocksWith('__contact-button'),
          'btn',
          `btn--${plan.cta.type}`,
          'btn--large',
        )}
      >
        {plan.cta.link.title}
      </button>
    </Link>
  </div>
);
