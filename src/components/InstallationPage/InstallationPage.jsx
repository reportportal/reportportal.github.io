import React from 'react';
import { useBoolean } from 'ahooks';

import { createBemBlockBuilder } from '../../utils';
import { DockerContent } from './components/DockerContent';
import { KubernetesContent } from './components/KubernetesContent';
import { LaunchPortal } from './components/LaunchPortal';
import { DockerIcon, KubernetesIcon } from './icons';
import { SwitchButtons } from '../SwitchButtons';

import './InstallationPage.scss';

const getBlocksWith = createBemBlockBuilder(['installation']);

const buttons = [
  {
    text: 'With Docker',
    active: true,
    iconComponent: () => <DockerIcon />,
  },
  {
    text: 'With Kubernetes',
    active: false,
    iconComponent: () => <KubernetesIcon />,
  },
];

export const InstallationPage = () => {
  const [contentState, { toggle }] = useBoolean(true);

  const handleSwitch = () => {
    toggle();
  };

  return (
    <div>
      <div className={getBlocksWith()}>
        <div className={getBlocksWith('__container')}>
          <h1 className={getBlocksWith('__title')}>Installation guide</h1>
          <p className={getBlocksWith('__subtitle')}>3 steps to get started with ReportPortal</p>

          <div className={getBlocksWith('__btn-box')}>
            <SwitchButtons buttons={buttons} onSwitch={handleSwitch} />
          </div>
        </div>
      </div>

      {contentState ? <DockerContent /> : <KubernetesContent />}

      <LaunchPortal />
    </div>
  );
};
