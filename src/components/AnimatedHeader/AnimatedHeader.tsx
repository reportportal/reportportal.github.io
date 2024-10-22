import { createElement, FC, PropsWithChildren } from 'react';
import { motion, Transition } from 'framer-motion';
import { useInView } from '@app/hooks/useInView';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';
import { easeInOutTransition, opacityScaleAnimationProps, PropsWithAnimation } from '@app/utils';

interface AnimatedHeaderProps {
  transition?: Transition;
  delay?: number;
  headerLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const AnimatedHeader: FC<PropsWithChildren<PropsWithAnimation<AnimatedHeaderProps>>> = ({
  transition = easeInOutTransition,
  delay,
  headerLevel = 2,
  className,
  isAnimationEnabled = true,
  children,
}) => {
  const [titleRef, isTitleInView] = useInView();

  const getAnimation = useMotionEnterAnimation(
    { ...opacityScaleAnimationProps, transition },
    isAnimationEnabled,
  );

  return createElement(
    motion[`h${headerLevel}`],
    { className, ref: titleRef, ...getAnimation({ isInView: isTitleInView, delay }) },
    children,
  );
};
