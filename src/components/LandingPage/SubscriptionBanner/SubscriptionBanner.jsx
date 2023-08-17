import React, { useState } from 'react';

import { createBemBlockBuilder } from '../../../utils';
import { SubscriptionForm } from '../../SubscriptionForm';
import { Banner } from '../../Banner';

import './SubscriptionBanner.scss';

const getBlocksWith = createBemBlockBuilder(['subscription-banner']);

export const SubscriptionBanner = () => {
  const [subscriptionFormState, setSubscriptionFormState] = useState({
    isSubmitted: false,
    isAlreadySubscribed: false,
  });

  return (
    <div className={getBlocksWith()}>
      <Banner
        title="Stay in the know"
        subtitle="Get the latest ReportPortal news, product updates and articles via email"
      >
        <SubscriptionForm
          subscriptionFormState={subscriptionFormState}
          setSubscriptionFormState={setSubscriptionFormState}
        />
      </Banner>
    </div>
  );
};
