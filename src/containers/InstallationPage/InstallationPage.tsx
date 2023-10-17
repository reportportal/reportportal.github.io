import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

import { createBemBlockBuilder, mediaDesktopSm } from '../../utils';
import { ButtonSwitcher } from '../../components/ButtonSwitcher';
import { Banner } from '../../components/Banner';

import { DockerIcon, KubernetesIcon } from './icons';
import { KubernetesContent } from './KubernetesContent';
import { LaunchPortal } from './LaunchPortal';
import { DockerDeployingStep, DockerInstall } from './DockerContent';
import { IntegrationContent } from './IntegrationContent';
import { ScrollIndicator } from './ScrollIndicator';
import { KUBERNETES_SECTIONS, DOCKER_SECTIONS } from './constants';

import './InstallationPage.scss';

const getBlocksWith = createBemBlockBuilder(['installation']);

const buttons = [
  {
    text: 'With Docker',
    iconComponent: () => <DockerIcon />,
    scrollPoints: DOCKER_SECTIONS,
  },
  {
    text: 'With Kubernetes',
    iconComponent: () => <KubernetesIcon />,
    scrollPoints: KUBERNETES_SECTIONS,
  },
];

const ACTIVE_BUTTON = buttons[0].text;

export const InstallationPage = () => {
  const [activeButton, setActiveButton] = useState(ACTIVE_BUTTON);
  const isDesktop = useMediaQuery({ query: mediaDesktopSm });

  const getSections = () => {
    const activeButtonObject = buttons.find(button => button.text === activeButton);

    return activeButtonObject ? activeButtonObject.scrollPoints : null;
  };

  const isFirstBtnActive = () => activeButton === buttons[0].text;

  const switchActiveBtn = btnName => {
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

      <div className="container">
        <div className={getBlocksWith('__main')}>
          <div className={getBlocksWith('__main-indicator')}>
            {isDesktop && <ScrollIndicator sections={getSections()} />}
          </div>

          <div className={getBlocksWith('__main-content')}>
            <div className={classNames({ [getBlocksWith('__main-inner')]: !isDesktop })}>
              {isFirstBtnActive() ? (
                <>
                  <div name="section-1">
                    <DockerInstall />
                  </div>

                  <div name="section-2">
                    <DockerDeployingStep />
                  </div>
                </>
              ) : (
                <div name="section-1">
                  <KubernetesContent />
                </div>
              )}

              <div name="section-3">
                <LaunchPortal />
              </div>

              <div name="section-4">
                <IntegrationContent />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={getBlocksWith('__banner')}>
        <Banner
          title="Still have questions about installation?"
          subtitle="Chat with us in Slack channel"
          linkTitle="Go to Slack channel"
          link="https://slack.epmrpp.reportportal.io/"
        />
      </div>
    </div>
  );
};
