import React from 'react';
import Lottie from 'lottie-react';
import { StepProps, Steps } from 'antd';
import classNames from 'classnames';
import { Link } from '@app/components';
import { useAnimationInterval } from '@app/hooks';
import { createBemBlockBuilder, LIST_ANIMATION_DELAY } from '@app/utils';

import { SECTIONS_INFO } from './constants';

import './HowItWorks.scss';

interface Sections extends StepProps {
  title: string;
  content: string;
  animation: unknown;
}

const getBlocksWith = createBemBlockBuilder(['how-it-works']);

const sections: Sections[] | undefined = SECTIONS_INFO.map(section => ({
  ...section,
  status: 'wait',
  description: (
    <>
      <span>{section.content}</span>
      <Lottie animationData={section.animation} loop />
    </>
  ),
}));

export const HowItWorks = () => {
  const { ref, delay, activeListIndex, setIndexAndResetInterval, inView } = useAnimationInterval({
    totalItemsLength: sections.length,
    interval: LIST_ANIMATION_DELAY,
  });

  return (
    <section ref={ref} className={classNames(getBlocksWith(), 'container')}>
      <div>
        <h2>How it works</h2>
      </div>
      <div className={classNames(getBlocksWith('__content'), { 'has-interval': Boolean(delay) })}>
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
