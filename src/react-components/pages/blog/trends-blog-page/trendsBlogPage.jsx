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
import TrendsBackgroundImage from './img/trendsBackground.svg';
import BlogPageHeader from '../common/blog-page-header/blogPageHeader';
import BlogPageContent from '../common/blog-page-content/blogPageContent';

const TrendsBlogPage = () => (
  <>
    <BlogPageHeader
      tags={['AutomatedTestingTrends2023']}
      date={'June 22, 2023'}
      background={TrendsBackgroundImage}
    />
    <BlogPageContent title={'Trends in automated testing in 2023'}>
      <p>
        Many years ago, software testing was about manual efforts only. Nowadays, the role of automation testing has significantly increased. Currently, thanks to evolution in technologies, automation testing process is the blending of automation and artificial intelligence. Keep up with trends!
      </p>
      <h3>
        Do In-Sprint Automation
      </h3>
      <p>
        It is an approach to create auto-tests within the same sprint in which business requirements have been developed.
      </p>
      <p>
        The main goal here is faster defining of potential errors.
      </p>
      <p>
        It also helps to speed up the testing activities: any new feature should be tested along with others, and automation accelerates this procedure.
      </p>
      <h3>
        Choose a proper test automation reporting tool
      </h3>
      <p>
        A good platform can help you to manage the entire automation lifecycle.
      </p>
      <p>
        It should have possibilities to integrate with other tools you are using, such as test framework, bug tracking system, CI/CD tool.
      </p>
      <p>
        ReportPortal has all the above and other increased capabilities to speed up test results analysis and reporting.
      </p>
      <h3>
        Use Machine Learning and Artificial Intelligence
      </h3>
      <p>
        Thanks to AI, automated defect triaging becomes possible.
      </p>
      <p>
        Let's see how it works using the ReportPortal example: the more you analyze test results, the better ML will be trained to analyze those failures instead of you. So, once you receive the latest test execution report, ML will look through and mark failures according to previously found issues. While manually triaging, it will suggest to you the equal or similar fails.
      </p>
      <h3>
        Switch to shift-left testing
      </h3>
      <p>
        Traditionally the development cycle looks like this: developers finish their work, then pass it on to the QA team who test and give the results back to the DEV team to fix. The cycle would then be repeated as many times as required.
      </p>
      <p>
        The shift-left testing trend aims to move testing closer to the beginning of the software development process to detect bugs and identify risks early in the product life cycle.
      </p>
      <p>
        Shift-left testing requires testing and revisions daily, and it is closely related to Continuous Testing.
      </p>
      <h3>
        Follow Continuous Testing
      </h3>
      <p>
        It is testing throughout the pipeline.
      </p>
      <p>
        ReportPortal supports Continuous Testing with <a target="_blank" href='https://reportportal.io/docs/category/quality-gates/' rel="noreferrer">Quality Gates</a> functionality.
      </p>
      <p>
        You can define the set of rules for a successful run, and ReportPortal will automatically send Go/No-Go Decision to CI/CD.
      </p>
      <h3>
        Have persistent reporting
      </h3>
      <p>
        A good approach would also be continuously monitoring the results of the automated tests.
      </p>
      <p>
        ReportPortal helps you to build persistent reporting across your project. ReportPortal collects the results from different places. No matter – you run tests just on the local environment, or with Jenkins job, or using Gitlab. ReportPortal is a single-entry point for all your test automation results. It will give you the history of executions and solid evidence of the amount of test cases in the suite and the passing rate.
      </p>
      <p>
        ReportPortal provides unified reporting across different layers. It might be API test cases, end-to-end tests, UI test cases, or integration test cases. No matter what type of testing you do, what test framework and even programming language you use: in ReportPortal, for example, JavaScript-based test cases and Python-based test cases look the same. This gives you the possibility to get easily readable reports for manual QAs and developers, and stakeholders.
      </p>
      <p>
        For effective test automation following the trends is not enough. Equally important is collaboration and communication in the team, a well-defined testing strategy, and properly organized test management. All this in a complex allows to deliver excellent software products.
      </p>
    </BlogPageContent>
  </>
);

export default TrendsBlogPage;
