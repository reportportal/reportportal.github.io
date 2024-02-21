import React, { FC, useEffect, useRef } from 'react';
import { useClickAway } from 'ahooks';
import { BasicTarget } from 'ahooks/lib/utils/domTarget';

interface MenuContainerProps {
  isOpen: boolean;
  menuLinksRef: BasicTarget;
  children: React.ReactNode;
  onClose: () => void;
}

export const MenuContainer: FC<MenuContainerProps> = ({
  isOpen,
  menuLinksRef,
  children,
  onClose,
}) => {
  const menuContainerRef = useRef<HTMLDivElement>(null);

  useClickAway(() => {
    if (!isOpen) {
      return;
    }

    onClose();
  }, [menuContainerRef, menuLinksRef]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClick = event => {
      const shouldCloseMenu = ['a', 'button'].some(tagName => event.target.closest(tagName));

      if (shouldCloseMenu) {
        onClose();
      }
    };

    const ref = menuContainerRef.current;

    ref?.addEventListener('click', handleClick);

    // eslint-disable-next-line consistent-return
    return () => ref?.removeEventListener('click', handleClick);
  }, [isOpen, menuContainerRef, onClose]);

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      isOpen,
      menuContainerRef,
    }),
  );
};
