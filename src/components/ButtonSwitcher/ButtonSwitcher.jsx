import React from 'react';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import { Link } from '../Link';

import './ButtonSwitcher.scss';

const INCREASED_BUTTON_NUMBER = 3;

const getBlocksWith = createBemBlockBuilder(['switcher']);

export const ButtonSwitcher = ({ buttons, onSwitch, activeBtnName }) => {
  const hasAdditionalButton = () => buttons.length === INCREASED_BUTTON_NUMBER;

  const isActive = btnName => btnName === activeBtnName;

  const getWrappedButton = btn => {
    const buttonText = (
      <>
        <div className={getBlocksWith('__icon')}>{btn.iconComponent(btn)}</div>
        <span className={getBlocksWith('__text')}>{btn.text}</span>
      </>
    );

    return btn.linkTo ? (
      <Link
        to={btn.linkTo}
        key={btn.text}
        activeClassName={getBlocksWith('__active')}
        className={getBlocksWith('__btn')}
      >
        {buttonText}
      </Link>
    ) : (
      <div
        key={btn.text}
        className={cx(getBlocksWith('__btn'), {
          [getBlocksWith('__active')]: isActive(btn.text),
        })}
        onClick={() => onSwitch(btn.text)}
      >
        {buttonText}
      </div>
    );
  };

  return (
    <div className={getBlocksWith()}>
      <div
        className={cx(getBlocksWith('__inner'), {
          [getBlocksWith('__inner-increased')]: hasAdditionalButton(),
        })}
      >
        {buttons.map(getWrappedButton)}
      </div>
    </div>
  );
};
