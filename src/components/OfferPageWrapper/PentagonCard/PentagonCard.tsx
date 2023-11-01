import React, { FC } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder, formatNumberWithCommas } from '@app/utils';

import { IconBlock } from '../../IconBlock';
import { Link } from '../../Link';

import './PentagonCard.scss';

interface Props {
  stepNumber: number;
  hours: string;
  price: number;
  contactLink: string;
  discountState: boolean;
}

const getBlocksWith = createBemBlockBuilder(['pentagon-card']);

export const PentagonCard: FC<Props> = ({
  stepNumber,
  hours,
  price,
  contactLink,
  discountState,
}) => {
  const isFirstStep = stepNumber === 1;
  const contactUsURL = !price
    ? contactLink
    : `${contactLink}/${discountState ? 'yearly' : 'quarterly'}`;

  const getPrice = () => (
    <>
      ${formatNumberWithCommas(price)} <span>/ month</span>
    </>
  );

  const getProps = () => {
    return isFirstStep
      ? { number: 'Open Source' }
      : { number: hours, text: 'Professional', benefit: 'service hours' };
  };

  return (
    <div className={getBlocksWith('__wrapper')}>
      <IconBlock type="pentagon" progressNumber={stepNumber} {...getProps()} />
      <div className={getBlocksWith('__price')}>{isFirstStep ? 'Free' : getPrice()} </div>
      <Link to={contactUsURL}>
        <button
          type="button"
          className={classNames(
            getBlocksWith('__contact-button'),
            'btn',
            `btn--${isFirstStep ? 'outline' : 'primary'}`,
            'btn--large',
          )}
        >
          {isFirstStep ? 'Start now' : 'Contact us'}
        </button>
      </Link>
    </div>
  );
};
