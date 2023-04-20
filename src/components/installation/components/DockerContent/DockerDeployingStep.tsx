import React from 'react';
import { Typography } from 'antd';

import { Notice } from '../Notice';
import { createBemBlockBuilder } from '../../../../utils';

import '../../Installation.scss';

export const DockerDeployingStep = () => {
  const { Text } = Typography;
  const getBlocksWith = createBemBlockBuilder(['installation']);

  return (
    <div className={getBlocksWith('__container')}>
      <div className={getBlocksWith('__wrapper')}>
        <div className={getBlocksWith('__chapter')}>Step 1</div>
        <h3 className={getBlocksWith('__title-content')}>Configure and deploy ReportPortal</h3>
        <p>Following guide describes deployment on Linux/Mac. In case you went with Docker on Windows, please proceed with the 
          <a className={getBlocksWith('__link')} href="#">{' '}
            instruction
          </a>.
        </p>
        <p>
          1. Download the latest ReportPortal Docker compose file from{' '} 
          <a className={getBlocksWith('__link')} href="https://github.com/reportportal/reportportal/blob/master/docker-compose.yml">
            GitHub
          </a>. You can make it by run the following command:
        </p>
      
        <Text className={getBlocksWith('__code')} code copyable>
          curl -LO https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml
        </Text>
      
        <p>2. Make the ElasticSearch configuration prerequisites for the analyzer service:</p>
        <ul className={getBlocksWith('__marked-list')}>
          <li>Set <span className="code-text">vm.max_map_count</span> kernel setting before ReportPortal deploying with the following {' '}
            <a className={getBlocksWith('__link')} href="https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html#docker-cli-run-prod-mode">
              Commands
            </a>{' '}
            <span className="sub-text">(optional)</span>
          </li>
          <li>
            Give right permissions to ElasticSearch data folder using the following commands:
          </li>
        </ul>

        <Text className={getBlocksWith('__code')} code copyable>
          mkdir -p ./data/elasticsearch <br />
          chmod 775 ./data/elasticsear <br />
          chchgrp 1000 ./data/elasticsearch
        </Text>
        
        <p>For more details about ElasticSearch installation with Docker visit 
          <a className={getBlocksWith('__link')} href="#">{' '}
            guide
          </a>
        </p>

        <p>3. PostgreSQL Performance Tuning <span className="sub-text">(optional)</span></p>
        <p>Depends on your hardware configuration and parameters of your system, you can additionally optimize your PostgreSQL performance by adding the following parameters to "command" option in the Docker compose file.</p>
        <p>Please choose set the values of these variables that are right for your system:</p>

        <Text className={getBlocksWith('__code')} code copyable={{         
            text: `-c effective_io_concurrency=&nbsp;
            -c shared_buffers=&nbsp;
            -c max_connections=&nbsp;
            -c effective_cache_size= 
            -c maintenance_work_mem= 
            -c random_page_cost= 
            -c seq_page_cost= 
            -c min_wal_size= 
            -c max_wal_size= 
            -c max_worker_processes= 
            -c max_parallel_workers_per_gather=`,
            format: 'text/plain'
          }}>
            -c effective_io_concurrency= <br/>
            -c shared_buffers= <br/>
            -c max_connections= <br/>
            -c effective_cache_size= <br/>
            -c maintenance_work_mem= <br/>
            -c random_page_cost= <br/>
            -c seq_page_cost= <br/>
            -c min_wal_size= <br/>
            -c max_wal_size= <br/>
            -c max_worker_processes= <br/>
            -c max_parallel_workers_per_gather= <br/>
        </Text>

        <p>
          You can also change PostgreSQL host by passing a new value to POSTGRES_SERVER environment {' '}
          <a className={getBlocksWith('__link')} href="http://rpp-docs.s3-website.eu-central-1.amazonaws.com/installation-steps/AdditionalConfigurationParameters/">
            variable
          </a>.
        </p>
        <p>4. Start the application using the following command:</p>

        <Text className={getBlocksWith('__code')} code copyable>
          docker-compose -p reportportal up -d --force-recreate
        </Text>

        <p>Where:</p>
        <p>
          <span className="code-text">-p reportportal</span>{' '}
          — adds project prefix 'reportportal' to all containers up creates and starts containers
        </p>
        <p><span className="code-text">-d</span> — daemon mode</p>
        <p> <span className="code-text">--force-recreate</span> — re-creates containers if there any</p>
      </div>

      <Notice title="Useful commands">
        <span className="code-text">docker-compose logs</span> — shows logs from all containers <br />
        <span className="code-text">docker logs &lt;container_name&gt;</span> — shows logs from selected container <br />
        <p className="code-text">docker ps -a | grep "reportportal_" | awk {'{print $1}'} | xargs <br />
          docker rm -f</p> <br />
          — deletes all ReportPortal containers
      </Notice>
    </div>
)}