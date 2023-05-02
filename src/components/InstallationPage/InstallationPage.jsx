import React from 'react';
import { useBoolean } from 'ahooks';

import { Container } from '../Container';
import { createBemBlockBuilder } from '../../utils';
import { DockerIcon, KubernetesIcon } from './icons';
import { ButtonSwitcher } from '../ButtonSwitcher';
import { IntegrationScheme } from './components/IntegrationScheme';

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
            <ButtonSwitcher buttons={buttons} onSwitch={handleSwitch} />
          </div>
        </Container>
      </div>

      {contentSate ? <div>First Page</div> : <div>Second Page</div>}

      <IntegrationScheme />
    </div>
  );
};
