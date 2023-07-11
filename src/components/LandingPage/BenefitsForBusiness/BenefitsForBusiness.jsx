import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { useRafInterval } from 'ahooks';
import cx from 'classnames';

import { createBemBlockBuilder, mediaDesktopSm } from '../../../utils';
import { ArrowLink } from '../../ArrowLink';

import benefitsIcon1 from './icons/benefits-1.svg';
import benefitsIcon2 from './icons/benefits-2.svg';
import benefitsIcon3 from './icons/benefits-3.svg';
import benefitsIcon4 from './icons/benefits-4.svg';
import benefitsIcon5 from './icons/benefits-5.svg';

import './BenefitsForBusiness.scss';

const getBlocksWith = createBemBlockBuilder(['benefits-for-business']);
const getBlocksWithList = createBemBlockBuilder(['benefits-for-business-list']);

const LIST_ANIMATION_DELAY = 10000;
const benefitsForBusinessList = [
  {
    title: 'Automated decision-making',
    description:
      'You can easily integrate ReportPortal with all yours test frameworks, aggregate all tests of a project in one place and browse them.',
    image: benefitsIcon1,
  },
  {
    title: 'Testing status visibility',
    description:
      'Get pure visibility in testing status across various environments by means of dashboards and history',
    image: benefitsIcon2,
  },
  {
    title: 'Transparency of test failures reason',
    description: 'Detect the root causes of failures and categorize the failures faster',
    image: benefitsIcon3,
  },
  {
    title: 'Time saving for teams',
    description:
      'AI-based failures triaging will help you to spend less time and efforts on manual analysis of test failure reasons',
    image: benefitsIcon4,
  },
  {
    title: 'Tracking of key metrics and KPI',
    description:
      'You can easily integrate ReportPortal with all yours test frameworks, aggregate all tests of a project in one place and browse them.',
    image: benefitsIcon5,
  },
];

export const BenefitsForBusiness = () => {
  const [activeListIndex, setActiveListIndex] = useState(0);
  const [delay, setDelay] = useState(undefined);
  const [ref, inView] = useInView();
  const isDesktop = useMediaQuery({ query: mediaDesktopSm });

  useRafInterval(() => {
    setActiveListIndex((prevState) =>
      prevState === benefitsForBusinessList.length - 1 ? 0 : prevState + 1,
    );
  }, delay);

  useEffect(() => {
    if (inView) {
      setDelay(LIST_ANIMATION_DELAY);
    }
  }, [inView]);

  const benefitsImage = benefitsForBusinessList[activeListIndex].image;

  return (
    <section ref={ref} className={cx(getBlocksWith(), 'container')}>
      <div>
        <h2>Benefits for business</h2>
        <h3>Features full of benefits from business perspective</h3>
      </div>
      <div className={getBlocksWith('__content')}>
        <div className={getBlocksWithList()}>
          <ul>
            {benefitsForBusinessList.map(({ title, description }, index) =>
              index !== activeListIndex ? (
                <li
                  className={getBlocksWithList('__item')}
                  key={title}
                  onClick={() => {
                    setDelay();
                    setActiveListIndex(index);
                  }}
                >
                  <strong>{title}</strong>
                </li>
              ) : (
                <li
                  className={cx(getBlocksWithList('__item'), getBlocksWithList('__item--active'))}
                  key={title}
                >
                  {!isDesktop && <img src={benefitsImage} alt="" />}
                  <div className={getBlocksWithList('__card')}>
                    <strong>{title}</strong>
                    <p>{description}</p>
                    <ArrowLink mode="primary" to="#" text="Learn more" />
                    {delay && <div className={getBlocksWithList('__card-progress')} />}
                  </div>
                </li>
              ),
            )}
          </ul>
          {isDesktop && <img src={benefitsImage} alt="" />}
        </div>
        <div className={getBlocksWith('__leading')}>
          <div className={getBlocksWith('__leading-button-group')}>
            <button className="btn btn--primary btn--large">Start free trial</button>
            <button className="btn btn--outline btn--large">Get a quote</button>
          </div>
        </div>
      </div>
    </section>
  );
};
