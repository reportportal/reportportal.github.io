import React from 'react';

import { createBemBlockBuilder } from '../../../utils';
import { SubscriptionForm } from '../../SubscriptionForm';
import { Banner } from '../../Banner';

import './SubscriptionBanner.scss';

const getBlocksWith = createBemBlockBuilder(['subscription-banner']);

export const SubscriptionBanner = () => (
  <div className={getBlocksWith()}>
    <Banner
      title="Stay in the know"
      subtitle="Get the latest ReportPortal news, product updates and articles via email"
    >
      <SubscriptionForm />
    </Banner>
  </div>
);
