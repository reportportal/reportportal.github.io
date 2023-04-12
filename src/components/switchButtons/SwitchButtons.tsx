import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';

const BUTTON_WIDTH = 239;

import './SwitchButtons.scss';

const getBlocksWith = createBemBlockBuilder(['switch']);

export const SwitchButtons = ({ buttons, onSwitch }) => {
  const [switchState, setSwitchState] = useState(buttons);

  const onSwitchButton = ({ btnName, active }) => {
    if (active) {
      return false;
    }

    setSwitchState((previousSwitchState) => 
      previousSwitchState.map((btn) => btnName === btn.text ? ({...btn, active: true}) : ({...btn, active: false}))
    );

    onSwitch(btnName);
  };

  const getWidth = () => BUTTON_WIDTH * switchState.length

  return (
    <div className={getBlocksWith()}>
      <div className={getBlocksWith('__inner')} style={{ maxWidth: getWidth() }}>
        {switchState && switchState.map((btn) => (
          <div
            key={btn.text}
            className={cx(getBlocksWith('__btn'), { switch__active: btn.active })}
            onClick={() => onSwitchButton({ btnName: btn.text, active: btn.active })}
          >
            {btn.iconComponent(btn)}
            <span className={getBlocksWith('__text')}>{btn.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
