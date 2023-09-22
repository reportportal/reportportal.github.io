import React, { useEffect, useRef } from 'react';
import { useClickAway } from 'ahooks';

export const MenuContainer = ({ isOpen, menuLinksRef, children, onClose }) => {
  const menuContainerRef = useRef(null);

  useClickAway(() => {
    if (!isOpen) {
      return;
    }

    onClose();
  }, [menuContainerRef, menuLinksRef]);

  useEffect(() => {
    const handleClick = event => {
      const shouldCloseMenu = ['a', 'button'].some(tagName => event.target.closest(tagName));

      if (shouldCloseMenu) {
        onClose();
      }
    };

    menuContainerRef.current?.querySelector('div')?.addEventListener('click', handleClick);

    return () =>
      menuContainerRef.current?.querySelector('div')?.removeEventListener('click', handleClick);
  }, [menuContainerRef, onClose]);

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
