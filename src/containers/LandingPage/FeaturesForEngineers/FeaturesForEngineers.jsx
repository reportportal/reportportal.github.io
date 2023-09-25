import React from 'react';

import { AnimatedList } from '@components/AnimatedList';
import { Link } from '@components/Link';

import { FEATURES_FOR_ENGINEERS_LIST } from './constants';

export const FeaturesForEngineers = () => {
  return (
    <AnimatedList
      title="Features for engineers"
      subtitle="Reducing team efforts. Bringing more value"
      listDesktopPosition="right"
      data={FEATURES_FOR_ENGINEERS_LIST}
    >
      <Link className="btn btn--primary btn--large" to="/features">
        Expand All Features
      </Link>
    </AnimatedList>
  );
};
