import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';

import './ButtonSwitcher.scss';

const BUTTON_WIDTH = 239;

const getBlocksWith = createBemBlockBuilder(['switcher']);

export const ButtonSwitcher = ({ buttons, onSwitch, activeBtnName }) => {
  const getWidth = () => BUTTON_WIDTH * buttons.length;

  const isActive = (btnName) => btnName === activeBtnName;

  return (
    <div className={getBlocksWith()}>
      <div className={getBlocksWith('__inner')} style={{ maxWidth: getWidth() }}>
        {buttons.map((btn) => (
          <div
            key={btn.text}
            className={cx(getBlocksWith('__btn'), {
              [getBlocksWith('__active')]: isActive(btn.text),
            })}
            onClick={() => onSwitch(btn.text)}
          >
            <div className={getBlocksWith('__icon')}>{btn.iconComponent(btn)}</div>
            <span className={getBlocksWith('__text')}>{btn.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
