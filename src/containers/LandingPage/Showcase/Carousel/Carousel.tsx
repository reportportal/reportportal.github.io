import React, { useCallback, useRef, memo, FC } from 'react';
import { Carousel as AntdCarousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import {
  CarouselSlideDto,
  ContentfulAsset,
  createBemBlockBuilder,
  OrganizationDto,
} from '@app/utils';

import ArrowIcon from '../icons/arrow.inline.svg';

interface CarouselProps {
  slides: CarouselSlideDto[];
  logoKey: keyof OrganizationDto;
}

const getBlocksWith = createBemBlockBuilder(['showcase__carousel']);

export const Carousel: FC<CarouselProps> = memo(({ slides, logoKey }) => {
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
        {slides.map(({ id, organizations }) => (
          <div className={getBlocksWith('-slide')} key={id}>
            {organizations.map(organization => (
              <div className={getBlocksWith('-logo')} key={organization.id}>
                <img
                  src={(organization[logoKey] as ContentfulAsset)?.url}
                  alt={(organization[logoKey] as ContentfulAsset)?.title}
                />
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
