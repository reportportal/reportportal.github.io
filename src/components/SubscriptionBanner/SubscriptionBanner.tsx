import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import { SubscriptionForm } from '../SubscriptionForm';
import { Banner } from '../Banner';

import './SubscriptionBanner.scss';

const getBlocksWith = createBemBlockBuilder(['subscription-banner']);

export const SubscriptionBanner: FC = () => {
  const [subscriptionFormState, setSubscriptionFormState] = useState({
    isSubmitted: false,
    isAlreadySubscribed: false,
  });

  return (
    <div className={classNames(getBlocksWith(), 'temporary-hide')}>
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
