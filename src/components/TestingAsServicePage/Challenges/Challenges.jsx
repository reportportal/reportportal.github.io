import React from 'react';

import { Heading } from '../../Heading';

import './Challenges.scss';

const challenges = [
  'Many defects from Production',
  'Automation debt exists on the project',
  'Big regression testing phase happens periodically',
  'No quick feedback from UAT phase',
  'Client request to cut costs',
  'Specialized testing required from time to time',
];

export const Challenges = () => (
  <div className="challenges">
    <div className="challenges__wrapper container">
      <Heading title="Challenges that Testing as a Service might help to solve" />
      <div className="challenges__block">
        {challenges.map(challenge => (
          <div key={challenge} className="challenges__block-item">
            {challenge}
          </div>
        ))}
      </div>
    </div>
  </div>
);
