import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { Container } from '../Container';
import { createBemBlockBuilder } from '../../utils';

import './SwitchButtons.scss';

// const getBlocksWith = createBemBlockBuilder(['installer']);

export const SwitchButtons = ({buttons, onSwitch, btnWidth='auto'}) => {
  const [switchState, setSwitchState] = useState(buttons);

  const onSwitchButton = (_, { btnName, active }) => {
    if (active) {
      return false
    }

    setSwitchState((previousSwitchState) => 
      previousSwitchState.map((btn) => btnName === btn.text ? ({...btn, active: true}) : ({...btn, active: false}))
    );

    onSwitch(btnName);
  };

  return (
    <div className="switch">
      <div className="switch__inner">
        {switchState && switchState.map((btn) => (
          <div
            key={btn.text}
            className={cx('switch__btn', { switch__active: btn.active })}
            style={{width: btnWidth}}
            onClick={(e) => onSwitchButton(e, { btnName: btn.text, active: btn.active })}
          >
            {btn.iconComponent(btn)}
            <span className="switch__text">{btn.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
