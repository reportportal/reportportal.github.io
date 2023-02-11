import React, { useRef } from 'react';
import { useClickAway } from 'ahooks';

export const MenuContainer = ({ isOpen, menuLinksRef, children, onClose }) => {
  const menuContainerRef = useRef(null);

  useClickAway(() => {
    onClose();
  }, [menuContainerRef, menuLinksRef]);

  return (
    <div hidden={!isOpen} ref={menuContainerRef}>
      {children}
    </div>
  );
};
