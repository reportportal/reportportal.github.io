import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import Marquee from 'react-fast-marquee';
import chunk from 'lodash/chunk';
import { HeroSwitching } from '@app/components/HeroSwitching';
import { Carousel } from '@app/components/Carousel';
import { createBemBlockBuilder, MEDIA_PHONE_LG } from '@app/utils';

import { PRICING_BUTTONS, SPONSOR_SLIDES } from './constants';

import './SponsorsHero.scss';

const getBlocksWith = createBemBlockBuilder(['sponsors-hero']);

export const SponsorsHero: FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1124px)' });
  const isPhoneLg = useMediaQuery({ query: MEDIA_PHONE_LG });
  const slidesLength = SPONSOR_SLIDES.length;
  const isShowCarouselButtons = slidesLength > 7;

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
            <Carousel autoplay={isShowCarouselButtons} isButtonHidden={!isShowCarouselButtons}>
              {chunk(SPONSOR_SLIDES, 7)?.map((sponsors, index) => (
                <div className={getBlocksWith('__slide')} key={index}>
                  {sponsors.map(sponsor => (
                    <div className={getBlocksWith('__logo')} key={sponsor.id}>
                      <img src={sponsor.src} alt="" />
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
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
              play={(!isPhoneLg && slidesLength >= 3) || (isPhoneLg && slidesLength > 5)}
            >
              {SPONSOR_SLIDES.map(({ id, src }) => (
                <div className={getBlocksWith('__carousel-logo')} key={id}>
                  <img src={src} alt="" />
                </div>
              ))}
            </Marquee>
          </>
        )}
      </HeroSwitching>
    </div>
  );
};
