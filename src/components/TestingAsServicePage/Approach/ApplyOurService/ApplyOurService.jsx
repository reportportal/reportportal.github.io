import React from 'react';

import { Heading } from '../../../Heading';

import './ApplyOurService.scss';

export const ApplyOurService = () => (
  <div className="apply-our-service">
    <div className="apply-our-service__heading">
      <Heading color="white-heading" title="Apply for our service?" />
      <button className="btn btn--primary btn--large">Get a quote</button>
    </div>
  </div>
);
