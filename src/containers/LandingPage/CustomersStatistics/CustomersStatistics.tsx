import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { useCustomersStatistics } from '@app/hooks/useCustomersStatistics';
import { useInView } from '@app/hooks/useInView';
import { StatisticList } from '@app/components/StatisticList';
import { createBemBlockBuilder, getEaseInOutTransition } from '@app/utils';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';

import './CustomersStatistics.scss';

const getBlocksWith = createBemBlockBuilder(['customers-statistics']);

export const CustomersStatistics: FC = () => {
  const { title, subTitle, statistics } = useCustomersStatistics();
  const [ref, isInView] = useInView();

  const getTitleAnimation = useMotionEnterAnimation({
    hiddenState: {
      opacity: 0,
      x: -50,
    },
    enterState: {
      opacity: 1,
      x: 0,
    },
    ...getEaseInOutTransition(0.7),
  });

  return (
    <section className={getBlocksWith()} ref={ref}>
      <div className={getBlocksWith('__container')}>
        <div className={getBlocksWith('__content')}>
          <motion.h2
            className={getBlocksWith('__title')}
            {...getTitleAnimation({ isInView, delay: 0.5 })}
          >
            {title}
          </motion.h2>
          <motion.h3
            className={getBlocksWith('__sub-title')}
            {...getTitleAnimation({ isInView, delay: 0.5 })}
          >
            {subTitle}
          </motion.h3>
          <StatisticList statistics={statistics} isInView={isInView} isAnimationEnabled />
        </div>
      </div>
    </section>
  );
};
