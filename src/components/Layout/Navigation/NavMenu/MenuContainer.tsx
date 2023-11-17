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
  const menuContainerRef = useRef(null);

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

    menuContainerRef.current?.addEventListener('click', handleClick);

    // eslint-disable-next-line consistent-return
    return () => menuContainerRef.current?.removeEventListener('click', handleClick);
  }, [isOpen, menuContainerRef, onClose]);

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      isOpen,
      menuContainerRef,
    }),
  );
};
