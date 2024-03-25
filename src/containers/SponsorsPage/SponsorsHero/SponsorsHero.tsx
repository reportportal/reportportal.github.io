import React, { FC } from 'react';
import { HeroSwitching } from '@app/components/HeroSwitching';

import { PRICING_BUTTONS } from './constants';

import './SponsorsHero.scss';

export const SponsorsHero: FC = () => (
  <div className="sponsors-hero">
    <HeroSwitching
      activeButton="Business"
      buttons={PRICING_BUTTONS}
      title="Sponsorship program"
      subtitle="Support a product that powers thousands of software teams worldwide, fosters innovation and excellence in software quality"
    />
  </div>
);
