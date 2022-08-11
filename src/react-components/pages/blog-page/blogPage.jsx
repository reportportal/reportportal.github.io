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
import reactWrapper from 'utils/reactWrapper';
import BodyLayout from 'react-components/layouts/bodyLayout.jsx';
import appImg from './img/app.png';
import elasticSearchImg from './img/elasticSearch.png';
import performanceImg from './img/performance.png';
import responseTimesImg from './img/responseTimes.png';
import storageImg from './img/storage.png';
import styles from './blogPage.scss';

const cx = classNames.bind(styles);

const tags = [
  'article',
  'elasticsearch',
  'datastreams',
];

const elasticSearchBenefits  = [
  'Reduction of database load used by pattern analysis up to 5x times;',
  'Reduction of costs and time for maintaining the PostgreSQL database by decreasing its shape by at least 2 times;',
  'Full text search capabilities for text logs is faster than in PostgreSQL for production-like data (x33 for text queries, less CPU utilization 1 – 16x times in comparison with PostgreSQL);',
  'Less space for Log table in Elastic (x8.5 less);',
  'Storage of PostgreSQL will be reduced by the 2nd largest table “Log” size (text message column + index for the column will be deleted);',
  'Similar performance with PostgreSQL on getting logs by id;',
  'Storing logs in different indices per project (and then per launch) allows to get per project data faster and reduces the risks of locks occurrence.',
];

const dataStreamsBenefits = [
  'Logs deletion by IDs is x29 times faster in data streams compared to Indices;',
  'Pretty fast logs reporting during high workload;',
  'Creation of cheap data nodes for old data, e.g., HDD with low resources. ElasticSearch allows to configure the old data storage using ILM (Index Lifetime Management) policy. It might be useful, for example, if your project uses some information once per week/month, etc;',
  'Various index rollover conditions – fast creation of the new generation. It means that a new generation of this data stream is created when the limit is reached (by logs count, by logs amount, by date). So, logs of this data stream proceed to the new generation. Limits can be specified in the IML policy.',
];

const BlogPage = () => (
  <BodyLayout className={cx('blog-page')}>
    <div className={cx('additional-background')} />
    <div className={cx('background')}>
      <div className={cx('background-content')}>
        <div className={cx('date')}>
          August 8, 2022
        </div>
        <div className={cx('tags')}>
          {tags.map((tag, i) => (
            <span key={`tag${i}`} className={cx('tag')}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className={cx('content')}>
      <div className={cx('title')}>
        ElasticSearch and Data Streams
      </div>
      <p>
        Storing and managing test logs inside ElasticSearch (via Data Streams) with double logging to PostgreSQL in parallel was implemented in version 5.7.2.
      </p>
      <p>
        Saving logs to ElasticSearch still can be turned off after installing 5.7.2, if needed. In this case log messages will be stored in PostgreSQL only. Double logging is activated to ElasticSearch and to PostgreSQL, if there are configured settings for ElasticSearch in API and Jobs services. Please, note that settings must be added or absent for both services. A full migration of logs to ElasticSearch is planned in version 5.8. Before that, the functionality will be implemented step by step.
      </p>
      <img src={appImg} alt="report portal app" />
      <h3>
        Why we use ElasticSearch?
      </h3>
      <p>
        PostgreSQL was previously used as a database for log storage, but – according to the performance tests – this is not the most effective way. Log messages take up the most space in the database, so we decided to transfer them to ElasticSearch. Logs migration to ElasticSearch will significantly reduce storage occupied by the log table. It will improve overall database performance (time, costs).
      </p>
      <img src={elasticSearchImg} alt="elasticSearch" />
      <h3>
        ElasticSearch benefits (after a full migration)
      </h3>
      <ul className={cx('list')}>
        {elasticSearchBenefits.map((item, i) => (
            <li key={`list-item${i}`} className={cx('list-item')}>
              <div className={cx('list-item-text')}>
                {item}
              </div>
            </li>
        ))}
      </ul>
      <img src={storageImg} alt="rows of logs and storage usage" />
      <div className={cx('notice')}>
        <div className={cx('notice-text')}>
          ElasticSearch is lower by storage up to <span className={cx('blue', 'big')}>8.5x</span> times.
        </div>
      </div>
      <h3>
        Why we use Data Streams?
      </h3>
      <p>
        Elasticsearch provides a special approach for storing log data: “A data stream lets you store append-only time series data across multiple indices while giving you a single named resource for requests. Data Streams are well-suited for logs, events, metrics, and other continuously generated data,” – described in the official elastic search documentation.
      </p>
      <h3 className={cx('with-margin-top')}>
        Data Streams benefits
      </h3>
      <ul className={cx('list')}>
        {dataStreamsBenefits.map((item, i) => (
          <li key={`list-item${i}`} className={cx('list-item')}>
            <div className={cx('list-item-text')}>
              {item}
            </div>
          </li>
        ))}
      </ul>
      <img src={responseTimesImg} alt="response times over time" />
      <h4>
        Response times table (95pct)
      </h4>
      <table className={cx('table')}>
        <tr>
          <th>Source</th>
          <th>Mean</th>
          <th>Max</th>
          <th>Min</th>
        </tr>
        <tr>
          <td className={cx('blue-cell')}>Data Stream</td>
          <td className={cx('blue-cell')}>23.5 ms</td>
          <td>2.93 s</td>
          <td>10 ms</td>
        </tr>
        <tr>
          <td className={cx('blue-cell')}>Index</td>
          <td className={cx('blue-cell', 'red')}>632 ms</td>
          <td>2.879 s</td>
          <td>79 ms</td>
        </tr>
      </table>
      <img src={performanceImg} alt="deletion by IDs performance comparison" />
      <div className={cx('notice')}>
        <div className={cx('notice-text')}>
          In comparison with index, logs deletion by IDs from data streams — <span className={cx('blue', 'semibold')}>29 times faster</span>
        </div>
      </div>
      <div className={cx('simple-notice')}>
        You can find more details about ElasticSearch Data Streams <a target="_blank" href='https://opster.com/guides/elasticsearch/data-architecture/elasticsearch-data-streams/' rel="noreferrer">here.</a>
      </div>
      <h3>
        What effort is required from users?
      </h3>
      <p>
        We recommend updating to version 5.7.2 for smooth transition of full logging to ElasticSearch, especially if you have many logs. If you update to version 5.7.2, use it for 3-4 months before version 5.8. This period will be enough for the vast of projects to generate enough logs history inside ElasticSearch. And then update to version 5.8 once it available. Since all logs will already be stored in ElasticSearch, no efforts will be required to do the migration. Along with version 5.8 we will distribute a migration script and instructions for data migration. So that you can easily migrate from early 5.x version.
      </p>
      {[
        'Before version 5.8, double logging might increase the resources – processor and dick space.',
        'We are already using the ElasticSearch license, so, no new license is required. For now, we stay on version 7.10 with Apache 2.0. We might switch to OpenSearch in prospect.',
      ].map((note, i) => (
        <div key={`note${i}`} className={cx('note')}>
          <div className={cx('note-content')}>
            <div className={cx('name')}>{`Note ${i+1}`}</div>
            <div className={cx('text')}>{note}</div>
          </div>
        </div>
      ))}
      <p>
        To summarize, using of ElasticSearch and Data Streams will bring significant performance benefits in the future.
      </p>
    </div>
  </BodyLayout>
);

export default reactWrapper(BlogPage);
