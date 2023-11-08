import { useState, useRef, useLayoutEffect } from 'react';
import { useScroll } from 'ahooks';

interface ScrollDirection {
  callbackFn: () => void;
  isMenuOpen: boolean;
}

enum Directions {
  DOWN = 'down',
  UP = 'up',
}

export const useScrollDirection = ({ callbackFn, isMenuOpen }: ScrollDirection) => {
  const [scrollDirection, setScrollDirection] = useState<Directions | null>(null);
  const lastScrollYRef = useRef(0);
  const scroll = useScroll();

  const scrollY = scroll?.top ?? 0;

  useLayoutEffect(() => {
    const direction = scrollY > lastScrollYRef.current ? Directions.DOWN : Directions.UP;

    if (
      direction !== scrollDirection &&
      (scrollY - lastScrollYRef.current > 10 || scrollY - lastScrollYRef.current < -10)
    ) {
      setScrollDirection(direction);
    }

    lastScrollYRef.current = Math.max(scrollY, 0);

    if (callbackFn) {
      callbackFn();
    }
  }, [scrollY]);

  useLayoutEffect(() => {
    if (isMenuOpen) {
      setScrollDirection(null);
    }
  }, [isMenuOpen]);

  return scrollDirection;
};
