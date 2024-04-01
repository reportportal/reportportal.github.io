import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';
import { useInView } from '@app/hooks/useInView';

import './WhyInstanceBlocks.scss';

interface Explanation {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface WhyInstanceBlocksProps {
  title: string;
  explanations: Explanation[];
  withAnimation?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['why-instance-blocks']);
const getBlocksWithList = createBemBlockBuilder(['why-instance-blocks-list']);

const commonAnimationProps = {
  hiddenState: {
    opacity: 0,
    scale: 0.5,
  },
  enterState: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
  },
};
const cardAdditionalAnimationProps = {
  hiddenAdditional: {
    y: 50,
  },
  enterAdditional: {
    y: 0,
  },
};

export const WhyInstanceBlocks: FC<WhyInstanceBlocksProps> = ({
  title,
  explanations,
  withAnimation = false,
}) => {
  const [titleRef, isTitleInView] = useInView({ once: true });
  const [explanationsRef, areExplanationsInView] = useInView({ once: true, margin: '-20%' });

  const getAnimation = useMotionEnterAnimation(commonAnimationProps, withAnimation);

  return (
    <section className={classNames(getBlocksWith(), 'container')}>
      <motion.h2
        className={getBlocksWith('__title')}
        ref={titleRef}
        {...getAnimation({ inView: isTitleInView })}
      >
        {title}
      </motion.h2>
      <div className={getBlocksWith('__content')}>
        <ul className={getBlocksWithList()} ref={explanationsRef}>
          {explanations.map(({ icon, title, description }) => (
            <li key={title}>
              <motion.div
                {...getAnimation({
                  inView: areExplanationsInView,
                  additionalEffects: cardAdditionalAnimationProps,
                })}
              >
                {icon}
              </motion.div>
              <motion.h3
                {...getAnimation({
                  inView: areExplanationsInView,
                  additionalEffects: cardAdditionalAnimationProps,
                  delay: 0.1,
                })}
              >
                {title}
              </motion.h3>
              <motion.span
                {...getAnimation({
                  inView: areExplanationsInView,
                  additionalEffects: cardAdditionalAnimationProps,
                  delay: 0.2,
                })}
              >
                {description}
              </motion.span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
