import React, { FC } from 'react';
import { createBemBlockBuilder } from '@app/utils';

import './SubscriptionFormCard.scss';

interface SubscriptionFormCardProps {
  title: string;
  subtitle: string;
}

const getBlocksWith = createBemBlockBuilder(['subscription-form-card']);

export const SubscriptionFormCard: FC<SubscriptionFormCardProps> = ({ title, subtitle }) => (
  <div className={getBlocksWith()}>
    <span className={getBlocksWith('__title')}>{title}</span>
    <span className={getBlocksWith('__subtitle')}>{subtitle}</span>
  </div>
);
