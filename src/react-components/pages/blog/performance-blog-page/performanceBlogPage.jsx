/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import classNames from 'classnames/bind';
import capacityImg from './img/capacity.png';
import responseTimeImg from './img/responseTime.png';
import rabbitCpuNewImg from './img/rabbitCpuNew.png';
import rabbitMemoryNewImg from './img/rabbitMemoryNew.png';
import rabbitCpuOldImg from './img/rabbitCpuOld.png';
import rabbitMemoryOldImg from './img/rabbitMemoryOld.png';
import BlogPageHeader from '../common/blog-page-header/blogPageHeader';
import BlogPageContent from '../common/blog-page-content/blogPageContent';
import Notice from '../common/notice/notice';
import styles from './performanceBlogPage.scss';

const cx = classNames.bind(styles);

const tags = [
  'performance',
];

const date = 'December 2, 2022';

const blogTitle = 'Performance improvements in 5.7.3';

const PerformanceBlogPage = () => (
  <>
    <BlogPageHeader tags={tags} date={date} />
    <BlogPageContent title={blogTitle}>
      <h3>
        The system capacity has increased up to 13% compared to version 5.7.2
      </h3>
      <p>
        We are glad to announce some performance optimizations in version 5.7.3.
      </p>
      <p>
        We updated the libraries in the scope of fixing Spring Framework Remote Code Execution (RCE) Vulnerability (Spring4Shell). As a result, the system capacity (requests per second) was increased up to 13% on the small server type* compared to version 5.7.2 during performance testing.
      </p>
      <p>
        * it is a small server type from the recommended optimal Kubernetes cluster configuration (you can check it out <a target="_blank" href="https://reportportal.io/docs/installation-steps/OptimalPerformanceHardwareSetup" rel="noreferrer">here</a>).
      </p>
      <h4 className={cx('with-margin-top')}>
        Throughput (max), RPS
      </h4>
      <img src={capacityImg} alt="Capacity improvement" />
      <Notice>
        <b className={cx('blue')}>Benefits: </b>It helps to speed up your reporting on the same environment just because of the version upgrade.
      </Notice>
      <h3 className={cx('with-margin-top')}>
        Response times for building history and filtering at all levels have become at least 18% faster compared to version 5.7.2
      </h3>
      <p>
        5.7.3 version also brings performance optimizations in the core operations. The optimizations make basic functionality (filtering at all levels and test history building) at least 18% faster compared to version 5.7.2.
      </p>
      <h4 className={cx('with-low-margin-top')}>
        Response times, ms.
      </h4>
      <img src={responseTimeImg} alt="Response time improvement" />
      <Notice>
        <b className={cx('blue')}>Benefits: </b>Test history and filters load faster compared to the previous version.
      </Notice>
      <p>
        Check out the <a target="_blank" href="https://reportportal.io/releases" rel="noreferrer">Release notes</a> for the full list of what’s new in version 5.7.3.
      </p>
      <h3 className={cx('with-margin-top')}>
        RabbitMQ version updates
      </h3>
      <p>
        We updated the RabbitMQ version from 3.9.17 to 3.10.7 and faced less RAM and CPU usage of the RabbitMQ container under the high load (more than 1 million messages in the 20 queues total).
      </p>
      <h4 className={cx('with-low-margin-top')}>
        CPU Usage : rabbitmq-0 v.3.10.5
      </h4>
      <img src={rabbitCpuNewImg} alt="New CPU usage" />
      <h4 className={cx('with-low-margin-top')}>
        Memory Usage : rabbitmq-0 v.3.10.5
      </h4>
      <img src={rabbitMemoryNewImg} alt="New memory usage" />
      <h4 className={cx('with-low-margin-top')}>
        CPU Usage : rabbitmq-0 v.3.9.17
      </h4>
      <img src={rabbitCpuOldImg} alt="Old CPU usage" />
      <h4 className={cx('with-low-margin-top')}>
        Memory Usage : rabbitmq-0 v.3.9.17
      </h4>
      <img src={rabbitMemoryOldImg} alt="Old memory usage" />
      <Notice>
        <b className={cx('blue')}>Benefits: </b>It helps to decrease RabbitMQ resource utilization even under high workloads in the same environment just because of the version upgrade.
      </Notice>
      <p>
        Thus, thanks to performance improvements in version 5.7.3 you can speed up your reporting and decrease resources usage of the ReportPortal even under the high workload.
      </p>
      <p>
        With 5.7.3 version we are also addressing a huge list of security vulnerabilities. Please, see <a target="_blank" href="https://reportportal.io/releases" rel="noreferrer">Release notes</a> for details.
      </p>
    </BlogPageContent>
  </>
);

export default PerformanceBlogPage;
