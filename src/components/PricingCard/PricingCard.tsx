import React, { FC } from 'react';
import classNames from 'classnames';
import { Tooltip } from 'antd';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';
import { Link } from '@app/components/Link';
import {
  createBemBlockBuilder,
  PlanType,
  formatNumberWithCommas,
  isAbsoluteURL,
  formatTextFromContentfulTextFieldWithLineBreaks,
  OfferingPlanDto,
} from '@app/utils';
import ArrowIcon from '@app/svg/arrow.inline.svg';
import DealIcon from '@app/svg/deal.inline.svg';
import ToolIcon from '@app/svg/tool.inline.svg';
import StarIcon from '@app/svg/star.inline.svg';
import HeadphonesIcon from '@app/svg/headphones.inline.svg';
import InfoIcon from '@app/svg/infoIcon.inline.svg';

import './PricingCard.scss';

interface PricingCardProps {
  plan: OfferingPlanDto;
  planType: PlanType;
  listItems?: string[];
  dataGtm?: string;
  isDiamond?: boolean;
  isFullWidth?: boolean;
  isTotalYearPriceShown?: boolean;
}

const knownIcons = {
  deal: <DealIcon />,
  tool: <ToolIcon />,
  star: <StarIcon />,
  headphones: <HeadphonesIcon />,
};

const getBlocksWith = createBemBlockBuilder(['pricing-card']);

const parseFeaturesListItem = (text: string) => {
  const iconRegex = /\[icon:(\w+)]/;
  const iconMatch = text.match(iconRegex);
  const icon = iconMatch ? iconMatch[1] : null;
  const content = text.replace(iconRegex, '').trim();

  return { icon, content };
};

export const PricingCard: FC<PricingCardProps> = ({
  plan,
  listItems,
  planType,
  isFullWidth,
  dataGtm,
  isDiamond = false,
  isTotalYearPriceShown = false,
}) => {
  const href = plan.cta.link.url;
  const priceDescription = plan.price?.[`${planType}Description`]?.replace(
    '{{currency}}',
    plan.price.currency,
  );
  const currency = plan.price?.currency;
  const price = plan.price?.[planType] as number;

  return (
    <div className={classNames(getBlocksWith(), { [getBlocksWith('--full-width')]: isFullWidth })}>
      <div>
        {plan.isPopular && <div className={getBlocksWith('__popular')}>Most popular</div>}
        {isDiamond && <div className={getBlocksWith('__diamond')} />}
        {plan.title && <div className={getBlocksWith('__title')}>{plan.title}</div>}
        {plan.description && (
          <div className={getBlocksWith('__description')}>
            {formatTextFromContentfulTextFieldWithLineBreaks(plan.description)}
          </div>
        )}
        {listItems && (
          <ul>
            {listItems.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {plan.features && (
          <div className={getBlocksWith('__features')}>
            {renderRichText(plan.features, {
              renderNode: {
                // eslint-disable-next-line react/no-multi-comp
                [BLOCKS.LIST_ITEM]: (node, children) => {
                  const { icon, content } = parseFeaturesListItem(
                    children?.[0]?.props?.children?.[0],
                  );
                  const iconElement = knownIcons[icon as string];

                  if (Array.isArray(children) && iconElement) {
                    return (
                      <li className="with-icon">
                        {iconElement}
                        {content}
                      </li>
                    );
                  }

                  return <li>{children}</li>;
                },
              },
            })}
          </div>
        )}
      </div>
      <div className={getBlocksWith('__bottom-panel')}>
        <div className={getBlocksWith('__price')}>
          {plan.pricingInfo ? (
            <span className={getBlocksWith('__price-value')}>{plan.pricingInfo}</span>
          ) : (
            <>
              <span className={getBlocksWith('__price-value')}>
                {currency}
                {formatNumberWithCommas(price)}
                {isDiamond && '+'}
              </span>
              per {plan.price?.period}
            </>
          )}
          {
            <div className={getBlocksWith('__price-description')}>
              {priceDescription}
              {isTotalYearPriceShown && (
                <>
                  {' '}
                  <Tooltip
                    overlayClassName="price-description-tooltip"
                    placement="top"
                    title={`${currency}${formatNumberWithCommas(
                      Math.floor((price * 12) / 1000) * 1000,
                    )} per year`}
                  >
                    <InfoIcon width={17} height={17} />
                  </Tooltip>
                </>
              )}
            </div>
          }
        </div>
        <Link
          className={classNames('btn', `btn--${plan.cta.type}`, 'btn--large')}
          to={plan.isContactUsURLEndsWithPlanType ? `${href}/${planType}` : href}
          {...(dataGtm && { 'data-gtm': dataGtm })}
        >
          {plan.cta.link.title}
          {isAbsoluteURL(href) && <ArrowIcon />}
        </Link>
      </div>
    </div>
  );
};
