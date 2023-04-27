import React from 'react';

import { Notice } from '../Notice';
import { createBemBlockBuilder } from '../../../../utils';

import '../../InstallationPage.scss';

export const DockerInstall = () => {
  const getBlocksWith = createBemBlockBuilder(['installation']);

  return (
    <div className={getBlocksWith('__container')}>
      <div className={getBlocksWith('__wrapper')}>
        <h3 className={getBlocksWith('__title-content')}>Install Docker</h3>
        <p className={getBlocksWith('__text-content')}>
          <a className={getBlocksWith('__link')} href="https://docs.docker.com/get-docker/">
            Download{' '}
          </a>{' '}
          and install Docker. It’s supported by all major Linux distributions, MacOS and Windows.
        </p>

        <Notice importance>
          <ul className={getBlocksWith('__list')}>
            <li>
              Recommended change resources limits at least 2 CPU 6 GB RAM for Docker Desktop:{' '}
              <a
                className={getBlocksWith('__link')}
                href="https://docs.docker.com/desktop/settings/mac/#advanced"
              >
                MAC
              </a>{' '}
              |
              <a
                className={getBlocksWith('__link')}
                href="https://docs.docker.com/desktop/settings/windows/"
              >
                Windows
              </a>{' '}
              |
              <a
                className={getBlocksWith('__link')}
                href="https://docs.docker.com/desktop/settings/linux/#advanced"
              >
                Linux
              </a>
            </li>
            <li>We strongly recommend to deploy in Linux based environment</li>
          </ul>
        </Notice>

        <Notice>
          For Windows users Docker requires 64-bit Windows 10 Pro (or higher) and Microsoft Hyper-V.
        </Notice>

        <p className={getBlocksWith('__text-content')}>
          Instead of using Docker for deployment you can follow the steps described here.
        </p>
        <p className={getBlocksWith('__text-content')}>
          Details about production deployment and system capacity are here.
        </p>
      </div>
    </div>
  );
};
