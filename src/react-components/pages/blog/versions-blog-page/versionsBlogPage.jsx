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
import VersionsBackgroundImage from './img/versionsBackground.svg';
import BlogPageHeader from '../common/blog-page-header/blogPageHeader';
import BlogPageContent from '../common/blog-page-content/blogPageContent';
import List from '../common/list/list';

const releases = ['Semi annual product releases', 'Regular service releases'];

const VersionsBlogPage = () => (
  <>
    <BlogPageHeader
      tags={['SemanticVersioning']}
      date={'April 28, 2023'}
      background={VersionsBackgroundImage}
    />
    <BlogPageContent title={'The new approach to versions naming'}>
      <p>
        Our team aims to release often and provide more flexibility for our users and the ReportPortal team itself in feature implementation and delivery. Our priority is always to deliver the product to our users as soon as we can (without sacrificing the product quality). That gives us an opportunity to collect users' feedback earlier and adjust our development strategy following your needs and market trends.
      </p>
      <p>
        Based on the above, we decided to review our versioning models and release flow and move toward the new ones:
      </p>
      <p>
        <List list={releases} isSimple />
      </p>
      <h3>
        The previous approach to versioning
      </h3>
      <p>
        Previously we used the approach to versions when the services were updated together. For example, if there were changes in the API service, Auth service and UI service that are not related to each other, we still made a release of these services trying to link them with a common version. Using this approach, we tried to understand in advance in which service and ReportPortal version the next changes will occur. We always synchronized all our components by the biggest change.
      </p>
      <p>
        With this approach, we often had to reschedule some features' releases when they were almost ready, but suddenly we urgently needed to update some components. Synchronization of services was causing problems and was hard for the development process.
      </p>
      <p>
        So, we decided to change the approach to versions. Now we have replaced the Product release approach with separate Product release and Service release.
      </p>
      <h3>
        The main difference of the new approach
      </h3>
      <p>
        With the new approach, all our components (API Service, Auth Service, UI Service, Analyzer Service, Job Service) will have their own independent versions. We refused to synchronize versions. For example, if the API Service has major changes at the release time, and the UI Service and Analyzer Service have minor or patch changes, then their versions will be different. In addition, if there is no connection between their changes, we can release them separately upon readiness.
      </p>
      <h3>
        Product release
      </h3>
      <p>
        The Product release will contain a set of new features and a set of different ReportPortal services’ versions. At the very beginning of Product delivery planning, we don’t know what versions of the components will be included in the next release.
      </p>
      <p>
        We use <a target="_blank" href='https://calver.org/' rel="noreferrer">Calendar Versioning</a> for Product releases. So, Product releases have the following pattern: yy.minor.micro(optional)-build, e.g., 23.1 or 23.2.5-768.
      </p>
      <h3>
        Service release
      </h3>
      <p>
        Now we can release services separately from a Product release. Each service is independent of other services and has individual release and versioning. One important thing is to provide backward compatibility.
      </p>
      <p>
        We use <a target="_blank" href='https://semver.org/' rel="noreferrer">Semantic versioning</a> for Service release.
      </p>
      <p>
        The new approach to versions allows us to make fast implementation, testing, and delivery of new features to our users as well as collect and incorporate users' feedback in our product. Besides functional changes this approach will allow us to release non-functional changes like security fixes in the base image or dependencies more easily.
      </p>
    </BlogPageContent>
  </>
);

export default VersionsBlogPage;
