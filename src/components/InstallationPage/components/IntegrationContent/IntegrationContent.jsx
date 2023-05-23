import React from 'react';

import { createBemBlockBuilder } from '../../../../utils';
import { IntegrationScheme } from '../IntegrationScheme';
import { SupportedFrameworks } from '../../../SupportedFrameworks';

import '../../InstallationPage.scss';

const getBlocksWith = createBemBlockBuilder(['installation']);

export const IntegrationContent = () => {
  return (
    <>
      <IntegrationScheme />

      <div>
        <p className={getBlocksWith('__text-content')}>Choose needed integration by language:</p>

        <SupportedFrameworks />
      </div>

      <div className={getBlocksWith('__final')}>
        <p className={getBlocksWith('__text-content')}>
          If there is not an integration with your test framework, you can make it on your own.
        </p>
        <p className={getBlocksWith('__text-content')}>
          Please don’t forget to share your integration. We really appreciate your contribution to
          ReportPortal development. Examples of contributions you can find at{' '}
          <a
            className={getBlocksWith('__link')}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/reportportal/reportportal"
          >
            Github page
          </a>
        </p>
      </div>
    </>
  );
};
