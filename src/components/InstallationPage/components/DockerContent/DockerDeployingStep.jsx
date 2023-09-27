import React from 'react';
import { Typography } from 'antd';

import { createBemBlockBuilder } from '../../../../utils';
import { Link } from '../../../Link';
import { Notice } from '../Notice';

import '../../InstallationPage.scss';

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

        <p>2. Make the ElasticSearch configuration prerequisites for the analyzer service:</p>
        <ul className={getBlocksWith('__marked-list')}>
          <li>
            Set <span className={getBlocksWith('__code-text')}>vm.max_map_count</span> kernel
            setting before ReportPortal deploying with the following{' '}
            <Link
              className={getBlocksWith('__link')}
              to="https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html#docker-cli-run-prod-mode"
            >
              Commands
            </Link>{' '}
            <span className={getBlocksWith('__sub-text')}>(optional)</span>
          </li>
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
          3. PostgreSQL Performance Tuning{' '}
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
          You can change PostgreSQL password by editing environment variables in{' '}
          <Link
            className={getBlocksWith('__link')}
            to="https://github.com/reportportal/reportportal/blob/master/docker-compose.yml"
          >
            docker-compose.yml
          </Link>
          .
        </p>
        <p>4. Start the application using the following command:</p>

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
    </>
  );
};
