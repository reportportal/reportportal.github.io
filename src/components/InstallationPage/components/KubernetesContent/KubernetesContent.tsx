import React from 'react';

import { createBemBlockBuilder } from '../../../../utils';

import '../../InstallationPage.scss';

export const KubernetesContent = () => {
  const getBlocksWith = createBemBlockBuilder(['installation']);

  return (
    <div className={getBlocksWith('__container')}>
      <div className={getBlocksWith('__wrapper')}>
        <div className={getBlocksWith('__chapter')}>Step 1</div>
        <h3 className={getBlocksWith('__title-content')}>Configure and deploy ReportPortal</h3>
        <p>We use Helm package manager charts to bootstrap a ReportPortal deployment on a Kubernetes cluster.</p>
        <p>
          Kubernetes/Helm configs for installation ReportPortal can be find at the following link:{' '}
          <a className={getBlocksWith('__link')} href="https://github.com/reportportal/kubernetes/tree/master/reportportal" >
            https://github.com/reportportal/kubernetes/tree/master/reportportal
          </a>
        </p>
      </div>
    </div>
  )
}
