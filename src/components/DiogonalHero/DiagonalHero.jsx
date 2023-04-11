import React from 'react';
import './DiagonalHero.scss';
import { Container } from '../Container';
import { createBemBlockBuilder } from '../../utils';
import { ContentToggleSwitcher } from '../ContentToggleSwitcher';

export const DiagonalHero = () => {
  const title = 'ReportPortal services pricing';
  const subTitle = 'Flexible options for small teams to global enterprises';
  const twoColumnDescriptionBig = `An instance of ReportPortal application is hosted for you. ReportPortal team takes care
  about infrastructure, availability, backups, monitoring and version updates and provides
  support by request.`;
  const twoColumnDescriptionSmall = 'SaaS';

  const getHeroBlocksWith = createBemBlockBuilder(['diagonalHero']);
  const getBlocksWithHeroColumns = createBemBlockBuilder(['heroColumns']);

  return (
    <div className={getHeroBlocksWith()}>
      <Container>
        <h1 className={getHeroBlocksWith('__title')}>{title}</h1>
        <p className={getHeroBlocksWith('__subTitle')}>{subTitle}</p>
        <div className={getBlocksWithHeroColumns()}>
          <div className={getBlocksWithHeroColumns('__small')}>{twoColumnDescriptionSmall}</div>
          <div className={getBlocksWithHeroColumns('__big')}>{twoColumnDescriptionBig}</div>
        </div>
        <ContentToggleSwitcher />
      </Container>
    </div>
  );
};
