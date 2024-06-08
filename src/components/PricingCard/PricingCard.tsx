import React, { FC } from 'react';
import classNames from 'classnames';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from '@app/components/Link';
import {
  createBemBlockBuilder,
  Discount,
  formatNumberWithCommas,
  isAbsoluteURL,
  formatTextFromContentfulWithLineBreaks,
  OfferingPlanDto,
} from '@app/utils';
import ArrowIcon from '@app/svg/arrow.inline.svg';

import './PricingCard.scss';

interface PricingCardProps {
  plan: OfferingPlanDto;
  discount: Discount;
  listItems?: string[];
  dataGtm?: string;
  isDiamond?: boolean;
  isFullWidth?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['pricing-card']);

export const PricingCard: FC<PricingCardProps> = ({
  plan,
  listItems,
  discount,
  isDiamond,
  isFullWidth,
  dataGtm,
}) => {
  const href = plan.cta.link.url;

  return (
    <div className={classNames(getBlocksWith(), { [getBlocksWith('--full-width')]: isFullWidth })}>
      <div>
        {plan.isPopular && <div className={getBlocksWith('__popular')}>Most popular</div>}
        {isDiamond && <div className={getBlocksWith('__diamond')} />}
        <div className={getBlocksWith('__title')}>{plan.title}</div>
        {plan.description && (
          <div className={getBlocksWith('__description')}>
            {formatTextFromContentfulWithLineBreaks(plan.description)}
          </div>
        )}
        {listItems && (
          <ul>
            {listItems.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {plan.features && renderRichText(plan.features)}
      </div>
      <div className={getBlocksWith('__bottom-panel')}>
        <div className={getBlocksWith('__price')}>
          {plan.pricingInfo ? (
            <span className={getBlocksWith('__price-value')}>{plan.pricingInfo}</span>
          ) : (
            <>
              <span className={getBlocksWith('__price-value')}>
                {plan.price?.currency} {formatNumberWithCommas(plan.price?.[discount] as number)}
                {isDiamond && '+'}
              </span>
              / {plan.price?.period}
            </>
          )}
        </div>
        <Link
          className={classNames('btn', `btn--${plan.cta.type}`, 'btn--large')}
          to={`${isAbsoluteURL(href) ? `${href}` : `${href}/${discount}`}`}
          {...(dataGtm && { 'data-gtm': dataGtm })}
        >
          {plan.cta.link.title}
          {isAbsoluteURL(href) && <ArrowIcon />}
        </Link>
      </div>
    </div>
  );
};
