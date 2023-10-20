import React from 'react';
import classNames from 'classnames';

import { createBemBlockBuilder } from '@app/utils';

import { Link } from '../Link';
import { INCREASED_BUTTON_NUMBER } from './constants';

import './ButtonSwitcher.scss';

interface Props {
  buttons: Button[];
  onSwitch: (text: string) => void;
  activeBtnName: string;
}

export interface Button {
  iconComponent: (btn: Button) => string;
  text: string;
  linkTo?: string;
}

const getBlocksWith = createBemBlockBuilder(['switcher']);

export const ButtonSwitcher: React.FC<Props> = ({ buttons, onSwitch, activeBtnName }) => {
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
