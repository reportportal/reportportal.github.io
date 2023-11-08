import React, { FC } from 'react';
import { Link, AnimatedList } from '@app/components';

import { FEATURES_FOR_ENGINEERS_LIST } from './constants';

export const FeaturesForEngineers: FC = () => (
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
