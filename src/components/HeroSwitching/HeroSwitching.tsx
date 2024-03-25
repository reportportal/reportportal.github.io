import React, { FC } from 'react';
import { ButtonSwitcher, ButtonSwitcherProps } from '@app/components/ButtonSwitcher';
import { createBemBlockBuilder } from '@app/utils';

import './HeroSwitching.scss';

interface HeroSwitchingProps {
  title: string;
  activeButton: string;
  buttons: ButtonSwitcherProps['buttons'];
  switchActiveBtn?: (text: string) => void;
  subtitle?: string;
}

const getBlocksWith = createBemBlockBuilder(['hero-switching']);

export const HeroSwitching: FC<HeroSwitchingProps> = ({
  title,
  subtitle,
  buttons,
  activeButton,
  switchActiveBtn,
}) => (
  <>
    <h1 className={getBlocksWith('__title')}>{title}</h1>
    {subtitle && <p className={getBlocksWith('__subtitle')}>{subtitle}</p>}

    <div className={getBlocksWith('__btn-box')}>
      <ButtonSwitcher buttons={buttons} activeBtnName={activeButton} onSwitch={switchActiveBtn} />
    </div>
  </>
);
