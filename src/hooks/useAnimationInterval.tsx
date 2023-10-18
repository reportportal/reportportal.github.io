import { useState, useEffect, useCallback } from 'react';
import { useRafInterval } from 'ahooks';
import { useInView } from 'react-intersection-observer';

interface Props {
  interval: number
  totalItemsLength: number
}

export const useAnimationInterval = ({ interval = 10000, totalItemsLength }: Props) => {
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
