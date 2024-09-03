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

export const getEaseInOutTransition = (duration = 0.5) => ({
  transition: {
    ease: 'easeInOut',
    duration,
  },
});

export const getSpringTransition = (stiffness: number, damping: number, mass = 1) => ({
  transition: {
    type: 'spring',
    stiffness,
    damping,
    mass,
  },
});

export const defaultSpringTransition = getSpringTransition(400, 30);

export const easeInOutOpacityScaleAnimationProps = {
  ...opacityScaleAnimationProps,
  ...easeInOutTransition,
};

export const heroBackgroundAnimationProps = {
  hiddenState: {
    y: -250,
  },
  enterState: { y: 0 },
  ...defaultSpringTransition,
};
