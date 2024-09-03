import { createElement, FC, PropsWithChildren } from 'react';
import { motion, Transition } from 'framer-motion';
import { useInView } from '@app/hooks/useInView';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';
import { easeInOutTransition, opacityScaleAnimationProps } from '@app/utils';

interface AnimatedHeaderProps {
  transition?: Transition;
  delay?: number;
  headerLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  isAnimationEnabled?: boolean;
}

export const AnimatedHeader: FC<PropsWithChildren<AnimatedHeaderProps>> = ({
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
    { className, ref: titleRef, ...getAnimation({ inView: isTitleInView, delay }) },
    children,
  );
};
