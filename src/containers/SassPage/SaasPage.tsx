import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';
import { TrustedOrganizations } from '@app/components/TrustedOrganizations';
import { ComparePlans } from '@app/components/ComparePlans';
import { Faq } from '@app/components/Faq';
import { Banner } from '@app/components/Banner';
import { PricingHero } from '@app/components/PricingHero';
import { FooterContent } from '@app/components/Layout';
import { usePricingHeroProps } from '@app/hooks/usePricingHeroProps';
import { OfferingPlansQuery, createBemBlockBuilder, formatOfferingPlans } from '@app/utils';

import { PricingCards } from './PricingCards';
import { FAQ_ITEMS } from './constants';

import '@app/components/OfferPageWrapper/OfferPageWrapper.scss';

const getBlocksWith = createBemBlockBuilder(['offer-page-wrapper']);

export const SaasPage: FC = () => {
  const { buttons, isDiscount, toggleDiscount } = usePricingHeroProps('pricing');
  const { plans, comparePlans } = formatOfferingPlans(
    useStaticQuery<OfferingPlansQuery>(graphql`
      query {
        allContentfulComparePlan(filter: { internalTitle: { eq: "SasS Compare Plan" } }) {
          nodes {
            ...ComparePlanFields
          }
        }
        allContentfulSection(filter: { internalTitle: { eq: "[Offering Plan] SaaS" } }) {
          nodes {
            ...OfferingPlansFields
          }
        }
      }
    `),
  );

  return (
    <>
      <PricingHero
        title="ReportPortal services pricing"
        subtitle="Flexible options for small teams to global enterprises"
        buttons={buttons}
        activeButton="SaaS"
        offerType="SaaS"
        description="An instance of ReportPortal application is hosted for you. ReportPortal team takes care
          about infrastructure, availability, backups, monitoring and version updates and provides
          support by request."
        switcherProps={{
          toggleDiscount,
          isDiscount,
          messageInactive: 'Quarterly',
          messageActive: 'Yearly (Save 5%)',
        }}
      />
      <PricingCards plans={plans} isDiscount={isDiscount} />
      <ComparePlans plans={comparePlans} />
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
    </>
  );
};
