import React, { useState } from 'react';
import cx from 'classnames';
import './ContentToggleSwitcher.scss';
import { createBemBlockBuilder } from '../../../../utils';

export const ContentToggleSwitcher = () => {
  const getSwitcherBlock = createBemBlockBuilder(['contentToggleSwitcher']);
  const [active, setIsActive] = useState(false);
  const toggleSwitcher = () => {
    setIsActive(!active);
  };

  return (
    <div className={getSwitcherBlock()}>
      <div className={getSwitcherBlock('__option')}>Quarterly</div>
      <div
        className={cx(
          getSwitcherBlock('__switcher'),
          active ? 'contentToggleSwitcher__switcher--active' : '',
        )}
        onClick={toggleSwitcher}
      ></div>
      <div className={getSwitcherBlock('__option')}>Annually (Save 5%)</div>
    </div>
  );
};
