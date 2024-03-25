import React, { FC } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder, OnPremisesPricingConfig } from '@app/utils';
import { usePricingHeroProps } from '@app/hooks/usePricingHeroProps';
import { FooterContent } from '@app/components/Layout';
import { TrustedOrganizations } from '@app/components/TrustedOrganizations';
import { Banner } from '@app/components/Banner';
import { Link } from '@app/components/Link';
import { PricingHero } from '@app/components/PricingHero';
import { ComparePlans } from '@app/components/ComparePlans';
import { Faq } from '@app/components/Faq';
import InfoIcon from '@app/svg/infoIcon.inline.svg';

import { TimeScale } from './TimeScale';
import { PentagonCard } from './PentagonCard';
import { COLUMNS, MOBILE_COLUMNS, OFFER_HOURS } from './constants';
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
  pricing: OnPremisesPricingConfig;
  utilizationDescription: string;
  faqLink?: string;
  isScaleShifted?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['offer-page-wrapper']);

export const OfferPageWrapper: FC<OfferPageWrapperProps> = ({
  hero,
  page,
  pagePath,
  timeScaleData,
  faqData,
  contactUsLink,
  utilizationDescription,
  faqLink,
  isScaleShifted = false,
  pricing,
}) => {
  const { buttons, isDiscount, toggleDiscount } = usePricingHeroProps(page);
  const { title, subtitle, description, offerType } = hero;

  return (
    <>
      <PricingHero
        title={title}
        subtitle={subtitle}
        buttons={buttons}
        activeButton={offerType}
        offerType={offerType}
        description={description}
        switcherProps={{
          isDiscount,
          toggleDiscount,
          messageInactive: 'Quarterly',
          messageActive: 'Yearly (Save 5%)',
        }}
      />
      <div className={getBlocksWith('__pentagons')}>
        {getOfferLinks(pagePath).map((href, index) => {
          const hours = OFFER_HOURS[index];
          const discount = isDiscount ? 'yearly' : 'quarterly';
          const contactUsURL =
            pagePath !== 'on-premises' || !OFFER_HOURS[index] ? href : `${href}/${discount}`;

          return (
            <PentagonCard
              key={hours}
              pricing={pricing}
              hours={hours}
              discount={discount}
              progressNumber={index + 1}
              contactLink={contactUsURL}
            />
          );
        })}
      </div>
      <div className={getBlocksWith('__utilization')}>
        <h2>Indicative Professional Service Point utilization</h2>
        <div className={getBlocksWith('__utilization-subtitle')}>{utilizationDescription}</div>
        <TimeScale data={timeScaleData} isShifted={isScaleShifted} />
        <div className={getBlocksWith('__subscription-info')}>
          <InfoIcon />
          <div>
            Subscription plan Professional Service Points are accumulated monthly and last depending
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
    </>
  );
};
