import React, { FC } from 'react';
import { TitleBlock } from '@app/components/TitleBlock';
import { PricingCard } from '@app/components/PricingCard';
import { createBemBlockBuilder } from '@app/utils';

import { SPONSORSHIP_INFO } from './constants';

import './SponsorshipTiers.scss';

interface SponsorshipTiersProps {
  sponsorshipType: keyof typeof SPONSORSHIP_INFO;
}

const getBlocksWith = createBemBlockBuilder(['sponsorship-tiers']);

export const SponsorshipTiers: FC<SponsorshipTiersProps> = ({ sponsorshipType }) => (
  <div id="sponsorship-tiers" className={getBlocksWith()}>
    <TitleBlock
      title="Sponsorship tiers"
      subtitle="Choose your level of sponsorship using GitHub and gain access to exclusive benefits "
    />
    <div className={getBlocksWith('__card-wrapper')}>
      {SPONSORSHIP_INFO[sponsorshipType].map(({ key, ...info }) => (
        <PricingCard key={key} {...info} discount="yearly" />
      ))}
    </div>
  </div>
);
