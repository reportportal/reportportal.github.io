import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import Marquee from 'react-fast-marquee';
import { HeroSwitching } from '@app/components/HeroSwitching';
import { OrganizationsCarousel } from '@app/containers/LandingPage/Showcase/OrganizationsCarousel';
import { useClientCarouselItems } from '@app/hooks/useClientCarouselItems';
import { createBemBlockBuilder } from '@app/utils';

import { PRICING_BUTTONS } from './constants';

import './SponsorsHero.scss';

const getBlocksWith = createBemBlockBuilder(['sponsors-hero']);

export const SponsorsHero: FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });
  const { slides, allSlidesItems } = useClientCarouselItems();

  return (
    <div className={getBlocksWith()}>
      <HeroSwitching
        activeButton="Business"
        buttons={PRICING_BUTTONS}
        title="Sponsorship program"
        subtitle="Support a product that powers thousands of software teams worldwide, fosters innovation and excellence in software quality"
      >
        {isDesktop && (
          <>
            <div className={getBlocksWith('__carousel-title')}>Our sponsors</div>
            <OrganizationsCarousel slides={slides} logoKey="primaryLogo" />
          </>
        )}
        {!isDesktop && (
          <>
            <div className={getBlocksWith('__carousel-title')}>Our sponsors</div>
            <Marquee
              className={getBlocksWith('__carousel-mobile')}
              speed={25}
              pauseOnHover
              gradient={false}
            >
              {allSlidesItems.map(({ id, primaryLogo }) => (
                <div className={getBlocksWith('__carousel-logo')} key={id}>
                  <img src={primaryLogo?.url} alt={primaryLogo?.title} />
                </div>
              ))}
            </Marquee>
          </>
        )}
      </HeroSwitching>
    </div>
  );
};
