import React, { FC } from 'react';
import { Link } from '@app/components/Link';
import { SupportedFrameworks } from '@app/components/SupportedFrameworks';
import { createBemBlockBuilder } from '@app/utils';

import { IntegrationScheme } from './IntegrationScheme';

import '../InstallationPage.scss';

const getBlocksWith = createBemBlockBuilder(['installation']);

export const IntegrationContent: FC = () => (
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
        <Link className={getBlocksWith('__link')} to="https://github.com/reportportal/reportportal">
          Github page
        </Link>
        .
      </p>
    </div>
  </>
);
