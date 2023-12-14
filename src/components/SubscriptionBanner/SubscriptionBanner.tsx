import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { FooterContent, SubscriptionForm, Banner } from '@app/components';
import { createBemBlockBuilder } from '@app/utils';

import './SubscriptionBanner.scss';

const getBlocksWith = createBemBlockBuilder(['subscription-banner']);

export const SubscriptionBanner: FC = () => {
  const [subscriptionFormState, setSubscriptionFormState] = useState({
    isSubmitted: false,
    isAlreadySubscribed: false,
  });

  // temporary hidden
  return null;

  return (
    <FooterContent>
      <div className={classNames(getBlocksWith())}>
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
    </FooterContent>
  );
};
