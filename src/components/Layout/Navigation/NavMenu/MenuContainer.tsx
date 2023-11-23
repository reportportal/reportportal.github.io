import React, { FC, useEffect, useRef, MouseEvent } from 'react';
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
    const mainContainer = menuContainerRef.current;

    if (!isOpen) {
      return;
    }

    const handleClick = (event: MouseEvent<HTMLElement>) => {
      const shouldCloseMenu = ['a', 'button'].some(tagName => event.currentTarget.closest(tagName));
      const isSubmitButton = event.currentTarget.getAttribute('type') === 'submit';

      if (shouldCloseMenu && !isSubmitButton) {
        onClose();
      }
    };

    mainContainer?.addEventListener(
      'click',
      handleClick as unknown as EventListenerOrEventListenerObject,
    );

    // eslint-disable-next-line consistent-return
    return () =>
      mainContainer?.removeEventListener(
        'click',
        handleClick as unknown as EventListenerOrEventListenerObject,
      );
  }, [isOpen, menuContainerRef, onClose]);

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      isOpen,
      menuContainerRef,
    }),
  );
};
