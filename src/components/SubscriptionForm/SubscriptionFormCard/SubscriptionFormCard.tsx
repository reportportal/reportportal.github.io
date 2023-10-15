import React from 'react';

import { createBemBlockBuilder } from '../../../utils';

import './SubscriptionFormCard.scss';

interface Props {
  title: string
  subtitle: string
}

const getBlocksWith = createBemBlockBuilder(['subscription-form-card']);

export const SubscriptionFormCard: React.FC<Props> = ({ title, subtitle }) => (
  <div className={getBlocksWith()}>
    <span className={getBlocksWith('__title')}>{title}</span>
    <span className={getBlocksWith('__subtitle')}>{subtitle}</span>
  </div>
);
