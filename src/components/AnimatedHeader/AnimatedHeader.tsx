import React, { FC, PropsWithChildren } from 'react';
import { motion, Transition } from 'framer-motion';
import { useInView } from '@app/hooks/useInView';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';
import { easeInOutTransition, opacityScaleAnimationProps } from '@app/utils';

interface AnimatedHeaderProps {
  transition?: Transition;
  className?: string;
  isAnimationEnabled?: boolean;
}

export const AnimatedHeader: FC<PropsWithChildren<AnimatedHeaderProps>> = ({
  children,
  transition = easeInOutTransition,
  className,
  isAnimationEnabled = true,
}) => {
  const [titleRef, isTitleInView] = useInView({ once: true });

  const getAnimation = useMotionEnterAnimation(
    { ...opacityScaleAnimationProps, transition },
    isAnimationEnabled,
  );

  return (
    <motion.h2 className={className} ref={titleRef} {...getAnimation({ inView: isTitleInView })}>
      {children}
    </motion.h2>
  );
};
