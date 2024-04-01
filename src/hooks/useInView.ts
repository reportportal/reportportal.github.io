import { useRef } from 'react';
import { useInView as useFramerInView } from 'framer-motion';

type InViewOptions = Parameters<typeof useFramerInView>[1];

export const useInView = (options: InViewOptions = {}) => {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, options);

  return [ref, isInView] as const;
};
