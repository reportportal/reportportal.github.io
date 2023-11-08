import React, { FC } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder, LIST_ANIMATION_DELAY } from '@app/utils';
import { useAnimationInterval } from '@app/hooks';

import { ArrowLink } from '../ArrowLink';

import './AnimatedList.scss';

interface AnimatedListProps {
  data: {
    description: string;
    image: string;
    link: string;
    title: string;
  }[];
  title: string;
  subtitle: string;
  listDesktopPosition: string;
  children: React.ReactNode;
}

const getBlocksWith = createBemBlockBuilder(['animated-list-container']);
const getBlocksWithList = createBemBlockBuilder(['animated-list']);

export const AnimatedList: FC<AnimatedListProps> = ({
  data,
  title,
  subtitle,
  listDesktopPosition = 'left',
  children,
}) => {
  const { ref, delay, activeListIndex, setIndexAndResetInterval } = useAnimationInterval({
    totalItemsLength: data.length,
    interval: LIST_ANIMATION_DELAY,
  });

  const image = data[activeListIndex].image;

  return (
    <section ref={ref} className={classNames(getBlocksWith(), 'container')}>
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <div className={getBlocksWith('__content')}>
        <div
          className={classNames(getBlocksWithList(), {
            [getBlocksWithList('--reversed')]: listDesktopPosition !== 'left',
          })}
        >
          <ul>
            {data.map(({ title: itemTitle, description, link }, index) =>
              index !== activeListIndex ? (
                <li
                  className={getBlocksWithList('__item')}
                  key={itemTitle}
                  onClick={() => setIndexAndResetInterval(index)}
                >
                  <strong>{itemTitle}</strong>
                </li>
              ) : (
                <li
                  className={classNames(
                    getBlocksWithList('__item'),
                    getBlocksWithList('__item--active'),
                  )}
                  key={itemTitle}
                >
                  <img src={image} alt="" />
                  <div className={getBlocksWithList('__card')}>
                    <strong>{itemTitle}</strong>
                    <p>{description}</p>
                    <ArrowLink mode="primary" to={link} text="Learn more" />
                    {delay && <div className={getBlocksWithList('__card-progress')} />}
                  </div>
                </li>
              ),
            )}
          </ul>
          <img src={image} alt="" />
        </div>
        <div className={getBlocksWith('__leading')}>
          <div className={getBlocksWith('__leading-button-group')}>{children}</div>
        </div>
      </div>
    </section>
  );
};
