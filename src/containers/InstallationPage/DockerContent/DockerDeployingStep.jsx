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
          2. Ensure you override the UAT Service environment variable{' '}
          <span className={getBlocksWith('__code-text')}>RP_INITIAL_ADMIN_PASSWORD</span>
        </p>

        <Text className={getBlocksWith('__code')} code copyable>
          {`
version: '2.4'
services:
  uat:
    environment:
      RP_INITIAL_ADMIN_PASSWORD: "My_Strong_Password!"
            `}
        </Text>

        <p>
          {`We've modified the current approach: during the initial installation and the first login
          of the superadmin, they will need to create a unique initial password, different from the
          default password provided in the ReportPortal installation documentation. Failure to do so
          will prevent the Auth service from starting.`}
        </p>

        <p>3. Start the application using the following command:</p>

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

        <Notice title="Useful commands">
          <span className={getBlocksWith('__code-text')}>docker-compose logs</span> — shows logs
          from all containers <br />
          <span className={getBlocksWith('__code-text')}>docker logs &lt;container_name&gt;</span> —
          shows logs from selected container <br />
          <p className={getBlocksWith('__code-text')}>
            docker ps -a | grep {'"reportportal_"'} | awk {"'{print $1}'"} | xargs <br />
            docker rm -f
          </p>{' '}
          <br />— deletes all ReportPortal containers
        </Notice>

        <p>
          4. Expose Docker Volumes to the file system{' '}
          <span className={getBlocksWith('__sub-text')}>(optional)</span>
        </p>
        <ul className={getBlocksWith('__marked-list')}>
          <li>
            Set <span className={getBlocksWith('__code-text')}>vm.max_map_count</span> kernel
            setting before ReportPortal deploying with the following{' '}
            <Link
              className={getBlocksWith('__link')}
              to="https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html#docker-cli-run-prod-mode"
            >
              Commands
            </Link>
          </li>
          .
          <li>Give right permissions to ElasticSearch data folder using the following commands:</li>
        </ul>

        <Text className={getBlocksWith('__code')} code copyable>
          {
            'mkdir -p ./data/elasticsearch\nchmod 775 ./data/elasticsearch\nchgrp 1000 ./data/elasticsearch'
          }
        </Text>

        <p>
          For more details about ElasticSearch installation with Docker visit
          <Link
            className={getBlocksWith('__link')}
            to="https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html#_notes_for_production_use_and_defaults"
          >
            {' '}
            guide
          </Link>
          .
        </p>

        <p>
          5. PostgreSQL Performance Tuning{' '}
          <span className={getBlocksWith('__sub-text')}>(optional)</span>
        </p>
        <p>
          Depends on your hardware configuration and parameters of your system, you can additionally
          optimize your PostgreSQL performance by adding the following parameters to {'"command"'}{' '}
          option in the Docker compose file.
        </p>
        <p>
          Please choose the set of the values of these variables that are right for your system:
        </p>

        <Text className={getBlocksWith('__code')} code copyable>
          {
            '-c effective_io_concurrency=\n-c shared_buffers=\n-c max_connections=\n-c effective_cache_size=\n-c maintenance_work_mem=\n-c random_page_cost=\n-c seq_page_cost=\n-c min_wal_size=\n-c max_wal_size=\n-c max_worker_processes=\n-c max_parallel_workers_per_gather=\n'
          }
        </Text>

        <p>
          Please choose to set the values of these variables that are right for your system. You can
          also change the PostgreSQL host by passing a new value to the{' '}
          <span className={getBlocksWith('__code-text')}>POSTGRES_SERVER</span>
          environment{' '}
          <Link
            className={getBlocksWith('__link')}
            to={`${DOCUMENTATION_URL}/installation-steps/AdditionalConfigurationParameters`}
          >
            variable
          </Link>
          .
        </p>

        <p>
          More info can be found at the following{' '}
          <Link
            className={getBlocksWith('__link')}
            to={`${DOCUMENTATION_URL}/installation-steps/OptimalPerformanceHardwareSetup#5-postgresql-performance-tuning`}
          >
            link
          </Link>
          .
        </p>
      </div>
    </>
  );
};
