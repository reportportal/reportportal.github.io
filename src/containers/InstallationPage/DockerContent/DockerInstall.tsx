import React from 'react';

import { createBemBlockBuilder } from '../../../utils';
import { Link } from '../../../components/Link';

import { Notice } from '../Notice';

import '../InstallationPage.scss';

const DOCUMENTATION_URL = process.env.DOCUMENTATION_URL;

export const DockerInstall: React.FC = () => {
  const getBlocksWith = createBemBlockBuilder(['installation']);

  return (
    <div className={getBlocksWith('__wrapper')}>
      <h3 className={getBlocksWith('__title-content')}>Install Docker</h3>
      <p className={getBlocksWith('__text-content')}>
        <Link className={getBlocksWith('__link')} to="https://docs.docker.com/get-docker/">
          Download{' '}
        </Link>{' '}
        and install Docker. It’s supported by all major Linux distributions, MacOS and Windows.
      </p>

      <Notice importance>
        <ul className={getBlocksWith('__list')}>
          <li>Recommended change resources limits at least 2 CPU 6 GB RAM for Docker</li>

          <li>
            Desktop:{' '}
            <Link
              className={getBlocksWith('__link')}
              to="https://docs.docker.com/desktop/settings/mac"
            >
              MAC
            </Link>{' '}
            |
            <Link
              className={getBlocksWith('__link')}
              to="https://docs.docker.com/desktop/settings/windows/"
            >
              Windows
            </Link>{' '}
            |
            <Link
              className={getBlocksWith('__link')}
              to="https://docs.docker.com/desktop/settings/linux"
            >
              Linux
            </Link>
          </li>
          <li>We strongly recommend to deploy in Linux based environment</li>
        </ul>
      </Notice>

      <Notice>
        For Windows users Docker requires 64-bit Windows 10 Pro (or higher) and Microsoft Hyper-V
      </Notice>

      <p className={getBlocksWith('__text-content')}>
        Instead of using Docker for deployment you can follow the steps described{' '}
        <Link
          className={getBlocksWith('__link')}
          to={`${DOCUMENTATION_URL}/installation-steps/DeployWithoutDocker`}
        >
          here
        </Link>
        .
      </p>
      <p className={getBlocksWith('__text-content')}>
        Details about production deployment and system capacity are{' '}
        <Link
          className={getBlocksWith('__link')}
          to={`${DOCUMENTATION_URL}/installation-steps/OptimalPerformanceHardwareSetup/`}
        >
          here
        </Link>
        .
      </p>
    </div>
  );
};
