import React from 'react';

import { Heading } from '../../Heading';
import { ListDropdown } from './ListDropdown';
import { EXECUTION_LIST, RAMP_UP_LIST, DISCOVERY_LIST } from './constants';
import { ApplyOurService } from './ApplyOurService';

import './Approach.scss';

export const Approach = () => (
  <div className="approach">
    <div className="container">
      <div className="approach__heading">
        <Heading title="Approach to scaling up and down" color="white-heading" />
        <div className="approach__description">
          Use TaaS when you need to quickly scale your team up or down, prepare for events like
          Black Friday, go to production, and more. If you need to change the testing scope, EPAM
          should be given a 30-day notice. This applies to all testing types, except for
          Exploratory/Crowd Testing which can be organized ad-hoc
        </div>
      </div>
      <div className="approach__phases">
        <div className="approach__months">
          <div>Month 1</div>
          <div>Month 2</div>
          <div>Month 3</div>
          <div>Month 4</div>
          <div>Month 5+</div>
        </div>
        <div className="phases">
          <div className="phase phase-first">
            <div className="phase--short phase__dropdown">
              <ListDropdown title="Discovery" list={DISCOVERY_LIST} />
            </div>
            <div className="phase__info">Implementation</div>
          </div>
          <div className="phase phase-second">
            <div className="phase--short phase__dropdown">
              <ListDropdown title="Ramp Up and Calibration" list={RAMP_UP_LIST} />
            </div>
          </div>
          <div className="phase phase-third">
            <div className="phase--long phase__dropdown">
              <ListDropdown title="Execution (Testing Service)" list={EXECUTION_LIST} />
            </div>
          </div>
          <div className="phase phase-forth">
            <div className="phase-forth__new-apps">New Apps Onboarding</div>
          </div>
        </div>
      </div>
      <ApplyOurService />
    </div>
  </div>
);
