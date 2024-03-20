import React, { memo, FC } from 'react';
import { Carousel } from '@app/components/Carousel';
import {
  CarouselSlideDto,
  ContentfulAsset,
  createBemBlockBuilder,
  OrganizationDto,
} from '@app/utils';

interface OrganizationsCarouselProps {
  slides: CarouselSlideDto[];
  logoKey: keyof OrganizationDto;
}

const getBlocksWith = createBemBlockBuilder(['showcase__carousel']);

export const OrganizationsCarousel: FC<OrganizationsCarouselProps> = memo(({ slides, logoKey }) => (
  <Carousel>
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
  </Carousel>
));

OrganizationsCarousel.displayName = 'OrganizationsCarousel';
