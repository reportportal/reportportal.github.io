/*
 * Copyright 2023 EPAM Systems
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
import StorageBackgroundImage from './img/storageBackground.svg';
import CleanStorageJobImage from './img/cleanStorageJob.svg';
import TableAndChartImage from './img/tableAndChart.svg';
import LogsImage from './img/logs.svg';
import BlogPageHeader from '../common/blog-page-header/blogPageHeader';
import BlogPageContent from '../common/blog-page-content/blogPageContent';

const StorageBlogPage = () => (
  <>
    <BlogPageHeader
      tags={['StorageOptimization', 'PerformanceImprovement']}
      date={'July 13, 2023'}
      background={StorageBackgroundImage}
    />
    <BlogPageContent title={'Store more, clean faster'}>
      <p>
        We are glad to announce the changes in the logic of the cleanStorage starting from the version 5.8.1 of Service Jobs and API Service version 5.9.0.
      </p>
      <p>
        Previously, it was only possible to clear 1 attachment per 1 request to the binary storage, and it was not possible to clear more than 500,000 attachments per 1 job execution. The current implementation allows to clean multiple blobs (200,000) per 1 request to the S3 storage.
      </p>
      <p>
        The chunk_size env variable remains for the service jobs (no changes in the deployment are needed). But under the hood, the job logic is splitting chunk_size value into fixed batches by 200k and processing deletion via a certain number of iterations, which is calculated based on chunk size. If chunk_size = 2 million, then the job will proceed with the deletion with 10 iterations and clean 200k attachments per iteration.
      </p>
      <h3>
        The new logic is 30 times faster for both S3 and MinIO binary storages
      </h3>
      <img src={CleanStorageJobImage} alt="Clean storage job" />
      <p>
        <b>Use case 1:</b> if chunk_size is set to 200,000, the cleanStorage job will delete 200,000 MAX attachments from the S3 storage within 1 iteration. If the attachments count in the attacment_deletion table is less than 200,000, then all attachments will be deleted.
      </p>
      <p>
        <b>Use case 2:</b> if chunk_size is set to 2 million, the cleanStorage job will delete all attachments from the S3 storage within 10 iterations by batches of 200,000 attachments.
      </p>
      <img src={TableAndChartImage} alt="Table and chart" />
      <img src={LogsImage} alt="Logs" />
      <p>
        Thus, thanks to this implementation, we have significantly optimized the cleanStorage job performance. It keeps your binary storage within limits and allows you not to care about attachment cleaning. Since we've significantly speeded up the cleanup of binaries, we assume that this should completely solve all such problems.
      </p>
    </BlogPageContent>
  </>
);

export default StorageBlogPage;
