import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ButtonSwitcher, ButtonSwitcherProps } from '@app/components/ButtonSwitcher';
import {
  createBemBlockBuilder,
  defaultSpringTransition,
  opacityScaleAnimationProps,
  PropsWithAnimation,
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
  children?: ReactNode;
}

const getBlocksWith = createBemBlockBuilder(['hero-switching']);

export const HeroSwitching: FC<PropsWithAnimation<HeroSwitchingProps>> = ({
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
          {...getSubtitleAnimation({ delay: 0.1, isInView: isHeroInView })}
        >
          {subtitle}
        </motion.p>
      )}
      {children}
      <motion.div
        className={getBlocksWith('__btn-box')}
        {...getSubtitleAnimation({ delay: 0.2, isInView: isHeroInView })}
      >
        <ButtonSwitcher buttons={buttons} activeBtnName={activeButton} onSwitch={switchActiveBtn} />
      </motion.div>
    </>
  );
};
