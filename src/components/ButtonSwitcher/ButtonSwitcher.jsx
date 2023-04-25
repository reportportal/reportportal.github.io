import React, { useState } from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';

import './ButtonSwitcher.scss';

const BUTTON_WIDTH = 239;

const getBlocksWith = createBemBlockBuilder(['switchbuttons']);

export const ButtonSwitcher = ({ buttons, onSwitch }) => {
  const [switchState, setSwitchState] = useState(buttons);

  const onSwitchButton = ({ btnName, active }) => {
    if (active) {
      return false;
    }

    setSwitchState((previousSwitchState) =>
      previousSwitchState.map((btn) =>
        btnName === btn.text ? { ...btn, active: true } : { ...btn, active: false },
      ),
    );

    onSwitch(btnName);

    return true;
  };

  const getWidth = () => BUTTON_WIDTH * switchState.length;

  return (
    <div className={getBlocksWith()}>
      <div className={getBlocksWith('__inner')} style={{ maxWidth: getWidth() }}>
        {switchState &&
          switchState.map((btn) => (
            <div
              key={btn.text}
              className={cx(getBlocksWith('__btn'), { switchbuttons__active: btn.active })}
              onClick={() => onSwitchButton({ btnName: btn.text, active: btn.active })}
            >
              <div className={getBlocksWith('__icon')}>{btn.iconComponent(btn)}</div>
              <span className={getBlocksWith('__text')}>{btn.text}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
