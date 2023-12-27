import React, { FC } from 'react';
import { Heading } from '@app/components';

import assessmentSvg from './images/assessment.svg';
import inventorySvg from './images/inventory.svg';
import improvementSvg from './images/improvement.svg';
import { InfoBlock } from './InfoBlock';
import {
  ASSESSMENT_LIST,
  INVENTORY_LIST,
  IMPROVEMENT_LIST,
  ASSESSMENT_INFO,
  INVENTORY_INFO,
  IMPROVEMENT_INFO,
} from './constants';

import './ConsultingServices.scss';

export const ConsultingServices: FC = () => (
  <div className="consulting-services container">
    <Heading title="Our QE Consulting services" />
    <div className="consulting-services__block">
      <InfoBlock {...ASSESSMENT_INFO} list={ASSESSMENT_LIST} />
      <div className="assessment-image">
        <img src={assessmentSvg} alt="assessment info" />
      </div>
    </div>
    <div className="consulting-services__block consulting-services__block--inventory">
      <InfoBlock {...INVENTORY_INFO} list={INVENTORY_LIST} />
      <div className="inventory-image">
        <div className="inventory-image__title">
          Continuous Deployment & Delivery for 377 Projects (Sample Results)
        </div>
        <img src={inventorySvg} alt="inventory info" />
      </div>
    </div>
    <div className="consulting-services__block">
      <InfoBlock {...IMPROVEMENT_INFO} list={IMPROVEMENT_LIST} />
      <div className="improvement-image">
        <img src={improvementSvg} alt="improvement info" />
      </div>
    </div>
  </div>
);
