import React, { useState } from 'react';

import { Container } from '../Container';
import { createBemBlockBuilder } from '../../utils';
import { DockerIcon, KubernetesIcon } from './icons';
import { IntegrationScheme } from './components/IntegrationScheme';
import { ButtonSwitcher } from '../ButtonSwitcher';

import './InstallationPage.scss';

const getBlocksWith = createBemBlockBuilder(['installation']);

const buttons = [
  {
    text: 'With Docker',
    iconComponent: () => <DockerIcon />,
  },
  {
    text: 'With Kubernetes',
    iconComponent: () => <KubernetesIcon />,
  },
];

const ACTIVE_BUTTON = buttons[0].text;

export const InstallationPage = () => {
  const [activeButton, setActiveButton] = useState(ACTIVE_BUTTON);

  const isFirstBtnActive = () => activeButton === buttons[0].text;

  const switchActiveBtn = (btnName) => {
    if (btnName !== activeButton) {
      setActiveButton(btnName);
    }
  };

  return (
    <div>
      <div className={getBlocksWith()}>
        <Container>
          <h1 className={getBlocksWith('__title')}>Installation guide</h1>
          <p className={getBlocksWith('__subtitle')}>3 steps to get started with ReportPortal</p>

          <div className={getBlocksWith('__btn-box')}>
            <ButtonSwitcher
              buttons={buttons}
              onSwitch={switchActiveBtn}
              activeBtnName={activeButton}
            />
          </div>
        </Container>
      </div>

      {isFirstBtnActive ? <div>First Page</div> : <div>Second Page</div>}

      <IntegrationScheme />
    </div>
  );
};
