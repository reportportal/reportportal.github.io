import React, { FC } from 'react';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder } from '@app/utils';
import { Typography } from 'antd';

import { Notice } from '../Notice';

import '../InstallationPage.scss';

const DOCUMENTATION_URL = process.env.DOCUMENTATION_URL;

export const DockerInstall: FC = () => {
  const getBlocksWith = createBemBlockBuilder(['installation']);
  const { Text } = Typography;

  return (
    <div className={getBlocksWith('__wrapper')}>
      <h3 className={getBlocksWith('__title-content')}>Install Docker</h3>

      <h4>OS Support</h4>
      <ul className={getBlocksWith('__list')}>
        <li>
          <strong>Linux</strong> (Ubuntu 20.04+ or equivalent) - <em>Recommended</em>
        </li>
        <li>
          <strong>macOS</strong> (Intel or Apple Silicon; Docker Desktop requires macOS 12.0+)
        </li>
        <li>
          <strong>Windows</strong> (64-bit Windows 11 Pro+ with Hyper-V/WSL 2)
        </li>
      </ul>

      <h4>Docker & Compose</h4>
      <ul className={getBlocksWith('__list')}>
        <li>
          Install{' '}
          <Link className={getBlocksWith('__link')} to="https://docs.docker.com/engine/install/">
            Docker Engine
          </Link>
        </li>
        <li>
          Ensure Docker Compose plugin is version ≥ 2.2{' '}
          <Text className={getBlocksWith('__code')} code copyable>
            docker compose version
          </Text>
        </li>
      </ul>

      <h4>Resources</h4>

      <Notice importance>Allocate ≥ 2 CPUs & 6 GB RAM to Docker; ≥ 20 GB free disk space</Notice>

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
