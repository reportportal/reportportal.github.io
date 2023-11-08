import React, { FC, useRef } from 'react';
import { useClickAway, useToggle } from 'ahooks';
import { Button } from 'antd';

import { Arrow } from '../../Arrow';
import { PopupContent } from './PopupContent';

interface GraphicArrowProps {
  children: React.ReactNode;
  info?: {
    type: string;
    scheme: string;
    url: string;
  };
}

export const GraphicArrow: FC<GraphicArrowProps> = ({ children, info }) => {
  const [isPopupOpen, { toggle: togglePopupOpenState }] = useToggle();
  const popupButtonRef = useRef(null);
  const popupRef = useRef(null);

  useClickAway(() => {
    if (isPopupOpen) {
      togglePopupOpenState();
    }
  }, [popupButtonRef, popupRef]);

  return (
    <div className="scheme__popup-container">
      <Button>
        <div ref={popupButtonRef} onClick={togglePopupOpenState}>
          <Arrow state={isPopupOpen}>{children}</Arrow>
        </div>
      </Button>
      {isPopupOpen && (
        <div ref={popupRef} className="scheme__popup-dropdown">
          <div className="scheme__popup-title">{info?.type}</div>
          <PopupContent info={info} />
        </div>
      )}
    </div>
  );
};
