import React, { FC } from 'react';
import { OfferPageWrapper } from '@app/components/OfferPageWrapper';
import { OnPremisesPricingConfig } from '@app/utils';

import { FAQ_DATA } from '../D4jPage/constants';
import { TIME_SCALE_DATA } from './constants';

export const QaspPage: FC<OnPremisesPricingConfig> = pricing => (
  <OfferPageWrapper
    hero={{
      title: 'Explore pricing packages for our accelerators',
      description:
        'is a Jira plugin with an easy-to-use interface which specializes on QA activities, making testing as a seamless part of your Jira-based workflow.',
      offerType: 'QaSpace',
    }}
    page="accelerators"
    pagePath="qasp"
    timeScaleData={TIME_SCALE_DATA}
    contactUsLink="/contact-us/qasp"
    faqData={FAQ_DATA}
    pricing={pricing}
    utilizationDescription="Our team will provide services in support of Client's use of QaSpace plugin. Such services will vary based on Client's needs. The table below describes the different support services we customarily provide."
  />
);
