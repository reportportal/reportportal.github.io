import React, { FC, useState } from 'react';
import { FooterContent } from '@app/components/Layout';
import { SubscriptionForm } from '@app/components/SubscriptionForm';
import { Banner } from '@app/components/Banner';
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
    </FooterContent>
  );
};
