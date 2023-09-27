import React from 'react';
import noop from 'lodash/noop';
import cx from 'classnames';

import { TrustedOrganizations } from '../../TrustedOrganizations';
import { createBemBlockBuilder } from '../../../utils';
import { PricingHero } from '../PricingHero';
import { PricingCards } from '../PricingCards';
import { ComparePlans } from '../ComparePlans';
import { Faq } from '../../Faq';
import { faqItems } from './faqData';
import { offersData } from './offersData';
import { Banner } from '../../Banner';
import { usePricingHeroProps } from '../usePricingHeroProps';
import { dataPlans, columns, buttonsData } from './dataPlans';

import '../../OfferPageWrapper/OfferPageWrapper.scss';

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
      <PricingCards discountState={discountState} offersData={offersData} />
      <ComparePlans dataPlans={dataPlans} columns={columns} footerButtons={buttonsData} />
      <div className={cx(getBlocksWith('__trustedOrganizationsContainer'), 'container')}>
        <TrustedOrganizations />
      </div>
      <div className={getBlocksWith('__faqContainer')}>
        <Faq items={faqItems} />
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
