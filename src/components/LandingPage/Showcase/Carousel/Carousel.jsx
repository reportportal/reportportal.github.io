import React, { useCallback, useRef, memo } from 'react';
import { Carousel as AntdCarousel } from 'antd';

import { createBemBlockBuilder } from '../../../../utils';
import ArrowIcon from '../icons/arrow.inline.svg';

const getBlocksWith = createBemBlockBuilder(['showcase__carousel']);

export const Carousel = memo(({ slides }) => {
  const carouselRef = useRef(null);

  const handlePrevClick = useCallback(() => {
    return carouselRef.current.prev();
  }, []);

  const handleNextClick = useCallback(() => {
    return carouselRef.current.next();
  }, []);

  return (
    <div className={getBlocksWith()}>
      <button className={getBlocksWith('-button')} onClick={handlePrevClick}>
        <ArrowIcon />
      </button>
      <AntdCarousel ref={carouselRef} autoplay pauseOnHover={false} autoplaySpeed={5000}>
        {slides.map((slide, index) => (
          <div className={getBlocksWith('-slide')} key={index}>
            {slide.map((logo, logoIndex) => (
              <div className={getBlocksWith('-logo')} key={logoIndex}>
                {logo.icon}
              </div>
            ))}
          </div>
        ))}
      </AntdCarousel>
      <button className={getBlocksWith('-button')} onClick={handleNextClick}>
        <ArrowIcon />
      </button>
    </div>
  );
});

Carousel.displayName = 'Carousel';
