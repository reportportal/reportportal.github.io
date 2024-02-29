import React, { FC } from 'react';
import { Link } from '@app/components';

import codeOfConductSvg from '../icons/code-of-conduct.svg';

import './CodeOfConduct.scss';

export const CodeOfConduct: FC = () => (
  <div className="code-of-conduct">
    <img className="code-of-conduct__image" src={codeOfConductSvg} alt="" />
    <div>
      <strong className="code-of-conduct__title">Code of conduct</strong>
      <p className="code-of-conduct__description">
        Learn about our guidelines for fostering an inclusive and respectful environment within the
        ReportPortal community.
      </p>
    </div>
    <Link
      className="btn btn--outline btn--small code-of-conduct__button"
      to="https://github.com/reportportal/reportportal/wiki/Contribution"
    >
      Open on GitHub
    </Link>
  </div>
);
