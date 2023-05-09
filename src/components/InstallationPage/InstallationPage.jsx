import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { KubernetesContent } from './components/KubernetesContent';
import { LaunchPortal } from './components/LaunchPortal';
import { DockerIcon, KubernetesIcon } from './icons';
import { ButtonSwitcher } from '../ButtonSwitcher';
import { ScrollIndicator } from '../ScrollIndicator';
import { DockerDeployingStep } from './components/DockerContent/DockerDeployingStep';
import { DockerInstall } from './components/DockerContent/DockerInstall';

import './InstallationPage.scss';

const getBlocksWith = createBemBlockBuilder(['installation']);

const kubernetesSections = [
  { step: 'Step 1', title: 'Configure and deploy ReportPortal', id: 'section-1' },
  { step: 'Step 2', title: 'Launch ReportPortal', id: 'section-3' },
  { step: 'Step 3', title: 'Integrate with your test framework', id: 'section-4' },
];

const dockerSections = [
  { step: '', title: 'Install Docker', id: 'section-1' },
  { step: 'Step 1', title: 'Configure and deploy ReportPortal', id: 'section-2' },
  { step: 'Step 2', title: 'Launch ReportPortal', id: 'section-3' },
  { step: 'Step 3', title: 'Integrate with your test framework', id: 'section-4' },
];

const buttons = [
  {
    text: 'With Docker',
    iconComponent: () => <DockerIcon />,
    scrollPoints: dockerSections,
  },
  {
    text: 'With Kubernetes',
    iconComponent: () => <KubernetesIcon />,
    scrollPoints: kubernetesSections,
  },
];

const ACTIVE_BUTTON = buttons[0].text;

export const InstallationPage = () => {
  const [activeButton, setActiveButton] = useState(ACTIVE_BUTTON);
  const isDesktop = useMediaQuery({ query: '(min-width: 1100px)' });

  const getSections = () => {
    const activeButtonObject = buttons.find((button) => button.text === activeButton);

    return activeButtonObject ? activeButtonObject.scrollPoints : null;
  };

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

      <div className={getBlocksWith('__main')}>
        {isDesktop && (
          <div className={getBlocksWith('__main-indicator')}>
            <ScrollIndicator sections={getSections()} />
          </div>
        )}

        <div className={cx(getBlocksWith('__main-content'), 'container')}>
          {isFirstBtnActive() ? (
            <>
              <div name="section-1" id="part-1">
                <DockerInstall />
              </div>

              <div key="section-2" name="section-2" id="part-2">
                <DockerDeployingStep />
              </div>
            </>
          ) : (
            <div name="section-1" id="part-1">
              <KubernetesContent />
            </div>
          )}

          <div key="section-3" name="section-3" id="part-3">
            <LaunchPortal />
          </div>

          {isDesktop && (
            <div
              key="section-4"
              name="section-4"
              id="part-4"
              style={{
                width: '100%',
                height: '100vh',
                textAlign: 'center',
                background: '#F4EAD5',
              }}
            >
              Empty Section
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
