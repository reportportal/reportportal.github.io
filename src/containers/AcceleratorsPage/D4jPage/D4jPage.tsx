import React, { FC } from 'react';
import { OfferPageWrapper } from '@app/components/OfferPageWrapper';
import { ComparePlansQuery, formatComparePlans, OnPremisesPricingConfig } from '@app/utils';
import { graphql, useStaticQuery } from 'gatsby';

import { TIME_SCALE_DATA, FAQ_DATA } from './constants';

export const D4jPage: FC<OnPremisesPricingConfig> = pricing => {
  const comparePlans = formatComparePlans(
    useStaticQuery<ComparePlansQuery>(graphql`
      query {
        allContentfulComparePlan(filter: { internalTitle: { eq: "Drill4J Compare Plan" } }) {
          nodes {
            ...ComparePlanFields
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
          'is a tool to identify testing gaps and reduce time spent on regression testing. It provides a straight path to incorporate Test Gap Analysis and Test Impact Analysis into SDLC. It makes testing efforts observable, quantifiable and measurable.',
        offerType: 'Drill4J',
      }}
      page="accelerators"
      pagePath="d4j"
      timeScaleData={TIME_SCALE_DATA}
      comparePlans={comparePlans}
      faqData={FAQ_DATA}
      pricing={pricing}
      contactUsLink="/contact-us/d4j"
      utilizationDescription="Our team will provide services in support of Client's use of Drill4J plugin. Such services will vary based on Client's needs. The table below describes the different support services we customarily provide"
      faqLink="https://drill4j.github.io/docs/faq"
      isScaleShifted
    />
  );
};
