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
import AiBasedDefectsTriageImage from './img/aiBasedDefectsTriage.png';
import MlSuggestionImage from './img/mlSuggestion.png';
import UniqueErrorsImage from './img/uniqueErrors.png';
import QualityGateConfigurationImage from './img/qualityGateConfiguration.png';
import AIBackgroundImage from './img/aiBackground.svg';
import BlogPageHeader from '../common/blog-page-header/blogPageHeader';
import BlogPageContent from '../common/blog-page-content/blogPageContent';
import Notice from '../common/notice/notice';
import List from '../common/list/list';
import styles from './aiBlogPage.scss';

const cx = classNames.bind(styles);

const steps = [
  'Auto-Analysis is ON.',
  'Quality Gates functionality is ON.',
  'Integration with Jenkins is configured.',
  'Launch is finished.',
  'Auto-Analysis performs automated defect triaging and sets defect types.',
  'ReportPortal assesses Launch quality using the created Quality Gates rules.',
  'ReportPortal sends auto feedback to CI/CD tool with status Passed or Failed.',
  'Based on ReportPortal feedback, CI/CD tool fails a build or promotes it to the next stage.',
];

const AiBlogPage = () => (
  <>
    <BlogPageHeader
      tags={['AI']}
      date={'April 13, 2023'}
      background={AIBackgroundImage}
    />
    <BlogPageContent title={'How we use AI'}>
      <p>
        Over the last few years Artificial Intelligence (AI) has been changing the testing process in many ways. Robots are programmed to think and act as human beings. What is more, they do tasks at high speed and with accuracy, and they don’t get bored with it.
      </p>
      <p>
        Let’s see how ReportPortal uses AI power for the key features: Analyzer, Unique errors, Machine Learning (ML) suggestions, Quality Gates.
      </p>
      <h3>
        AI for shift-left testing
      </h3>
      <p>
        According to the shift-left testing approach, you should run automation tests regularly so that you understand what is happening as quickly as possible. For example, you can run a daily regression to check what happened to a product after a new code merge. Accordingly, with many runs, it will take a lot of time to analyze the test results. This is where AI comes to the rescue.
      </p>
      <p>
        You can train Analyzer, and then it will take a part of your test failure analysis routine work and set a defect type, a link to Bug Tracking System (BTS) (in case it exists), comment (in case it exists). How does it work? We can mark 1 of the bugs as a System Issue in 10 Launches and put it as a Product Bug in Launch 11. So, the Analyzer will mark this issue as a Product Bug the next time it is started.
      </p>
      <img src={AiBasedDefectsTriageImage} alt="AI-based defects triage" />
      <Notice>
        <b className={cx('blue')}>Note: </b>The total count of tests should be the same every time for a specific Launch. Don’t skip the tests.
      </Notice>
      <p>
        If Auto-Analysis didn’t define any failures, you can open “Make decision” modal and see ML Suggestion for this item. AI will tell you that the error log is very similar to another log. You can compare these logs and apply the defect type from ML suggestion or set it manually.
      </p>
      <img src={MlSuggestionImage} alt="ML Suggestion" />
      <p>
        One more feature with AI-based defects triage is Unique Errors. The system automatically groups tests by the same errors: when you expand some error log, you see a list of steps where it occurred. It is very convenient when preliminary work has already been done instead of you. Thus, you can select these grouped by AI items and apply a defect type for them using bulk operation.
      </p>
      <img src={UniqueErrorsImage} alt="Unique Errors" />
      <h3>
        AI for CI/CD pipepline
      </h3>
      <p>
        ReportPortal speeds up a CI/CD pipeline thanks to Quality Gates feature, which has AI-driven “New errors” rule. In what situation can it be useful? Suppose you have already identified some errors, and they are minor, and you can go to release with them, and there is one more build to test. If you care about new unique bugs, you can create Quality Gate with “New errors” rule which works in conjunction with the Unique Errors functionality. Quality Gate will fail if a new defect is detected.
      </p>
      <p>
        “Amount of issues” Quality Gate rule is relevant to AI as well because Quality Gate with this rule is running after finish of Auto-Analysis. For example, if you have the rule “fail Quality Gate if there is at least 1 Product Bug”, and Auto-Analysis happens and marks an issue as Product Bug, then Quality Gate fails.
      </p>
      <img src={QualityGateConfigurationImage} alt="Quality Gate Configuration" />
      <p>
        Overall, thanks to AI, you can get a test execution report and evaluate product health without any clicks. This magic process step by step:
      </p>
      <p>
        <List
          list={steps}
          isSimple
        />
      </p>
      <p>
        AI enhances the value of ReportPortal by saving your time and resources on automation tests results analysis (consequently – reducing costs). AI highlights areas that require more testing and attention. This can help stakeholders quickly understand the quality of the product and make informed decisions.
      </p>
    </BlogPageContent>
  </>
);

export default AiBlogPage;
