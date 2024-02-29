import React, { FC } from 'react';
import { Link } from '@app/components';

import './Sponsors.scss';

export const Sponsors: FC = () => (
  <div className="sponsors">
    <div className="container sponsors__content">
      <div>
        <div className="sponsors__title">Fuel innovation and open-source progress</div>
        <div className="sponsors__description">
          Join us as a Sponsor on GitHub and support our quest for excellence in software testing
        </div>
      </div>
      <Link
        className="btn btn--pink btn--large sponsors__button"
        to="https://github.com/sponsors/reportportal"
      >
        Become Sponsor
      </Link>
    </div>
  </div>
);
