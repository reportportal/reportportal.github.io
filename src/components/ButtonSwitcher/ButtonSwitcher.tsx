import React, { FC } from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';
import { Link } from '@app/components';
import { createBemBlockBuilder } from '@app/utils';

import { INCREASED_BUTTON_NUMBER } from './constants';

import './ButtonSwitcher.scss';

interface Button {
  iconComponent: (btn: Button) => string;
  text: string;
  linkTo?: string;
}

export interface ButtonSwitcherProps {
  buttons: Button[];
  activeBtnName: string;
  onSwitch?: (text: string) => void;
}

const getBlocksWith = createBemBlockBuilder(['switcher']);

export const ButtonSwitcher: FC<ButtonSwitcherProps> = ({
  buttons,
  activeBtnName,
  onSwitch = noop,
}) => {
  const hasAdditionalButton = buttons.length === INCREASED_BUTTON_NUMBER;

  const isActive = (btnName: string) => btnName === activeBtnName;

  const getWrappedButton = (btn: Button) => {
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
