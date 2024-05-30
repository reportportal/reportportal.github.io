import React, { FC, ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import {
  createBemBlockBuilder,
  easeInOutOpacityScaleAnimationProps,
  getSpringTransition,
  LIST_ANIMATION_DELAY,
  opacityScaleAnimationProps,
} from '@app/utils';
import { useAnimationInterval } from '@app/hooks/useAnimationInterval';
import { AnimatedHeader } from '@app/components/AnimatedHeader';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';

import { LinkedCard } from '../LinkedCard';

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
  children: ReactNode;
  listDesktopPosition?: string;
}

const getBlocksWith = createBemBlockBuilder(['animated-list-container']);
const getBlocksWithList = createBemBlockBuilder(['animated-list']);

const cardAnimationProps = {
  hiddenState: {
    opacity: 0,
    x: -50,
  },
  enterState: {
    opacity: 1,
    x: 0,
  },
  transition: {
    ease: 'easeInOut',
    duration: 0.7,
  },
};

export const AnimatedList: FC<AnimatedListProps> = ({
  data,
  title,
  subtitle,
  listDesktopPosition = 'left',
  children,
}) => {
  const { ref, inView, delay, activeListIndex, setIndexAndResetInterval } = useAnimationInterval({
    totalItemsLength: data.length,
    interval: LIST_ANIMATION_DELAY,
  });
  const image = data[activeListIndex].image;
  const isFirstImageAnimationPlayed = useRef(false);

  const getSubtitleAnimation = useMotionEnterAnimation(easeInOutOpacityScaleAnimationProps);
  const getCardAnimation = useMotionEnterAnimation(cardAnimationProps);
  const getButtonsAnimation = useMotionEnterAnimation({
    ...opacityScaleAnimationProps,
    ...getSpringTransition(400, 30),
  });
  const getImageAnimation = useMotionEnterAnimation({
    ...opacityScaleAnimationProps,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  });

  return (
    <section ref={ref} className={classNames(getBlocksWith(), 'container')}>
      <div>
        <AnimatedHeader transition={getSpringTransition(400, 30)}>{title}</AnimatedHeader>
        <motion.h3 {...getSubtitleAnimation({ delay: 0.1, inView })}>{subtitle}</motion.h3>
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
                <motion.li
                  className={getBlocksWithList('__item')}
                  key={itemTitle}
                  onClick={() => setIndexAndResetInterval(index)}
                  {...getCardAnimation({ inView, delay: 0.2 * index })}
                >
                  <strong>{itemTitle}</strong>
                </motion.li>
              ) : (
                <motion.li
                  className={getBlocksWithList('__item', '__item--active')}
                  key={itemTitle}
                  {...getCardAnimation({ inView, delay: 0.2 * index })}
                >
                  <img src={image} alt="" />
                  <LinkedCard
                    itemTitle={itemTitle}
                    description={description}
                    link={link}
                    linkText="Learn more"
                    delay={Boolean(delay)}
                  />
                </motion.li>
              ),
            )}
          </ul>
          <motion.img
            src={image}
            key={image}
            alt=""
            {...getImageAnimation({
              inView,
              delay: isFirstImageAnimationPlayed.current ? 0 : 0.6,
              additionalEffects: {
                transitionAdditional: {
                  duration: isFirstImageAnimationPlayed.current ? 0.5 : 1,
                },
              },
            })}
            onAnimationComplete={definition => {
              if (definition === 'enter') {
                isFirstImageAnimationPlayed.current = true;
              }
            }}
          />
        </div>
        <div className={getBlocksWith('__leading')}>
          <motion.div
            className={getBlocksWith('__leading-button-group')}
            {...getButtonsAnimation({ inView, delay: 1.7 })}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
