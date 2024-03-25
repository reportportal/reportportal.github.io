import React, { FC } from 'react';
import { WhyInstanceBlocks } from '@app/components/WhyInstanceBlocks';

import { SPONSORS_INFO } from './constants';

import './WhySponsors.scss';

interface WhySponsorsProps {
  sponsorKind: string;
}

export const WhySponsors: FC<WhySponsorsProps> = ({ sponsorKind }) => (
  <div className="why-sponsors">
    <WhyInstanceBlocks
      title="Why sponsor ReportPortal?"
      explanations={SPONSORS_INFO[sponsorKind]}
    />
  </div>
);
