import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@utils';

import { Link } from '../Link';
import { INCREASED_BUTTON_NUMBER } from './constants';

import './ButtonSwitcher.scss';

const getBlocksWith = createBemBlockBuilder(['switcher']);

export const ButtonSwitcher = ({ buttons, onSwitch, activeBtnName }) => {
  const hasAdditionalButton = buttons.length === INCREASED_BUTTON_NUMBER;

  const isActive = btnName => btnName === activeBtnName;

  const getWrappedButton = btn => {
    const buttonText = (
      <>
        <div
          className={classNames(getBlocksWith('__icon'), {
            [getBlocksWith('__icon-increased')]: hasAdditionalButton,
          })}
        >
          {btn.iconComponent(btn)}
        </div>
        <span
          className={classNames(getBlocksWith('__text'), {
            [getBlocksWith('__text-increased')]: hasAdditionalButton,
          })}
        >
          {btn.text}
        </span>
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
        className={classNames(getBlocksWith('__btn'), {
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
        className={classNames(getBlocksWith('__inner'), {
          [getBlocksWith('__inner-increased')]: hasAdditionalButton,
        })}
      >
        {buttons.map(getWrappedButton)}
      </div>
    </div>
  );
};
