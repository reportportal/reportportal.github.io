import React from 'react';
import { noop } from 'lodash';

import { usePricingHeroProps } from '../usePricingHeroProps';
import { createBemBlockBuilder } from '../../../utils';
import { PricingHero } from '../PricingHero';
import { PricingCards } from '../PricingCards';
import { ComparePlans } from '../ComparePlans';
import { TrustedOrganizations } from '../TrustedOrganizations';
import { Faq } from '../../Faq';
import { faqItems } from './faqData';
import { pricingData } from './pricingData';
import { Banner } from '../../Banner';

import './SaasPage.scss';

const getBlocksWith = createBemBlockBuilder(['pricingPage']);

export const SaasPage = () => {
  const { buttons, discountState, toggleDiscountState } = usePricingHeroProps();

  return (
    <div>
      <PricingHero
        buttons={buttons}
        activeButton="SaaS"
        switchActiveBtn={noop}
        switchDiscount={toggleDiscountState}
        discountState={discountState}
      />
      <PricingCards discountState={discountState} pricingData={pricingData} />
      <ComparePlans />
      <TrustedOrganizations />
      <div className={getBlocksWith('__faqContainer')}>
        <Faq items={faqItems} />
      </div>
      <div className={getBlocksWith('__stillHaveQuestion')}>
        <Banner
          title="Do you still have questions?"
          linkTitle="Contact Us"
          link="/contact-us/general"
        />
      </div>
    </div>
  );
};
