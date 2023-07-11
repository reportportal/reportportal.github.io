import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../../../utils';

import '../../InstallationPage.scss';

export const KubernetesContent = () => {
  const getBlocksWith = createBemBlockBuilder(['installation']);

  return (
    <div className={getBlocksWith('__wrapper')}>
      <div className={getBlocksWith('__chapter')}>Step 1</div>
      <h3 className={getBlocksWith('__title-content')}>Configure and deploy ReportPortal</h3>
      <p>
        We use Helm package manager charts to bootstrap a ReportPortal deployment on a Kubernetes
        cluster.
      </p>
      <p>
        Kubernetes/Helm configs for ReportPortal installation can be find via the following link:{' '}
      </p>{' '}
      <a
        className={cx(getBlocksWith('__link'), getBlocksWith('__link-breakable'))}
        href="https://github.com/reportportal/kubernetes/tree/develop/reportportal"
      >
        https://github.com/reportportal/kubernetes/tree/develop/reportportal
      </a>
    </div>
  );
};