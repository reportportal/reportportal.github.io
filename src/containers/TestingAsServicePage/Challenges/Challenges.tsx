import React, { FC } from 'react';
import { Heading } from '@app/components';

import { CHALLENGES } from './constants';

import './Challenges.scss';

export const Challenges: FC = () => (
  <div className="challenges">
    <div className="challenges__wrapper container">
      <Heading title="Challenges that Testing as a Service might help to solve" />
      <div className="challenges__block">
        {CHALLENGES.map(challenge => (
          <div key={challenge} className="challenges__block-item">
            {challenge}
          </div>
        ))}
      </div>
    </div>
  </div>
);
