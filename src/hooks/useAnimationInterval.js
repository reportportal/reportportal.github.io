import { useState, useEffect, useCallback } from 'react';
import { useRafInterval } from 'ahooks';
import { useInView } from 'react-intersection-observer';

export const useAnimationInterval = ({ interval = 10000, totalItemsLength }) => {
  const [ref, inView] = useInView();
  const [delay, setDelay] = useState(undefined);
  const [activeListIndex, setActiveListIndex] = useState(0);

  const setIndexAndResetInterval = useCallback((index) => {
    setDelay();
    setActiveListIndex(index);
  }, []);

  useRafInterval(() => {
    setActiveListIndex((prevState) => (prevState === totalItemsLength - 1 ? 0 : prevState + 1));
  }, delay);

  useEffect(() => {
    setDelay(inView ? interval : undefined);
  }, [inView]);

  return {
    inView,
    activeListIndex,
    setActiveListIndex,
    setIndexAndResetInterval,
    ref,
    delay,
    setDelay,
  };
};
