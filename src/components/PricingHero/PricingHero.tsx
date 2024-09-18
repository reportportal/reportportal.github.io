import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { ButtonSwitcherProps } from '@app/components/ButtonSwitcher';
import { HeroSwitching } from '@app/components/HeroSwitching';
import {
  createBemBlockBuilder,
  easeInOutOpacityScaleAnimationProps,
  easeInOutTransition,
  heroBackgroundAnimationProps,
} from '@app/utils';
import { useInView } from '@app/hooks/useInView';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';

import { PlanTypeSwitcher, PlanTypeSwitcherProps } from './PlanTypeSwitcher';

import './PricingHero.scss';

interface PricingHeroProps {
  title: string;
  buttons: ButtonSwitcherProps['buttons'];
  activeButton: string;
  offerType: string;
  description: string;
  switcherProps: PlanTypeSwitcherProps;
  subtitle?: string;
  isAnimationEnabled?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['pricing-hero']);

const offerDescriptionAnimation = {
  hiddenState: {
    opacity: 0,
    y: 150,
  },
  enterState: {
    opacity: 1,
    y: 0,
  },
  ...easeInOutTransition,
};

export const PricingHero: FC<PricingHeroProps> = ({
  title,
  subtitle,
  buttons,
  activeButton,
  switcherProps,
  offerType,
  description,
  isAnimationEnabled = true,
}) => {
  const [heroRef, isHeroInView] = useInView();

  const getOfferDescriptionAnimation = useMotionEnterAnimation(
    offerDescriptionAnimation,
    isAnimationEnabled,
  );
  const getDiscountSwitcherAnimation = useMotionEnterAnimation(
    easeInOutOpacityScaleAnimationProps,
    isAnimationEnabled,
  );
  const getBackgroundAnimation = useMotionEnterAnimation(
    heroBackgroundAnimationProps,
    isAnimationEnabled,
  );

  return (
    <motion.div
      className={getBlocksWith()}
      ref={heroRef}
      {...getBackgroundAnimation({ inView: isHeroInView })}
    >
      <HeroSwitching
        activeButton={activeButton}
        buttons={buttons}
        title={title}
        subtitle={subtitle}
        isHeroInView={isHeroInView}
        isAnimationEnabled={isAnimationEnabled}
      />
      <motion.div
        className={getBlocksWith('__wrapper')}
        {...getOfferDescriptionAnimation({
          inView: isHeroInView,
        })}
      >
        <div className={getBlocksWith('__wrapper-title')}>{offerType}</div>
        <div className={getBlocksWith('__wrapper-subtitle')}>{description}</div>
      </motion.div>
      <motion.div
        className={getBlocksWith('__plan-type-switcher')}
        {...getDiscountSwitcherAnimation({
          inView: isHeroInView,
          delay: 0.5,
          additionalEffects: {
            hiddenAdditional: {
              y: 50,
            },
            enterAdditional: {
              y: 0,
            },
          },
        })}
      >
        <PlanTypeSwitcher {...switcherProps} />
      </motion.div>
    </motion.div>
  );
};
