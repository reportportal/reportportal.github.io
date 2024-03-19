import React, { FC, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { ButtonSwitcher } from '@app/components/ButtonSwitcher';
import { Banner } from '@app/components/Banner';
import { FooterContent } from '@app/components/Layout';
import { createBemBlockBuilder, mediaDesktopSm } from '@app/utils';

import DockerIcon from './icons/docker.inline.svg';
import GoogleCloudIcon from './icons/googleCloud.inline.svg';
import KubernetesIcon from './icons/kubernetes.inline.svg';
import { KubernetesContent } from './KubernetesContent';
import { GoogleCloudContent, GoogleCloudLaunchPortal } from './GoogleCloudContent';
import { LaunchPortal } from './LaunchPortal';
import { DockerDeployingStep, DockerInstall } from './DockerContent';
import { IntegrationContent } from './IntegrationContent';
import { ScrollIndicator } from './ScrollIndicator';
import {
  KUBERNETES_SECTIONS,
  DOCKER_SECTIONS,
  GOOGLE_CLOUD_SECTIONS,
  DOCKER,
  GOOGLE_CLOUD,
  KUBERNETES,
} from './constants';

import './InstallationPage.scss';

const getBlocksWith = createBemBlockBuilder(['installation']);

const buttons = [
  {
    text: DOCKER,
    icon: <DockerIcon />,
    scrollPoints: DOCKER_SECTIONS,
  },
  {
    text: KUBERNETES,
    icon: <KubernetesIcon />,
    scrollPoints: KUBERNETES_SECTIONS,
  },
  {
    text: GOOGLE_CLOUD,
    icon: <GoogleCloudIcon />,
    scrollPoints: GOOGLE_CLOUD_SECTIONS,
  },
];

const ACTIVE_BUTTON = buttons[0].text;

const sectionsContent: {
  [key: string]: React.FC[];
} = {
  [DOCKER]: [DockerInstall, DockerDeployingStep, LaunchPortal, IntegrationContent],
  [KUBERNETES]: [KubernetesContent, LaunchPortal, IntegrationContent],
  [GOOGLE_CLOUD]: [GoogleCloudContent, GoogleCloudLaunchPortal, IntegrationContent],
};

export const InstallationPage: FC = () => {
  const [activeButton, setActiveButton] = useState(ACTIVE_BUTTON);
  const isDesktop = useMediaQuery({ query: mediaDesktopSm });

  const sections = buttons.find(button => button.text === activeButton)?.scrollPoints ?? [];

  const switchActiveBtn = (btnName: string) => {
    if (btnName !== activeButton) {
      setActiveButton(btnName);
    }
  };

  return (
    <div>
      <div className={getBlocksWith()}>
        <div className="container">
          <h1 className={getBlocksWith('__title')}>Installation guide</h1>
          <p className={getBlocksWith('__subtitle')}>
            Discover 3 pathways to install ReportPortal with
          </p>

          <div className={getBlocksWith('__btn-box')}>
            <ButtonSwitcher
              buttons={buttons}
              activeBtnName={activeButton}
              onSwitch={switchActiveBtn}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className={getBlocksWith('__main')}>
          <div className={getBlocksWith('__main-indicator')}>
            {isDesktop && <ScrollIndicator sections={sections} />}
          </div>

          <div className={getBlocksWith('__main-content')}>
            <div className={classNames({ [getBlocksWith('__main-inner')]: !isDesktop })}>
              {sectionsContent[activeButton].map((SectionComponent, index) => (
                <div key={activeButton + index} name={`section-${index}`}>
                  <SectionComponent />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterContent>
        <div className={getBlocksWith('__banner')}>
          <Banner
            title="Still have questions about installation?"
            subtitle="Chat with us in Slack channel"
            linkTitle="Go to Slack channel"
            link="https://slack.epmrpp.reportportal.io/"
          />
        </div>
      </FooterContent>
    </div>
  );
};
