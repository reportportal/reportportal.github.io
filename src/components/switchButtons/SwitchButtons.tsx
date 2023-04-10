import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { Container } from '../Container';
import { createBemBlockBuilder } from '../../utils';

import './SwitchButtons.scss';

const BUTTON_WIDTH = 239;

export const SwitchButtons = ({ buttons, onSwitch }) => {
  const [switchState, setSwitchState] = useState(buttons);

  const onSwitchButton = ({ btnName, active }) => {
    if (active) {
      return false
    }

    setSwitchState((previousSwitchState) => 
      previousSwitchState.map((btn) => btnName === btn.text ? ({...btn, active: true}) : ({...btn, active: false}))
    );

    onSwitch(btnName);
  };

  const getWidth = () =>  BUTTON_WIDTH * switchState.length

  return (
    <div className="switch">
      <div className="switch__inner" style={{maxWidth: getWidth()}}>
        {switchState && switchState.map((btn) => (
          <div
            key={btn.text}
            className={cx('switch__btn', { switch__active: btn.active })}
            onClick={() => onSwitchButton({ btnName: btn.text, active: btn.active })}
          >
            {btn.iconComponent(btn)}
            <span className="switch__text">{btn.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
