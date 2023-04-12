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
import classNames from 'classnames/bind';
import testsHierarchyImage from './img/testsHierarchy.jpg';
import useAttributesImage from './img/useAttaributes.jpg';
import similarToInvestigateImage from './img/similarToInvestigate.jpg';
import foundByAnalyzerImage from './img/foundByAnalyzer.jpg';
import mlSuggestionsInMakeDecisionImage from './img/mlSuggestionsInMakeDecision.jpg';
import uniqueErrorsAnalysisImage from './img/uniqueErrorsAnalysis.jpg';
import integrateWithBtsImage from './img/integrateWithBts.jpg';
import customDefectTypesImage from './img/customDefectTypes.jpg';
import manualTestsImage from './img/manualTests.jpg';
import manualTestsDifferenceImage from './img/manualTestsDifference.jpg';
import overallStatisticsWidgetImage from './img/overallStatisticsWidget.jpg';
import notificationsImage from './img/notifications.jpg';
import qualityGatesImage from './img/qualityGates.jpg';
import BenefitsBackgroundImage from './img/benefitsBackground.svg';
import BlogPageHeader from '../common/blog-page-header/blogPageHeader';
import BlogPageContent from '../common/blog-page-content/blogPageContent';
import Notice from '../common/notice/notice';
import styles from './benefitsBlogPage.scss';

const cx = classNames.bind(styles);

const BenefitsBlogPage = () => (
  <>
    <BlogPageHeader
      tags={['tips and tricks']}
      date={'February 13, 2023'}
      background={BenefitsBackgroundImage}
    />
    <BlogPageContent title={'Tips to get ReportPortal benefits'}>
      <p>
        ReportPortal is a one-stop solution to manage all your automation results and reports in one place. In this article our QA engineers shared their advice on how to use all ReportPortal capabilities to reduce test results analysis efforts and get pure visibility about product's health.
      </p>
      <h3>1. Use hierarchy in tests</h3>
      <p>
        You can run your tests on the Launch level only. But in this way, it's hard to understand what they refer to. Because all of them will have the same type.
      </p>
      <p>
        Our advice is to use the next hierarchy in your tests in ReportPortal: Launch – Suite – Test – Step. For example, you can distribute your tests by areas using Suite level. Thus, it will be easy to recognize what functionality the failed tests belong to.
      </p>
      <img src={testsHierarchyImage} alt="Tests hierarchy" />
      <h3>2. Use Test Case ID attribute</h3>
      <p>
        The best way to distinguish test cases one from another is a TestCaseID. This is a fundamental attribute for the test case history and re-tries. If there is no TestCaseID defined explicitly the ReportPortal agent will generate it based on Code-Reference and parameters.
      </p>
      <p>
        Explicitly Test Case ID can be added programmatically in code, via attributes: <a rel="noreferrer" target="_blank" href="https://github.com/reportportal/client-java/wiki/Test-case-ID">TestCaseID</a>.
      </p>
      <h3>3. Choose the relevant Launch name</h3>
      <p>
        If you are running different types of tests (Unit, API, UI), specify this in the Launch name. Thus, it will be clear for the whole team: what is this Launch used for?
      </p>
      <h3>4. Use attributes properly</h3>
      <p>
        You can describe the environment or version using attributes. What is more, you can filter test executions by these attributes.
      </p>
      <p>
        Sometimes users define the owner of the launch via attributes as well. But we recommend another way: when running tests, use the Access token of the person who is responsible for this launch (it can be copied from the Profile page in ReportPortal). So, the specified user's name will be displayed as the owner.
      </p>
      <img src={useAttributesImage} alt="Use attributes" />
      <h3>5. Configure reporting tests via CI/CD</h3>
      <p>
        You can run tests locally. But the best practice is reporting tests to ReportPortal via CI/CD pipeline (for example, Jenkins).
      </p>
      <p>This way the whole team can run tests and view the results.</p>
      <h3>
        6. Search for the similar "To investigate" items
      </h3>
      <p>
        Most often you can see several "To investigate" items when reviewing the test results of the first run in ReportPortal. There are a few tips to make the analysis easier.
      </p>
      <p>
        Open "Make Decision" modal for an item with "To investigate", wait for "Apply for..." section to be fully displayed. Now you can see all the <a rel="noreferrer" target="_blank" href="https://reportportal.io/docs/analysis/SearchForTheSimilarToInvestigateItems/">similar "To investigate" items</a>. You can select all identical failures and perform the bulk operation for them. It speeds up test results analysis noticeably.
      </p>
      <img src={similarToInvestigateImage} alt={'Similar "To investigate" items'} />
      <h3>
        7. Use Analyzer and ML suggestions
      </h3>
      <p>
        You can delegate a part of the routine duties to the Analyzer. For example, you have 100+ failed tests. You can open every test and explore every test log to find the reason for failure. But it will take a long time.
      </p>
      <p>
        As an alternative, you can run <a rel="noreferrer" target="_blank" href="https://reportportal.io/docs/analysis/AutoAnalysisOfLaunches/">Auto-Analysis</a>. Analyzer will find all known issues and will link corresponding defects based on your previous investigation results. After that, you only have to check (like a controller) whether everything was found by Analyzer.
      </p>
      <img src={foundByAnalyzerImage} alt="Found by Analyzer" />
      <p>
        If there are still some "To investigate" items left, just open <a rel="noreferrer" target="_blank" href="https://reportportal.io/docs/analysis/ManualAnalysis/">"Make Decision" modal</a> and look at the <a rel="noreferrer" target="_blank" href="https://reportportal.io/docs/analysis/MLSuggestions/">ML Suggestions</a>. This functionality suggests the best options to categorize issues. It is a real time-saver for testers.
      </p>
      <p>
        Note: Auto-Analysis and ML suggestions are useful in subsequent runs only after you do manual analysis in the first runs.
      </p>
      <img src={mlSuggestionsInMakeDecisionImage} alt={'ML suggestions in "Make decision" modal'} />
      <h3>
        8. Use Unique Errors Analysis
      </h3>
      <p>
        One more feature to facilitate tests results analysis is <a rel="noreferrer" target="_blank" href="https://reportportal.io/docs/analysis/UniqueErrorAnalysis/">"Unique Errors"</a>.
      </p>
      <p>
        Let’s imagine, you have 20 failures. Click on the Launch name and open the "Unique Errors" tab. Here you will find common errors for several failures. So, you can see 8 errors instead of 20, for example. Expand an error to check what tests belong to the same one. Then you can select some items and apply defect type/link issue/post issue for them via bulk update.
      </p>
      <img src={uniqueErrorsAnalysisImage} alt={'Unique Errors Analysis'} />
      <h3>
        9. Integrate ReportPortal with BTS
      </h3>
      <p>
        Thanks to the integration with Bug Tracking Systems (
        <a rel="noreferrer" target="_blank" href="https://reportportal.io/docs/plugins/JiraServer/">
          Jira Server
        </a>
        ,{' '}
        <a rel="noreferrer" target="_blank" href="https://reportportal.io/docs/plugins/JiraCloud/">
          Jira Cloud
        </a>
        ,{' '}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://reportportal.io/docs/plugins/AzureDevOpsBTS/"
        >
          Azure DevOps BTS
        </a>
        ,{' '}
        <a rel="noreferrer" target="_blank" href="https://reportportal.io/docs/plugins/Rally/">
          Rally
        </a>
        ) you will spend time once – when creating an issue.
      </p>
      <p>
        Further, Analyzer will find known issues and promptly link the corresponding BTS tickets.
        <br />
        This feature also speeds up test results analysis and reporting.
      </p>
      <img src={integrateWithBtsImage} alt={'Integrate with BTS'} />
      <h3>
        10. Use custom defect types
      </h3>
      <p>
        There are 4 main defect types in ReportPortal: Product Bug, Automation Bug, System Issue, and there is also "No Defect " group.
      </p>
      <p>
        Custom defect types help to identify the most problematic area. For example, you have 5 Product Bugs, and you can specify each of them by functionality.
      </p>
      <p>
        Another case: you can create "Manually Passed" defect type under "No Defect " group if the test is passed manually. It will help not to affect the overall statistic of the run.
      </p>
      <Notice contentClassName={cx('notice-wider-text')}>
        <b className={cx('blue')}>Recommendation:</b> to simplify the analysis, add the “Under
        Investigation” custom defect type or create custom defect type with the assignee name (for
        example, “Issue for Rob”). So other team members won't spend time analyzing such tests. This
        is about how to work in a big team without spending time on direct tasks assignments. Use
        comments as well for additional information or clarification on the issue, to better
        understand its context and potential causes.
      </Notice>
      <img src={customDefectTypesImage} alt={'Custom defect types'} />
      <h3>
        11. Send manual tests in ReportPortal
      </h3>
      <p>
        There is a possibility to send tests from QaSpace (Jira plugin) to ReportPortal. It allows to get manual tests results as well and include them in the statistics via widgets.
      </p>
      <p>
        To configure QaSpace with ReportPortal, copy Access Token from the profile on ReportPortal and use it as API Token for ReportPortal Configuration:
      </p>
      <img src={manualTestsImage} alt={'Manual tests'} />
      <p>
        Launches from QaSpace are displayed in ReportPortal like normal launches. The only difference is Test Steps are shown as a Log message.
      </p>
      <img src={manualTestsDifferenceImage} alt={'Manual tests difference'} />
      <h3>
        12. Create widgets
      </h3>
      <p>
        You can create different widgets when all failures are investigated. Widgets show the application quality by area, component, environment on 1 Launch or several Launches.
      </p>
      <p>
        You can include manual tests from QaSpace in the widgets as well.
      </p>
      <p>
        Widgets help to see the product's health.
      </p>
      <p>
        The most popular widget is <a rel="noreferrer" target="_blank" href="https://reportportal.io/docs/dashboards-and-widgets/OverallStatistics/">"Overall Statistics"</a>. You can use it (just by doing the screenshot or attaching a link to the dashboard in ReportPortal) in test results reports.
      </p>
      <img src={overallStatisticsWidgetImage} alt={'Overall Statistics widget'} />
      <h3>
        13. Use notifications
      </h3>
      <p>
        You can apply custom rules with specific conditions to send a notification on percentage of failed items which is very useful and helps to avoid unnecessary pings in case of random failures.
      </p>
      <img src={notificationsImage} alt={'Notifications'} />
      <h3>
        14. Use Quality Gates
      </h3>
      <p>
        Let’s imagine an ideal test run: no Product Bugs, the percent of failure for all tests is 0 %. Create a <a rel="noreferrer" target="_blank" href="https://reportportal.io/docs/category/quality-gates/">Quality Gate</a> with these rules.
      </p>
      <p>
        While the Quality Gate is running, ReportPortal verifies testing results against the required conditions. It prevents the code from moving forward if it doesn’t meet the criteria.
      </p>
      <img src={qualityGatesImage} alt={'Quality Gates'} />
      <p>
        We hope these tips will help you improve your interaction with ReportPortal and get maximum value for your testing team and the entire project.
      </p>
    </BlogPageContent>
  </>
);

export default BenefitsBlogPage;
