import { AnimationProps, Transition, useReducedMotion, Variant } from 'framer-motion';

interface UseMotionEnterAnimationProps {
  hiddenState: Variant;
  enterState: Variant;
  transition: Transition;
}

interface AnimationGetterProps {
  isInView: boolean;
  delay?: number;
  additionalEffects?: Partial<{
    hiddenAdditional: Variant;
    enterAdditional: Variant;
    transitionAdditional: Transition;
  }>;
}

type AnimationGetter = (props: AnimationGetterProps) => AnimationProps;

export const useMotionEnterAnimation = (
  { hiddenState, enterState, transition }: UseMotionEnterAnimationProps,
  isEnabled = true,
): AnimationGetter => {
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = !shouldReduceMotion && isEnabled;

  return ({
    isInView,
    delay = 0,
    additionalEffects = { hiddenAdditional: {}, enterAdditional: {} },
  }) => ({
    initial: shouldAnimate ? 'hidden' : 'enter',
    animate: shouldAnimate && (isInView ? 'enter' : 'hidden'),
    exit: 'hidden',
    variants: {
      hidden: { ...hiddenState, ...additionalEffects.hiddenAdditional },
      enter: { ...enterState, ...additionalEffects.enterAdditional },
    },
    transition: {
      ...transition,
      ...additionalEffects.transitionAdditional,
      delay,
    },
  });
};
