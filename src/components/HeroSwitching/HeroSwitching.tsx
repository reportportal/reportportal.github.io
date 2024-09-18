import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ButtonSwitcher, ButtonSwitcherProps } from '@app/components/ButtonSwitcher';
import {
  createBemBlockBuilder,
  defaultSpringTransition,
  opacityScaleAnimationProps,
} from '@app/utils';
import { AnimatedHeader } from '@app/components/AnimatedHeader';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';

import './HeroSwitching.scss';

interface HeroSwitchingProps {
  title: string;
  activeButton: string;
  buttons: ButtonSwitcherProps['buttons'];
  switchActiveBtn?: (text: string) => void;
  subtitle?: string;
  isHeroInView?: boolean;
  isAnimationEnabled?: boolean;
  children?: ReactNode;
}

const getBlocksWith = createBemBlockBuilder(['hero-switching']);

export const HeroSwitching: FC<HeroSwitchingProps> = ({
  title,
  subtitle,
  buttons,
  activeButton,
  switchActiveBtn,
  isHeroInView = true,
  isAnimationEnabled = true,
  children,
}) => {
  const getSubtitleAnimation = useMotionEnterAnimation(
    {
      ...opacityScaleAnimationProps,
      ...defaultSpringTransition,
    },
    isAnimationEnabled,
  );

  return (
    <>
      <AnimatedHeader
        headerLevel={1}
        transition={defaultSpringTransition}
        className={getBlocksWith('__title')}
        isAnimationEnabled={isAnimationEnabled}
      >
        {title}
      </AnimatedHeader>
      {subtitle && (
        <motion.p
          className={getBlocksWith('__subtitle')}
          {...getSubtitleAnimation({ delay: 0.1, inView: isHeroInView })}
        >
          {subtitle}
        </motion.p>
      )}
      {children}
      <motion.div
        className={getBlocksWith('__btn-box')}
        {...getSubtitleAnimation({ delay: 0.2, inView: isHeroInView })}
      >
        <ButtonSwitcher buttons={buttons} activeBtnName={activeButton} onSwitch={switchActiveBtn} />
      </motion.div>
    </>
  );
};
