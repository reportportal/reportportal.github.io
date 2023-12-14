import React from 'react';
import noop from 'lodash/noop';
import classNames from 'classnames';
import { createBemBlockBuilder, SAAS_OFFERS_DATA } from '@app/utils';
import {
  TrustedOrganizations,
  ComparePlans,
  Faq,
  Banner,
  PricingHero,
  FooterContent,
} from '@app/components';
import { usePricingHeroProps } from '@app/hooks';
import InfoIcon from '@app/svg/infoIcon.inline.svg';

import { PricingCards } from './PricingCards';
import { BUTTONS_DATA, COLUMNS, DATA_PLANS, FAQ_ITEMS } from './constants';

import '@app/components/OfferPageWrapper/OfferPageWrapper.scss';

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
        switcherProps={{
          switchDiscount: toggleDiscountState,
          discountState,
          messageInactive: 'Quarterly (-10%)',
          messageActive: 'Annually (-15%)',
        }}
      />
      <PricingCards discountState={discountState} offersData={SAAS_OFFERS_DATA} />
      <div className={classNames('container', getBlocksWith('__offer-message'))}>
        <InfoIcon /> The offer remains valid if the contract is signed by December, 15
      </div>
      <ComparePlans dataPlans={DATA_PLANS} columns={COLUMNS} footerButtons={BUTTONS_DATA} />
      <div className={classNames(getBlocksWith('__trusted-organizations-container'), 'container')}>
        <TrustedOrganizations />
      </div>
      <div className={getBlocksWith('__faq-container')}>
        <Faq items={FAQ_ITEMS} />
      </div>
      <FooterContent>
        <Banner
          title="Do you still have questions?"
          linkTitle="Contact us"
          link="/contact-us/general"
        />
      </FooterContent>
    </div>
  );
};
