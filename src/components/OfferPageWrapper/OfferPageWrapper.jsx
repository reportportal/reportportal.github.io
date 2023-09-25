import React from 'react';
import noop from 'lodash/noop';
import cx from 'classnames';

import { createBemBlockBuilder } from '@utils';
import { usePricingHeroProps } from '@hooks/usePricingHeroProps';

import { TrustedOrganizations } from '../TrustedOrganizations';
import { Faq } from '../Faq';
import { PricingHero } from '../PricingHero';
import { ComparePlans } from '../ComparePlans';
import { Banner } from '../Banner';
import { Link } from '../Link';
import { TimeScale } from './TimeScale';
import { PentagonCard } from './PentagonCard';
import { COLUMNS, MOBILE_COLUMNS } from './constants';
import InfoIcon from './icons/infoIcon.inline.svg';
import { getOfferPrices, getDataPlans, getFooterButtons } from './utils';

import './OfferPageWrapper.scss';

const getBlocksWith = createBemBlockBuilder(['offer-page-wrapper']);

export const OfferPageWrapper = ({
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
        switchDiscount={toggleDiscountState}
        discountState={discountState}
      />
      <div className={getBlocksWith('__pentagons')}>
        {getOfferPrices(pagePath).map((offer, index) => (
          <PentagonCard
            stepNumber={index + 1}
            hours={offer.hours}
            price={discountState ? offer.discountedValue : offer.value}
            contactLink={offer.href}
            key={offer.hours}
          />
        ))}
      </div>
      <div className={getBlocksWith('__utilization')}>
        <h2>Indicative professional service hour utilization</h2>
        <div className={getBlocksWith('__utilization-subtitle')}>{utilizationDescription}</div>
        <TimeScale data={timeScaleData} isShifted={isScaleShifted} />
        <div className={getBlocksWith('__subscriptionInfo')}>
          <InfoIcon />
          <div>
            Subscription plan professional service hours are accumulated monthly and last depending
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
        <div className={cx(getBlocksWith('__trustedOrganizationsContainer'), 'container')}>
          <TrustedOrganizations />
        </div>
      )}
      <div className={getBlocksWith('__faqContainer')}>
        <Faq
          items={faqData}
          titleId="faq"
          documentationLink={faqLink}
          showMoreInfoLink={!(pagePath === 'qasp')}
        />
      </div>
      <div className={getBlocksWith('__stillHaveQuestion')}>
        <Banner title="Do you still have questions?" linkTitle="Contact us" link={contactUsLink} />
      </div>
    </div>
  );
};
