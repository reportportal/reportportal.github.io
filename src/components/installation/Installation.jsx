import React from 'react';
import { useBoolean } from 'ahooks';
import cx from 'classnames';

import { Container } from '../Container';
import { createBemBlockBuilder } from '../../utils';
import { DockerContent } from './components/DockerContent';
import { KubernetesContent } from './components/KubernetesContent';
import { LaunchPortal } from './components/LaunchPortal';
import { DockerIcon, KubernetesIcon } from './icons';
import { SwitchButtons } from '../switchButtons';

import './Installation.scss';

const getBlocksWith = createBemBlockBuilder(['installation']);

const buttons = [
  {
    text: 'With Docker',
    active: true,
    iconComponent: (item) => (
      <DockerIcon
        className={cx({
          'installation__active-icon': item.active,
          installation__icon: !item.active,
        })}
      />
    ),
  },
  {
    text: 'With Kubernetes',
    active: false,
    iconComponent: (item) => (
      <KubernetesIcon
        className={cx({
          'installation__active-icon': item.active,
          installation__icon: !item.active,
        })}
      />
    ),
  },
];

export const Installation = () => {
  const [contentSate, { toggle }] = useBoolean(true);

  const handleSwitch = () => {
    toggle();
  };

  return (
    <div>
      <div className={getBlocksWith()}>
        <Container>
          <h1 className={getBlocksWith('__title')}>Installation guide</h1>
          <p className={getBlocksWith('__subtitle')}>3 steps to get started with ReportPortal</p>

          <div className={getBlocksWith('__btn-box')}>
            <SwitchButtons buttons={buttons} onSwitch={handleSwitch} />
          </div>
        </Container>
      </div>

      {contentSate ? <DockerContent /> : <KubernetesContent />}

      <LaunchPortal />
    </div>
  );
};
