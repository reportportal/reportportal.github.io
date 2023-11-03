import React, { FC } from 'react';
import { OfferPageWrapper } from '@app/components/OfferPageWrapper';

import { FAQ_DATA, TIME_SCALE_DATA } from './constants';

export const OnPremisesPage: FC = () => (
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
    timeScaleData={TIME_SCALE_DATA}
    faqData={FAQ_DATA}
    contactUsLink="/contact-us/general"
    utilizationDescription=" Professional service hour is the minimum for any support request. Unless otherwise noted,
        a Professional Service Hour is equal to an hour of work or fraction thereof"
  />
);
