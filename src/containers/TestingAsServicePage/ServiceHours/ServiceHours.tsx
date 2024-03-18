import React, { FC } from 'react';
import { Heading } from '@app/components/Heading';
import { IconBlock } from '@app/components/IconBlock';
import { UnorderedList } from '@app/components/UnorderedList';

import { SERVICE_HOURS_LIST } from './constants';

import './ServiceHours.scss';

export const ServiceHours: FC = () => (
  <div className="service-hours container">
    <div className="service-hours__heading">
      <Heading title="TaaS uses a single currency across all testing services – Professional Service Points" />
      <div className="service-hours__description">
        The TaaS model allows you to use Professional Service Points for the exact testing services
        you need, at the time you need them. It reduces fixed costs and allows you to scale the
        testing team up or down based on need. The exact cost of a Service Point can depend on the
        location and the type of service it’s used for
      </div>
    </div>
    <div className="service-hours__equals">
      <div className="service-hours__equals-images">
        <IconBlock
          type="pentagon"
          value={1}
          text="Professional"
          benefit="Service Point"
          progressNumber={5}
        />
        <div className="service-hours__equals-images--equal" />
        <IconBlock type="circle" value={1} text="Hour of" benefit="testing" />
      </div>
      <UnorderedList list={SERVICE_HOURS_LIST} />
    </div>
  </div>
);
