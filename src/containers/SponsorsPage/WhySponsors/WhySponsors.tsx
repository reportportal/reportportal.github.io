import React, { FC } from 'react';
import { WhyInstanceBlocks } from '@app/components/WhyInstanceBlocks';
import { useAnimationEnabledForSiblingRoutes } from '@app/hooks/useAnimationEnabledForSiblingRoutes';

import { SPONSORS_INFO } from './constants';

import './WhySponsors.scss';

interface WhySponsorsProps {
  sponsorshipType: keyof typeof SPONSORS_INFO;
}

export const WhySponsors: FC<WhySponsorsProps> = ({ sponsorshipType }) => {
  const isAnimationEnabled = useAnimationEnabledForSiblingRoutes();

  return (
    <div className="why-sponsors">
      <WhyInstanceBlocks
        title="Why sponsor ReportPortal?"
        explanations={SPONSORS_INFO[sponsorshipType]}
        withAnimation={isAnimationEnabled}
      />
    </div>
  );
};
