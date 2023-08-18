import React from 'react';
import Lottie from 'lottie-react';
import { Steps } from 'antd';
import cx from 'classnames';

import { useAnimationInterval } from '../../../hooks';
import { createBemBlockBuilder } from '../../../utils';
import { Link } from '../../Link';
import animation1 from './animations/RP_Anim_1.json';
import animation2 from './animations/RP_Anim_2.json';
import animation3 from './animations/RP_Anim_3.json';
import animation4 from './animations/RP_Anim_4.json';
import animation5 from './animations/RP_Anim_5.json';

import './HowItWorks.scss';

const getBlocksWith = createBemBlockBuilder(['how-it-works']);

const sections = [
  {
    title: 'Acquiring test results',
    content:
      'Coalescing test results across various platforms, frameworks and programming languages and providing actionable insights',
    animation: animation1,
  },
  {
    title: 'Predictive AI root cause analysis',
    content:
      'Leveraging ML algorithms to identify patterns in the test results, detect the root cause of failures, and predict future test results (Predictive AI root cause analysis /root cause detection)',
    animation: animation2,
  },
  {
    title: 'AI-assisted failure triage',
    content:
      'Assisting the manual review of test logs and new failure patterns for the most recent test executions',
    animation: animation3,
  },
  {
    title: 'Automated Quality Gates',
    content:
      'Facilitating automated decision making for release pipelines based on specified testing criteria and results',
    animation: animation4,
  },
  {
    title: 'Dashboards & History',
    content:
      'Visualizing test results in an easy-to-understand way, allowing to monitor test trends, detect patterns, generate insights and make informed business decisions',
    animation: animation5,
  },
].map(section => ({
  ...section,
  status: 'wait',
  description: (
    <>
      <span>{section.content}</span>
      <Lottie animationData={section.animation} loop />
    </>
  ),
}));

const LIST_ANIMATION_DELAY = 10000;

export const HowItWorks = () => {
  const { ref, delay, activeListIndex, setIndexAndResetInterval, inView } = useAnimationInterval({
    totalItemsLength: sections.length,
    interval: LIST_ANIMATION_DELAY,
  });

  return (
    <section ref={ref} className={cx(getBlocksWith(), 'container')}>
      <div>
        <h2>How it works</h2>
      </div>
      <div className={cx(getBlocksWith('__content'), { 'has-interval': Boolean(delay) })}>
        <Steps
          direction="vertical"
          progressDot
          current={activeListIndex}
          items={sections}
          onChange={setIndexAndResetInterval}
        />
        {inView && (
          <div className={getBlocksWith('__step-content')}>
            <Lottie animationData={sections[activeListIndex].animation} loop />
            <div className={getBlocksWith('__step-content-text')}>
              <div className={getBlocksWith('__step-content-text-title')}>
                {sections[activeListIndex].title}
              </div>
              <div className={getBlocksWith('__step-content-text-description')}>
                {sections[activeListIndex].content}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={getBlocksWith('__button-group')}>
        <Link className="btn btn--primary btn--large" to="/installation">
          Learn how to install
        </Link>
      </div>
    </section>
  );
};
