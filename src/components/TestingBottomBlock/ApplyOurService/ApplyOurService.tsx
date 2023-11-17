import React, { FC } from 'react';

import { Heading } from '../../Heading';
import { Link } from '../../Link';

import './ApplyOurService.scss';

interface ApplyOurServiceProps {
  url: string;
}

export const ApplyOurService: FC<ApplyOurServiceProps> = ({ url }) => (
  <div className="apply-our-service">
    <div className="apply-our-service__heading">
      <Heading color="white-heading" title="Apply for our service" />
      <Link className="btn btn--primary btn--large" to={url} data-gtm="get_a_quote">
        Get a quote
      </Link>
    </div>
  </div>
);
