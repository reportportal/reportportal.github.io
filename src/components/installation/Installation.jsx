import React from 'react';
import { useBoolean } from 'ahooks';
import cx from 'classnames';

import { Container } from '../Container';
import { createBemBlockBuilder } from '../../utils';
import { DockerIcon, KubernetesIcon } from './icons';
import { SwitchButtons } from '../switchButtons';
import { IntegrationScheme } from './components/IntegrationScheme';

import './Installation.scss';

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

      {contentSate ? <div>First Page</div> : <div>Second Page</div>}

      <IntegrationScheme />
    </div>
  );
};
