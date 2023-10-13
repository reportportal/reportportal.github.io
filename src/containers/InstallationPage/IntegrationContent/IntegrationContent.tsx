import React from 'react';

import { createBemBlockBuilder } from '../../../utils';
import { SupportedFrameworks } from '../../../components/SupportedFrameworks';
import { Link } from '../../../components/Link';

import { IntegrationScheme } from './IntegrationScheme';

import '../InstallationPage.scss';

const getBlocksWith = createBemBlockBuilder(['installation']);

export const IntegrationContent: React.FC = () => {
  return (
    <>
      <IntegrationScheme />

      <div>
        <p className={getBlocksWith('__text-content')}>Choose needed integration by language:</p>

        <SupportedFrameworks />
      </div>

      <div className={getBlocksWith('__final')}>
        <p className={getBlocksWith('__text-content')}>
          If there is no integration with your test framework, you can make it on your own.
        </p>
        <p className={getBlocksWith('__text-content')}>
          Please don’t forget to share your integration. We really appreciate your contribution to
          ReportPortal development. Examples of contributions you can find at{' '}
          <Link
            className={getBlocksWith('__link')}
            to="https://github.com/reportportal/reportportal"
          >
            Github page
          </Link>
          .
        </p>
      </div>
    </>
  );
};
