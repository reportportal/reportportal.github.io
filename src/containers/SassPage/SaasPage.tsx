import React from 'react';
import noop from 'lodash/noop';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@utils';
import { TrustedOrganizations } from '@components/TrustedOrganizations';
import { ComparePlans } from '@components/ComparePlans';
import { Faq } from '@components/Faq';
import { Banner } from '@components/Banner';
import { PricingHero } from '@components/PricingHero';
import { usePricingHeroProps } from '@hooks/usePricingHeroProps';

import { PricingCards } from './PricingCards';
import { BUTTONS_DATA, COLUMNS, DATA_PLANS, FAQ_ITEMS, OFFERS_DATA } from './constants';

import '@components/OfferPageWrapper/OfferPageWrapper.scss';

const getBlocksWith = createBemBlockBuilder(['offer-page-wrapper']);

export const SaasPage = () => {
  const { buttons, discountState, toggleDiscountState } = usePricingHeroProps('pricing');

  return (
    <div>
      <PricingHero
        title="ReportPortal services pricing"
        subtitle="Flexible options for small teams to global enterprises"
        buttons={buttons}
        activeButton="SaaS"
        offerType="SaaS"
        description="An instance of ReportPortal application is hosted for you. ReportPortal team takes care
          about infrastructure, availability, backups, monitoring and version updates and provides
          support by request."
        switchActiveBtn={noop}
        switchDiscount={toggleDiscountState}
        discountState={discountState}
      />
      <PricingCards discountState={discountState} offersData={OFFERS_DATA} />
      <ComparePlans dataPlans={DATA_PLANS} columns={COLUMNS} footerButtons={BUTTONS_DATA} />
      <div className={classNames(getBlocksWith('__trustedOrganizationsContainer'), 'container')}>
        <TrustedOrganizations />
      </div>
      <div className={getBlocksWith('__faqContainer')}>
        <Faq items={FAQ_ITEMS} />
      </div>
      <div className={getBlocksWith('__stillHaveQuestion')}>
        <Banner
          title="Do you still have questions?"
          linkTitle="Contact us"
          link="/contact-us/general"
        />
      </div>
    </div>
  );
};
