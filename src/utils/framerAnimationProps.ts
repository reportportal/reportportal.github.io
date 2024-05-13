export const opacityScaleHiddenState = {
  opacity: 0,
  scale: 0.5,
};

export const opacityScaleEnterState = {
  opacity: 1,
  scale: 1,
};

export const opacityScaleAnimationProps = {
  hiddenState: opacityScaleHiddenState,
  enterState: opacityScaleEnterState,
};

export const easeInOutTransition = {
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
  },
};

export const getSpringTransition = (stiffness: number, damping: number, mass = 1) => ({
  transition: {
    type: 'spring',
    stiffness,
    damping,
    mass,
  },
});

export const easeInOutOpacityScaleAnimationProps = {
  ...opacityScaleAnimationProps,
  ...easeInOutTransition,
};
