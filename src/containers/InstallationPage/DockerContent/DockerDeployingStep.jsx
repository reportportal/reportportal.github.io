import React from 'react';
import { Typography } from 'antd';

import { createBemBlockBuilder } from '@utils';
import { Link } from '@components/Link';

import { Notice } from '../Notice';

import '../InstallationPage.scss';

const DOCUMENTATION_URL = process.env.DOCUMENTATION_URL;

export const DockerDeployingStep = () => {
  const { Text } = Typography;
  const getBlocksWith = createBemBlockBuilder(['installation']);

  return (
    <>
      <div className={getBlocksWith('__wrapper')}>
        <div className={getBlocksWith('__chapter')}>Step 1</div>
        <h3 className={getBlocksWith('__title-content')}>Configure and deploy ReportPortal</h3>
        <p>
          The following guide describes deployment on Linux/Mac. In case you went with Docker on
          Windows, please proceed with the
          <Link
            className={getBlocksWith('__link')}
            to={`${DOCUMENTATION_URL}/installation-steps/DeployWithDockerOnWindows/`}
          >
            {' '}
            instruction
          </Link>
          .
        </p>
        <p>
          1. Download the latest ReportPortal Docker compose file from{' '}
          <Link
            className={getBlocksWith('__link')}
            to="https://github.com/reportportal/reportportal/blob/master/docker-compose.yml"
          >
            GitHub
          </Link>
          . You can make it by running the following command:
        </p>

        <Text className={getBlocksWith('__code')} code copyable>
          curl -LO
          https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml
        </Text>
        <p>
          Ensure you override the UAT Service environment variable{' '}
          <span className={getBlocksWith('__code-text')}>RP_INITIAL_ADMIN_PASSWORD</span>
        </p>

        <p>2. Start the application using the following command:</p>

        <Text className={getBlocksWith('__code')} code copyable>
          docker-compose -p reportportal up -d --force-recreate
        </Text>

        <p>Where:</p>
        <p>
          <span className={getBlocksWith('__code-text')}>-p reportportal</span> — adds project
          prefix {"'reportportal'"} to all containers
        </p>
        <p>
          <span className={getBlocksWith('__code-text')}>up</span> — creates and starts containers
        </p>
        <p>
          <span className={getBlocksWith('__code-text')}>-d</span> — daemon mode
        </p>
        <p>
          {' '}
          <span className={getBlocksWith('__code-text')}>--force-recreate</span> — re-creates
          containers
        </p>
      </div>

      <Notice title="Useful commands">
        <span className={getBlocksWith('__code-text')}>docker-compose logs</span> — shows logs from
        all containers <br />
        <span className={getBlocksWith('__code-text')}>docker logs &lt;container_name&gt;</span> —
        shows logs from selected container <br />
        <p className={getBlocksWith('__code-text')}>
          docker ps -a | grep {'"reportportal_"'} | awk {"'{print $1}'"} | xargs <br />
          docker rm -f
        </p>{' '}
        <br />— deletes all ReportPortal containers
      </Notice>

      <p>
        For a more comprehensive installation guide, please refer to the{' '}
        <Link
          className={getBlocksWith('__link')}
          to={`${DOCUMENTATION_URL}/installation-steps/DeployWithDockerOnLinuxMac/`}
        >
          link
        </Link>
        .
      </p>
    </>
  );
};
