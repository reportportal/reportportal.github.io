import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRafInterval } from 'ahooks';

interface AnimationIntervalProps {
  totalItemsLength: number;
  interval?: number;
}

export const useAnimationInterval = ({
  interval = 10000,
  totalItemsLength,
}: AnimationIntervalProps) => {
  const [ref, inView] = useInView();
  const [delay, setDelay] = useState<number | undefined>(undefined);
  const [activeListIndex, setActiveListIndex] = useState<number>(0);

  const setIndexAndResetInterval = useCallback((index: number) => {
    setDelay(undefined);
    setActiveListIndex(index);
  }, []);

  useRafInterval(() => {
    setActiveListIndex(prevState => (prevState === totalItemsLength - 1 ? 0 : prevState + 1));
  }, delay);

  useEffect(() => {
    setDelay(inView ? interval : undefined);
  }, [setDelay, interval, inView]);

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
