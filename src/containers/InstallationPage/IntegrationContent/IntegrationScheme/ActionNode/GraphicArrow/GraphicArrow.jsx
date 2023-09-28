import React, { useRef } from 'react';
import { useClickAway, useToggle } from 'ahooks';
import { Button } from 'antd';

import { PopupContent } from './PopupContent';
import { Arrow } from '../../Arrow';

export const GraphicArrow = ({ children, info }) => {
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
          <div className="scheme__popup-title">{info.type}</div>
          <PopupContent info={info} />
        </div>
      )}
    </div>
  );
};
