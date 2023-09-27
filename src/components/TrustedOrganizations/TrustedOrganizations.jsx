import React from 'react';
import cx from 'classnames';

import { icons } from './icons/iconsData';
import { createBemBlockBuilder } from '../../utils';

import './TrustedOrganizations.scss';

const getBlocksWith = createBemBlockBuilder(['trusted-organizations']);

export const TrustedOrganizations = () => (
  <div className={cx(getBlocksWith())}>
    <div className={getBlocksWith('__title')}>
      Trusted by the world&apos;s leading organizations
    </div>
    <div className={getBlocksWith('__icons-wrapper')}>
      <div className={getBlocksWith('__icons')}>
        {icons.map((Icon, index) => (
          <div key={index} className={getBlocksWith('__icon')}>
            <Icon />
          </div>
        ))}
      </div>
    </div>
  </div>
);
