import React from 'react';
import noop from 'lodash/noop';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../utils';
import { TrustedOrganizations } from '../../TrustedOrganizations';
import { usePricingHeroProps } from '../usePricingHeroProps';
import { PricingHero } from '../PricingHero';
import { PentagonCard } from '../PentagonCard';
import { offerPrices } from './offerPrices';
import { Faq } from '../../Faq';
import { Banner } from '../../Banner';
import { TimeScale } from '../TimeScale';
import { Link } from '../../Link';
import { faqData } from './faqData';
import { ComparePlans } from '../ComparePlans';
import { buttonsData, columns, dataPlans, mobileColumns } from './dataPlans';
import InfoIcon from './infoIcon.inline.svg';

import './OnPremises.scss';
import '../PricingPage.scss';

const getBlocksWith = createBemBlockBuilder(['on-premises']);
const getBlocksWithPricing = createBemBlockBuilder(['pricing-page']);

export const OnPremisesPage = () => {
  const { buttons, discountState, toggleDiscountState } = usePricingHeroProps();

  return (
    <div>
      <PricingHero
        buttons={buttons}
        activeButton="On-Premises"
        offerType="On-Premises"
        description="ReportPortal instance deployed on-premise behind your firewall or in the Cloud. All your test data is located on your own instance and it is 100% secured."
        switchActiveBtn={noop}
        switchDiscount={toggleDiscountState}
        discountState={discountState}
      />
      <div className={getBlocksWith('__pentagons')}>
        {offerPrices.map((offer, index) => (
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
        <div className={getBlocksWith('__utilization-subtitle')}>
          Professional service hour is the minimum for any support request. Unless otherwise noted,
          a Professional Service Hour is equal to an hour of work or fraction thereof
        </div>
        <TimeScale />
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
        dataPlans={dataPlans}
        columns={columns}
        footerButtons={buttonsData}
        isCollapsibleOnMobile={false}
        mobileColumns={mobileColumns}
      />
      <div className={cx(getBlocksWithPricing('__trustedOrganizationsContainer'), 'container')}>
        <TrustedOrganizations />
      </div>
      <div className={getBlocksWith('__faqContainer')}>
        <Faq items={faqData} titleId="faq" />
      </div>
      <div className={getBlocksWithPricing('__stillHaveQuestion')}>
        <Banner
          title="Do you still have questions?"
          linkTitle="Contact us"
          link="/contact-us/general"
        />
      </div>
    </div>
  );
};
