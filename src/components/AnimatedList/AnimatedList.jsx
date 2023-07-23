import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { useRafInterval } from 'ahooks';
import cx from 'classnames';

import { createBemBlockBuilder, mediaDesktopSm } from '../../utils';
import { ArrowLink } from '../ArrowLink';

import './AnimatedList.scss';

const getBlocksWith = createBemBlockBuilder(['animated-list-container']);
const getBlocksWithList = createBemBlockBuilder(['animated-list']);

const LIST_ANIMATION_DELAY = 10000;

export const AnimatedList = ({ data, title, subtitle, listDesktopPosition = 'left' }) => {
  const [activeListIndex, setActiveListIndex] = useState(0);
  const [delay, setDelay] = useState(undefined);
  const [ref, inView] = useInView();
  const isDesktop = useMediaQuery({ query: mediaDesktopSm });

  useRafInterval(() => {
    setActiveListIndex((prevState) => (prevState === data.length - 1 ? 0 : prevState + 1));
  }, delay);

  useEffect(() => {
    setDelay(inView ? LIST_ANIMATION_DELAY : undefined);
  }, [inView]);

  const image = data[activeListIndex].image;

  return (
    <section ref={ref} className={cx(getBlocksWith(), 'container')}>
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <div className={getBlocksWith('__content')}>
        <div
          className={cx(getBlocksWithList(), {
            [getBlocksWithList('--reversed')]: isDesktop && listDesktopPosition !== 'left',
          })}
        >
          <ul>
            {data.map(({ title: itemTitle, description }, index) =>
              index !== activeListIndex ? (
                <li
                  className={getBlocksWithList('__item')}
                  key={itemTitle}
                  onClick={() => {
                    setDelay();
                    setActiveListIndex(index);
                  }}
                >
                  <strong>{itemTitle}</strong>
                </li>
              ) : (
                <li
                  className={cx(getBlocksWithList('__item'), getBlocksWithList('__item--active'))}
                  key={itemTitle}
                >
                  {!isDesktop && <img src={image} alt="" />}
                  <div className={getBlocksWithList('__card')}>
                    <strong>{itemTitle}</strong>
                    <p>{description}</p>
                    <ArrowLink mode="primary" to="#" text="Learn more" />
                    {delay && <div className={getBlocksWithList('__card-progress')} />}
                  </div>
                </li>
              ),
            )}
          </ul>
          {isDesktop && <img src={image} alt="" />}
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
