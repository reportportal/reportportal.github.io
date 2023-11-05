import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';
import { CarouselSlide } from '@app/utils';

interface ClientCarouselItems {
  slides: CarouselSlide[];
  allSlidesItems: CarouselSlide['items'];
}

export const useClientCarouselItems = (): ClientCarouselItems => {
  const {
    allContentfulClientCarouselSlide: { nodes: slides },
  } = useStaticQuery<{
    allContentfulClientCarouselSlide: { nodes: CarouselSlide[] };
  }>(graphql`
    query ContentfulClientCarouselSlideQuery {
      allContentfulClientCarouselSlide(sort: { order: ASC }) {
        nodes {
          id
          items {
            id
            logo {
              ... on ContentfulAsset {
                title
                contentful_id
                __typename
                url
              }
            }
          }
        }
      }
    }
  `);

  const allSlidesItems = useMemo(() => slides.flatMap(({ items }) => items), [slides]);

  return { slides, allSlidesItems };
};
