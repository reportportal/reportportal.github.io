import React, { useEffect, useRef } from 'react';
import { useClickAway } from 'ahooks';

export const MenuContainer = ({ isOpen, menuLinksRef, children, onClose }) => {
  const menuContainerRef = useRef(null);

  useClickAway(() => {
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

  return (
    <div hidden={!isOpen} ref={menuContainerRef}>
      {children}
    </div>
  );
};
