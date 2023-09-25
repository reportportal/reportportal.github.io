import React from 'react';

import { OfferPageWrapper } from '../../OfferPageWrapper';
import { faqData } from './faqData';
import { timeScaleData } from './timeScaleData';

export const OnPremisesPage = () => (
  <OfferPageWrapper
    hero={{
      title: 'ReportPortal services pricing',
      subtitle: 'Flexible options for small teams to global enterprises',
      description:
        'ReportPortal instance deployed on-premise behind your firewall or in the Cloud. All your test data is located on your own instance and it is 100% secured.',
      offerType: 'On-Premises',
    }}
    page="pricing"
    pagePath="on-premises"
    timeScaleData={timeScaleData}
    faqData={faqData}
    contactUsLink="/contact-us/general"
    utilizationDescription=" Professional service hour is the minimum for any support request. Unless otherwise noted,
        a Professional Service Hour is equal to an hour of work or fraction thereof"
  />
);
