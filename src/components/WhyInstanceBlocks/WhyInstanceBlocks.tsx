import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { createBemBlockBuilder, easeInOutOpacityScaleAnimationProps } from '@app/utils';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';
import { useInView } from '@app/hooks/useInView';
import { AnimatedHeader } from '@app/components/AnimatedHeader';

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
  const [explanationsRef, areExplanationsInView] = useInView({ once: true, margin: '-20%' });
  const getAnimation = useMotionEnterAnimation(easeInOutOpacityScaleAnimationProps, withAnimation);

  return (
    <section className={classNames(getBlocksWith(), 'container')}>
      <AnimatedHeader className={getBlocksWith('__title')} isAnimationEnabled={withAnimation}>
        {title}
      </AnimatedHeader>
      <div className={getBlocksWith('__content')}>
        <ul className={getBlocksWithList()} ref={explanationsRef}>
          {explanations.map(({ icon, title, description }) => (
            <li key={title}>
              <motion.div
                {...getAnimation({
                  isInView: areExplanationsInView,
                  additionalEffects: cardAdditionalAnimationProps,
                })}
              >
                {icon}
              </motion.div>
              <motion.h3
                {...getAnimation({
                  isInView: areExplanationsInView,
                  additionalEffects: cardAdditionalAnimationProps,
                  delay: 0.1,
                })}
              >
                {title}
              </motion.h3>
              <motion.span
                {...getAnimation({
                  isInView: areExplanationsInView,
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
