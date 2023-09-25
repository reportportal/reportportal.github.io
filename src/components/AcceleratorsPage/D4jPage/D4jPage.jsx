import React from 'react';

import { OfferPageWrapper } from '../../OfferPageWrapper';
import { timeScaleData } from './timeScaleData';
import { faqData } from './faqData';

export const D4jPage = () => (
  <OfferPageWrapper
    hero={{
      title: 'Explore pricing packages for our accelerators',
      description:
        'is a tool to identify testing gaps and reduce time spent on regression testing. It provides a straight path to incorporate Test Gap Analysis and Test Impact Analysis into SDLC. It makes testing efforts observable, quantifiable and measurable.',
      offerType: 'Drill4J',
    }}
    page="accelerators"
    pagePath="d4j"
    timeScaleData={timeScaleData}
    faqData={faqData}
    contactUsLink="/contact-us/d4j"
    utilizationDescription="Our team will provide services in support of Client's use of Drill4J plugin. Such services will vary based on Client's needs. The table below describes the different support services we customarily provide"
    faqLink="https://drill4j.github.io/docs/faq"
    isScaleShifted
  />
);
