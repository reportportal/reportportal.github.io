import React, { FC } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import {
  createBemBlockBuilder,
  getEaseInOutTransition,
  opacityScaleAnimationProps,
} from '@app/utils';
import { useInView } from '@app/hooks/useInView';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';

interface ScrollItemProps {
  section: { id: string; title: string; step?: string };
  offset: number;
}

const getBlocksWith = createBemBlockBuilder(['indicatory']);

export const ScrollItem: FC<ScrollItemProps> = ({ section, offset }) => {
  const [ref, isInView] = useInView();

  const getAnimation = useMotionEnterAnimation({
    ...opacityScaleAnimationProps,
    ...getEaseInOutTransition(0.7),
  });

  return (
    <motion.div
      key={section.id}
      className={getBlocksWith('__box-item')}
      ref={ref}
      {...getAnimation({
        inView: isInView,
        additionalEffects: {
          hiddenAdditional: { x: -50, scale: 1 },
          enterAdditional: { x: 0 },
        },
      })}
    >
      <Link
        className={getBlocksWith('__link')}
        activeClass="active"
        to={section.id}
        spy
        smooth
        offset={offset}
      >
        {section.step && <span>{section.step}</span>}
        <span className={getBlocksWith('__box-item-substring')}>{section.title}</span>
      </Link>
    </motion.div>
  );
};
