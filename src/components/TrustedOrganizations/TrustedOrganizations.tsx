import React, { FC } from 'react';
import { useTrustedByOrganizations } from '@app/hooks/useTrustedByOrganizations';
import { createBemBlockBuilder } from '@app/utils';

import './TrustedOrganizations.scss';

const getBlocksWith = createBemBlockBuilder(['trusted-organizations']);

export const TrustedOrganizations: FC = () => {
  const organizations = useTrustedByOrganizations();

  return (
    <div className={getBlocksWith()}>
      <div className={getBlocksWith('__title')}>
        Trusted by the world&apos;s leading organizations
      </div>
      <div className={getBlocksWith('__icons-wrapper')}>
        <div className={getBlocksWith('__icons')}>
          {organizations.map(({ secondaryLogo, id }) => (
            <div key={id} className={getBlocksWith('__icon')}>
              <img src={secondaryLogo?.url} alt={secondaryLogo?.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
