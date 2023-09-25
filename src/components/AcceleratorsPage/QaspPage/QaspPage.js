import React from 'react';

import { OfferPageWrapper } from '../../OfferPageWrapper';
import { timeScaleData } from './timeScaleData';
import { faqData } from '../D4jPage/faqData';

export const QaspPage = () => (
  <OfferPageWrapper
    hero={{
      title: 'Explore pricing packages for our accelerators',
      description:
        'is a Jira plugin with an easy-to-use interface which specializes on QA activities, making testing as a seamless part of your Jira-based workflow.',
      offerType: 'QaSpace',
    }}
    page="accelerators"
    pagePath="qasp"
    timeScaleData={timeScaleData}
    contactUsLink="/contact-us/qasp"
    faqData={faqData}
    utilizationDescription="Our team will provide services in support of Client's use of QaSpace plugin. Such services will vary based on Client's needs. The table below describes the different support services we customarily provide."
  />
);
