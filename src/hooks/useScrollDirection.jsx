import { useScroll } from 'ahooks';
import { useState, useRef, useLayoutEffect } from 'react';

export const useScrollDirection = ({ callbackFn, isMenuOpen }) => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollYRef = useRef(0);
  const scroll = useScroll();

  const scrollY = scroll?.top ?? 0;

  useLayoutEffect(() => {
    const direction = scrollY > lastScrollYRef.current ? 'down' : 'up';

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
