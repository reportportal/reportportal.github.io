import React from 'react';
import { Heading } from '../../Heading';

import './Challenges.scss';

export const Challenges = () => (
  <div className="challenges">
    <div className="challenges__wrapper container">
      <Heading title="Challenges that Testing as a Service might help to solve" />
      <div className="challenges__block">
        <div className="challenges__block-item">Many defects from Production</div>
        <div className="challenges__block-item">Automation debt exists on the project</div>
        <div className="challenges__block-item">
          Big regression testing phase happens periodically
        </div>
        <div className="challenges__block-item">No quick feedback from UAT phase</div>
        <div className="challenges__block-item">Client request to cut costs</div>
        <div className="challenges__block-item">Specialized testing required from time to time</div>
      </div>
    </div>
  </div>
);
