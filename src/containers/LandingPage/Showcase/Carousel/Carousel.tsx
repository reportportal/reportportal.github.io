import React, { useCallback, useRef, memo, FC } from 'react';
import { Carousel as AntdCarousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { CarouselSlide, createBemBlockBuilder } from '@app/utils';

import ArrowIcon from '../icons/arrow.inline.svg';

interface CarouselProps {
  slides: CarouselSlide[];
}

const getBlocksWith = createBemBlockBuilder(['showcase__carousel']);

export const Carousel: FC<CarouselProps> = memo(({ slides }) => {
  const carouselRef = useRef<CarouselRef | null>(null);

  const handlePrevClick = useCallback(() => {
    return carouselRef.current?.prev();
  }, []);

  const handleNextClick = useCallback(() => {
    return carouselRef.current?.next();
  }, []);

  return (
    <div className={getBlocksWith()}>
      <button className={getBlocksWith('-button')} onClick={handlePrevClick}>
        <ArrowIcon />
      </button>
      <AntdCarousel ref={carouselRef} autoplay pauseOnHover={false} autoplaySpeed={5000}>
        {slides.map(({ id, items }) => (
          <div className={getBlocksWith('-slide')} key={id}>
            {items.map(({ id: logoId, logo }) => (
              <div className={getBlocksWith('-logo')} key={logoId}>
                <img src={logo.url} alt={logo.title} />
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
