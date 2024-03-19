import React, { FC } from 'react';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder } from '@app/utils';

import codeOfConductSvg from '../icons/code-of-conduct.svg';

import './CodeOfConduct.scss';

const getBlocksWith = createBemBlockBuilder(['code-of-conduct']);

export const CodeOfConduct: FC = () => (
  <div className={getBlocksWith()}>
    <img className={getBlocksWith('__image')} src={codeOfConductSvg} alt="" />
    <div>
      <strong className={getBlocksWith('__title')}>Code of conduct</strong>
      <p className={getBlocksWith('__description')}>
        Learn about our guidelines for fostering an inclusive and respectful environment within the
        ReportPortal community.
      </p>
    </div>
    <Link
      className={classNames(getBlocksWith('__button'), 'btn btn--outline btn--small')}
      to="https://github.com/reportportal/reportportal/wiki/Contribution"
    >
      Open on GitHub
    </Link>
  </div>
);
