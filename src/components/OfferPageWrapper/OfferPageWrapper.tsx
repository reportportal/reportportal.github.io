import React, { FC } from 'react';
import noop from 'lodash/noop';
import classNames from 'classnames';
import { createBemBlockBuilder, ON_PREMISES_OFFER_PRICES } from '@app/utils';
import { usePricingHeroProps } from '@app/hooks';
import {
  FooterContent,
  TrustedOrganizations,
  Banner,
  Link,
  PentagonCard,
  PricingHero,
  ComparePlans,
  Faq,
  TimeScale,
} from '@app/components';
import InfoIcon from '@app/svg/infoIcon.inline.svg';

import { COLUMNS, MOBILE_COLUMNS } from './constants';
import { getDataPlans, getFooterButtons, getOfferLinks } from './utils';

import './OfferPageWrapper.scss';

interface OfferPageWrapperProps {
  hero: {
    title: string;
    subtitle?: string;
    description: string;
    offerType: string;
  };
  page: string;
  pagePath: 'on-premises' | 'd4j' | 'qasp' | 'hlm';
  timeScaleData: {
    time: number | string;
    items: string[] | React.ReactNode[];
  }[];
  faqData: {
    key: number;
    label: string;
    children: React.ReactNode;
  }[];
  contactUsLink: string;
  utilizationDescription: string;
  faqLink?: string;
  isScaleShifted?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['offer-page-wrapper']);

export const OfferPageWrapper: FC<OfferPageWrapperProps> = ({
  hero: { title, subtitle, description, offerType },
  page,
  pagePath,
  timeScaleData,
  faqData,
  contactUsLink,
  utilizationDescription,
  faqLink,
  isScaleShifted = false,
}) => {
  const { buttons, toggleDiscountState, discountState } = usePricingHeroProps(page);

  return (
    <div>
      <PricingHero
        title={title}
        subtitle={subtitle}
        buttons={buttons}
        activeButton={offerType}
        offerType={offerType}
        description={description}
        switchActiveBtn={noop}
        switcherProps={{
          switchDiscount: toggleDiscountState,
          discountState,
          messageInactive: 'Quarterly',
          messageActive: 'Yearly (Save 5%)',
        }}
      />
      <div className={getBlocksWith('__pentagons')}>
        {getOfferLinks(pagePath).map((href, index) => {
          const offerPrice = ON_PREMISES_OFFER_PRICES[index];
          const price = discountState ? offerPrice.discountedValue : offerPrice.value;
          const contactUsURL =
            !price || pagePath !== 'on-premises'
              ? href
              : `${href}/${discountState ? 'yearly' : 'quarterly'}`;

          return (
            <PentagonCard
              stepNumber={index + 1}
              hours={`${offerPrice.hours}`}
              discountState={discountState}
              price={price}
              contactLink={contactUsURL}
              key={offerPrice.hours}
            />
          );
        })}
      </div>
      <div className={getBlocksWith('__utilization')}>
        <h2>Indicative Professional Service Hour utilization</h2>
        <div className={getBlocksWith('__utilization-subtitle')}>{utilizationDescription}</div>
        <TimeScale data={timeScaleData} isShifted={isScaleShifted} />
        <div className={getBlocksWith('__subscription-info')}>
          <InfoIcon />
          <div>
            Subscription plan Professional Service Hours are accumulated monthly and last depending
            on the plan selected.
            <Link to="#faq">More details in FAQ</Link>
          </div>
        </div>
      </div>
      <ComparePlans
        dataPlans={getDataPlans(pagePath)}
        columns={COLUMNS}
        footerButtons={getFooterButtons(pagePath)}
        isCollapsibleOnMobile={false}
        mobileColumns={MOBILE_COLUMNS}
      />
      {page === 'pricing' && (
        <div
          className={classNames(getBlocksWith('__trusted-organizations-container'), 'container')}
        >
          <TrustedOrganizations />
        </div>
      )}
      <div className={getBlocksWith('__faq-container')}>
        <Faq
          items={faqData}
          titleId="faq"
          documentationLink={faqLink}
          showMoreInfoLink={pagePath !== 'qasp'}
        />
      </div>
      <FooterContent>
        <Banner title="Do you still have questions?" linkTitle="Contact us" link={contactUsLink} />
      </FooterContent>
    </div>
  );
};
