import React, { FC } from 'react';
import { TitleBlock } from '@app/components/TitleBlock';
import { PricingCard } from '@app/components/PricingCard';
import { createBemBlockBuilder } from '@app/utils';

import { SPONSORSHIP_INFO } from './constants';

import './SponsorshipTiers.scss';

interface SponsorshipTiersProps {
  sponsorshipType: 'business' | 'individual';
}

const getBlocksWith = createBemBlockBuilder(['sponsorship-tiers']);

export const SponsorshipTiers: FC<SponsorshipTiersProps> = ({ sponsorshipType }) => (
  <div id="sponsorship-tiers" className={getBlocksWith()}>
    <TitleBlock
      title="Sponsorship tiers"
      subtitle="Choose your level of sponsorship using GitHub and gain access to exclusive benefits "
    />
    <div className={getBlocksWith('__card-wrapper')}>
      {SPONSORSHIP_INFO[sponsorshipType].map(info => (
        <PricingCard key={info.key} {...info} />
      ))}
    </div>
  </div>
);
