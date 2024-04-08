import React, { FC, ReactNode } from 'react';
import { ButtonSwitcher, ButtonSwitcherProps } from '@app/components/ButtonSwitcher';
import { createBemBlockBuilder } from '@app/utils';

import './HeroSwitching.scss';

interface HeroSwitchingProps {
  title: string;
  activeButton: string;
  buttons: ButtonSwitcherProps['buttons'];
  switchActiveBtn?: (text: string) => void;
  subtitle?: string;
  children?: ReactNode;
}

const getBlocksWith = createBemBlockBuilder(['hero-switching']);

export const HeroSwitching: FC<HeroSwitchingProps> = ({
  title,
  subtitle,
  buttons,
  activeButton,
  switchActiveBtn,
  children,
}) => (
  <>
    <h1 className={getBlocksWith('__title')}>{title}</h1>
    {subtitle && <p className={getBlocksWith('__subtitle')}>{subtitle}</p>}
    {children}
    <div className={getBlocksWith('__btn-box')}>
      <ButtonSwitcher buttons={buttons} activeBtnName={activeButton} onSwitch={switchActiveBtn} />
    </div>
  </>
);
