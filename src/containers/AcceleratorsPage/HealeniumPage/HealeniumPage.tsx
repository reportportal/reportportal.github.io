import React, { FC } from 'react';
import { OfferPageWrapper } from '@app/components/OfferPageWrapper';
import { formatOfferingPlans, OfferingPlansQuery, OnPremisesPricingConfig } from '@app/utils';
import { graphql, useStaticQuery } from 'gatsby';

import { TIME_SCALE_DATA, FAQ_DATA } from './constants';

export const HealeniumPage: FC<OnPremisesPricingConfig> = pricing => {
  const { plans, comparePlans } = formatOfferingPlans(
    useStaticQuery<OfferingPlansQuery>(graphql`
      query {
        allContentfulComparePlan(filter: { internalTitle: { eq: "Healenium Compare Plan" } }) {
          nodes {
            ...ComparePlanFields
          }
        }
        allContentfulSection(filter: { internalTitle: { eq: "[Offering Plan] Healenium" } }) {
          nodes {
            ...OfferingPlansFields
          }
        }
      }
    `),
  );

  return (
    <OfferPageWrapper
      hero={{
        title: 'Explore pricing packages for our accelerators',
        description:
          'is a language agnostic proxy solution which enables self-healing capabilities by means of ML for selenium-based test cases aimed at minimization of UI fluctuations',
        offerType: 'Healenium',
      }}
      page="accelerators"
      pagePath="hlm"
      timeScaleData={TIME_SCALE_DATA}
      offeringPlans={plans}
      comparePlans={comparePlans}
      faqData={FAQ_DATA}
      pricing={pricing}
      contactUsLink="/contact-us/hlm"
      utilizationDescription="Our team will provide services in support of Client's use of Healenium plugin. Such services will vary based on Client's needs. The table below describes the different support services we customarily provide"
      faqLink="https://healenium.io/#rec639241711"
      isScaleShifted
    />
  );
};
