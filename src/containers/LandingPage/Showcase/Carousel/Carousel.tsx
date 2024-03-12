import React, { memo, FC } from 'react';
import { Carousel as CarouselComponent } from '@app/components';
import {
  CarouselSlideDto,
  ContentfulAsset,
  createBemBlockBuilder,
  OrganizationDto,
} from '@app/utils';

interface CarouselProps {
  slides: CarouselSlideDto[];
  logoKey: keyof OrganizationDto;
}

const getBlocksWith = createBemBlockBuilder(['showcase__carousel']);

export const Carousel: FC<CarouselProps> = memo(({ slides, logoKey }) => (
  <CarouselComponent>
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
  </CarouselComponent>
));

Carousel.displayName = 'Carousel';
