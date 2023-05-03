import React, { useState } from 'react';

import { createBemBlockBuilder } from '../../utils';
import { IntegrationScheme } from './components/IntegrationScheme';
import { KubernetesContent } from './components/KubernetesContent';
import { LaunchPortal } from './components/LaunchPortal';
import { DockerIcon, KubernetesIcon } from './icons';
import { ButtonSwitcher } from '../ButtonSwitcher';
import { DockerDeployingStep } from './components/DockerContent/DockerDeployingStep';
import { DockerInstall } from './components/DockerContent/DockerInstall';

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
        <div className="container">
          <h1 className={getBlocksWith('__title')}>Installation guide</h1>
          <p className={getBlocksWith('__subtitle')}>3 steps to get started with ReportPortal</p>

          <div className={getBlocksWith('__btn-box')}>
            <ButtonSwitcher
              buttons={buttons}
              onSwitch={switchActiveBtn}
              activeBtnName={activeButton}
            />
          </div>
        </div>
      </div>

      {/* These all extra div-tags are nassessary for the scroll functionality in the next task */}
      <div>
        <div>
          <div className="container">
            {isFirstBtnActive() ? (
              <>
                <div>
                  <DockerInstall />
                </div>

                <div>
                  <DockerDeployingStep />
                </div>
              </>
            ) : (
              <div>
                <KubernetesContent />
              </div>
            )}

            <div>
              <LaunchPortal />
            </div>

            <div>
              <IntegrationScheme />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
