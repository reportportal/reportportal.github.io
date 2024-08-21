import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from '@app/components/PricingCard';
import {
  createBemBlockBuilder,
  easeInOutOpacityScaleAnimationProps,
  OfferingPlansDto,
} from '@app/utils';
import { useInView } from '@app/hooks/useInView';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';

import './PricingCards.scss';

interface PricingCardsProps {
  plans: OfferingPlansDto;
  isDiscount: boolean;
  isAnimationEnabled?: boolean;
}

const getBlocksWith = createBemBlockBuilder(['pricing-cards']);

export const PricingCards: FC<PricingCardsProps> = ({ plans, isDiscount, isAnimationEnabled }) => {
  const discount = isDiscount ? 'yearly' : 'quarterly';
  const [cardsRef, isInView] = useInView();

  const getAnimation = useMotionEnterAnimation(
    easeInOutOpacityScaleAnimationProps,
    isAnimationEnabled,
  );

  return (
    <motion.div
      className={getBlocksWith()}
      ref={cardsRef}
      {...getAnimation({
        inView: isInView,
        delay: 0.6,
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
      {plans.items.map(plan => (
        <PricingCard key={plan.title} plan={plan} discount={discount} />
      ))}
    </motion.div>
  );
};
