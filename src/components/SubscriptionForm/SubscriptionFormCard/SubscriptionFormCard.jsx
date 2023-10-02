import React from 'react';

import { createBemBlockBuilder } from '@utils';

import './SubscriptionFormCard.scss';

const getBlocksWith = createBemBlockBuilder(['subscription-form-card']);

export const SubscriptionFormCard = ({ title, subtitle }) => (
  <div className={getBlocksWith()}>
    <span className={getBlocksWith('__title')}>{title}</span>
    <span className={getBlocksWith('__subtitle')}>{subtitle}</span>
  </div>
);
