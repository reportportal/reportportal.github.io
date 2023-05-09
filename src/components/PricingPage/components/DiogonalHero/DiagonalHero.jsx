import React from 'react';

// import { Container } from '../Container';
import { createBemBlockBuilder } from '../../../../utils';
import { ButtonSwitcher } from '../../../ButtonSwitcher';
import { ContentToggleSwitcher } from '../ContentToggleSwitcher';

import './DiagonalHero.scss';

export const DiagonalHero = ({ buttons, switchActiveBtn, activeButton }) => {
  const getHeroBlocksWith = createBemBlockBuilder(['diagonalHero']);
  const getBlocksWithHeroColumns = createBemBlockBuilder(['heroColumns']);

  return (
    <div className={getHeroBlocksWith()}>
      {/* <Container> */}
      <h1 className={getHeroBlocksWith('__title')}>ReportPortal services pricing</h1>
      <p className={getHeroBlocksWith('__subTitle')}>
        Flexible options for small teams to global enterprises
      </p>

      <div className={getHeroBlocksWith('__btn-box')}>
        <ButtonSwitcher buttons={buttons} onSwitch={switchActiveBtn} activeBtnName={activeButton} />
      </div>

      <div className={getBlocksWithHeroColumns()}>
        <div className={getBlocksWithHeroColumns('__small')}>SaaS</div>
        <div className={getBlocksWithHeroColumns('__big')}>
          An instance of ReportPortal application is hosted for you. ReportPortal team takes care
          about infrastructure, availability, backups, monitoring and version updates and provides
          support by request.
        </div>
      </div>
      <ContentToggleSwitcher />
      {/* </Container> */}
    </div>
  );
};
