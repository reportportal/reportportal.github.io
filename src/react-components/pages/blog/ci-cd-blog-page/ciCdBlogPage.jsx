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
import CiCdBackgroundImage from './img/ciCdBackground.svg';
import BlogPageHeader from '../common/blog-page-header/blogPageHeader';
import BlogPageContent from '../common/blog-page-content/blogPageContent';

const CiCdBlogPage = () => (
  <>
    <BlogPageHeader
      tags={['CICD', 'TestAutomationTips']}
      date={'August 9, 2023'}
      background={CiCdBackgroundImage}
    />
    <BlogPageContent title={'Tips and tricks for successful CI/CD'}>
      <p>
        The main goal of CI/CD is to reduce lead time. This is an important metric that shows how quickly a new feature goes into production. With perfect CI, this process can take just a few minutes. What do we need to deliver features with such speed? Here are some recommendations from the EPAM Test Automation community (Mikalai Biazruchka, Oleksandr Halichenko, Yauhen Klimiashuk, Dzmitry Prakapuk).
      </p>
      <h3>
        Define a Git branching strategy and environment strategy
      </h3>
      <p>
        Continuous Delivery/Deployment is the process of validating and delivering a product to pre-production and production environments. This process goes through the available environments. Git branching strategy and environment strategy are interrelated and define the product build process – from which branch to which environment. If the Git branching strategy and environment strategy are not coordinated, then, accordingly, the process of delivering the product to pre-production and production will not be transparent and may exclude the possibility of building a CI/CD process.
      </p>
      <h3>
        Define quality gates
      </h3>
      <p>
        A quality gate is a set of step-by-step quality checks that help determine if we can proceed to the next stage or not. Examples of quality gates in development include code review, different linters, vulnerability detection via Sonar, and unit tests. Examples of quality gates in automation include smoke tests, running all tests, or some tests on changed objects.
      </p>
      <p>
        By the way, <a target="_blank" href='https://reportportal.io/' rel="noreferrer">ReportPortal</a>, as a continuous testing platform, has a premium <a target="_blank" href='https://reportportal.io/docs/quality-gates/QualityGatePurpose' rel="noreferrer">Quality Gates feature</a>.
      </p>
      <h3>
        Choose the right CI tool
      </h3>
      <p>
        The best option would be the tool that comes with the code repository: GitHub Actions for GitHub, Azure Pipelines for Azure DevOps, and GitLab CI for GitLab.
      </p>
      <h3>
        Implement CI/CD as soon as possible
      </h3>
      <p>
        Ideally, after every developer’s commit, the entire range of checks should be started: static code analysis, unit tests, code style analysis, integration tests, and end-to-end tests, including UI and API. These checks are aimed at building a Continuous Delivery process where we not only collect (integrate) everything but also deploy somewhere or provide artifacts, such as docker images. In the ideal world, each commit should turn into a new deployment to production.
      </p>
      <h3>
        Learn the toolset of the platform you are working with
      </h3>
      <p>
        Each platform has its own set of commands and tools that are used for CI/CD-specific purposes. It happens that those who work, for example, on .NET do not know the Command-line interface (CLI) very well. Accordingly, a person who does not know the CLI will not be able to create a full-fledged CI process for the platform in question.
      </p>
      <h3>
        Use static code analysis
      </h3>
      <p>
        Each platform has its tools to evaluate code quality. You should not only install them but also pay attention to what they offer because this provides serious feedback that will help to improve the quality of the code and prevent serious errors. These tools are easy to set up and take little time, but their value is significant.
      </p>
      <h3>
        Consider the pipeline's execution time
      </h3>
      <p>
        Developers expect the CI pipeline to run in less than 30 minutes. This is the best practice now. If the pipeline takes longer, you need to think about how to fix it. This is where caching can help. It speeds up the CI pipeline a lot since we don't have to rebuild dependencies. On the other hand, caching introduces a certain element of instability because the cache may be invalid or outdated, which can lead to unexpected crashes.
      </p>
      <h3>
        Use parallel jobs
      </h3>
      <p>
        Using parallel CI/CD jobs increases productivity. If you can parallelize specific steps without losing the validity of the pipeline's feedback, then it always makes sense to do that.
      </p>
      <h3>
        Use detailed logging
      </h3>
      <p>
        Additional logging helps not only with the development of the CI/CD pipeline but also with its maintenance. When something goes wrong, having granularly split steps inside CI/CD and the correct logging makes finding a problem in the pipeline much easier. It becomes easier to understand what is happening and how it is happening. For example, if we produce some artifact, it would be nice to properly name it so that it is clear what it is, why it is needed, and where it came from.
      </p>
      <h3>
        Use a pipeline-as-code approach
      </h3>
      <p>
        The recommended approach is to create the pipeline in YAML format or the form of JSON or some kind of executable script: it is located next to the code; it is easy for versioning and easy to change.
      </p>
      <p>
        Inexperienced engineers often use a graphical interface to create a pipeline. This works well, but when something needs to be changed, questions arise: who changed it, what was changed, and when. Besides, if something went wrong after some change, it is problematic to find this change and revert it. Nowadays, almost all major platforms support the pipeline-as-code format, which allows you to write pipelines in text form.
      </p>
      <p>
        It may seem difficult at the beginning of using this approach. But once you get comfortable with the syntax, it gives you more flexibility, and becomes more robust. If you need to transfer the pipeline from one project to another, then it will be just copying the file. If a graphical interface is used, it will most likely need to be recreated from scratch, where something can be forgotten, lost or overlooked.
      </p>
      <h3>
        Collaborate with the development team
      </h3>
      <p>
        Automation should be in cooperation with the development team. Then, it will be possible to build an effective delivery process and avoid gray areas. It is necessary so that the development team can always indicate what should be paid attention to.
      </p>
      <h3>
        Optimize the test set for each stage
      </h3>
      <p>
        Automate as much as possible but define clear timelines for each stage (sanity – on push, smoke – daily, regression – every week, etc.). Generally, test design is very important to have a well-established CI/CD process. Poorly prepared tests can take a long time to run or check the wrong thing.
      </p>
      <h3>
        Optimize version control system (VCS) flows
      </h3>
      <p>
        Minimize branching to avoid high efforts on the code merge process. Encourage teams to merge frequently to avoid lots of branches per engineer.
      </p>
      <h3>
        Keep a stable infrastructure for testing
      </h3>
      <p>
        It is great when autotests are integrated into the CI/CD pipeline, and at the same time, it is important that the tests run quickly, and the results don't depend on the infrastructure. For example, if we have 8 threads but only 5 browsers available, then use cloud providers (BrowserStack, Mobitru, SauceLabs) to speed up your test execution via parallel execution.
      </p>
      <h3>
        Use centralized test reporting tools
      </h3>
      <p>
        Test automation reporting tools have enough capabilities to analyze test results and provide clear reports to the stakeholders. It is very convenient to have everything in one place and allows you to get the green light earlier. This is also evidence that the Continuous Delivery process is effective.
      </p>
      <p>
        By following these tips, you can build effective CI/CD, streamline the development process, and improve software quality.
      </p>
    </BlogPageContent>
  </>
);

export default CiCdBlogPage;
