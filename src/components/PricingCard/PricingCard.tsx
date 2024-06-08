import React, { FC } from 'react';
import classNames from 'classnames';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { Link } from '@app/components/Link';
import {
  createBemBlockBuilder,
  Discount,
  formatNumberWithCommas,
  isAbsoluteURL,
  formatTextFromContentfulWithLineBreaks,
} from '@app/utils';
import ArrowIcon from '@app/svg/arrow.inline.svg';

import './PricingCard.scss';

interface PricingCardProps {
  title: string;
  currency: string;
  period: string;
  actionVariant: string;
  actionText: string;
  href: string;
  discount: Discount;
  pricingInfo?: string;
  priceValue?: number;
  listItems?: string[];
  features?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  description?: string;
  dataGtm?: string;
  isPopular?: boolean;
  isDiamond?: boolean;
  isFullWidth?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['pricing-card']);

export const PricingCard: FC<PricingCardProps> = ({
  isPopular,
  title,
  description,
  listItems,
  features,
  priceValue,
  currency,
  discount,
  period,
  href,
  pricingInfo,
  actionVariant,
  actionText,
  isDiamond,
  isFullWidth,
  dataGtm,
}) => (
  <div className={classNames(getBlocksWith(), { [getBlocksWith('--full-width')]: isFullWidth })}>
    <div>
      {isPopular && <div className={getBlocksWith('__popular')}>Most popular</div>}
      {isDiamond && <div className={getBlocksWith('__diamond')} />}
      <div className={getBlocksWith('__title')}>{title}</div>
      {description && (
        <div className={getBlocksWith('__description')}>
          {formatTextFromContentfulWithLineBreaks(description)}
        </div>
      )}
      {listItems && (
        <ul>
          {listItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {features && renderRichText(features)}
    </div>
    <div className={getBlocksWith('__bottom-panel')}>
      <div className={getBlocksWith('__price')}>
        {pricingInfo ? (
          <span className={getBlocksWith('__price-value')}>{pricingInfo}</span>
        ) : (
          <>
            <span className={getBlocksWith('__price-value')}>
              {currency} {formatNumberWithCommas(priceValue as number)}
              {isDiamond && '+'}
            </span>
            / {period}
          </>
        )}
      </div>
      <Link
        className={classNames('btn', `btn--${actionVariant}`, 'btn--large')}
        to={`${isAbsoluteURL(href) ? `${href}` : `${href}/${discount}`}`}
        {...(dataGtm && { 'data-gtm': dataGtm })}
      >
        {actionText}
        {isAbsoluteURL(href) && <ArrowIcon />}
      </Link>
    </div>
  </div>
);
