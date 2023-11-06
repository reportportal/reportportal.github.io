import { useStaticQuery, graphql } from 'gatsby';
import { useMemo } from 'react';
import { CarouselSlide } from '@app/utils';

interface ClientCarouselItems {
  slides: CarouselSlide[];
  allSlidesItems: CarouselSlide['organizations'];
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
          organizations {
            id
            title
            primaryLogo {
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

  const allSlidesItems = useMemo(
    () => slides.flatMap(({ organizations }) => organizations),
    [slides],
  );

  allSlidesItems.forEach(organization => {
    if (!organization.primaryLogo?.url) {
      throw new Error(
        `'primaryLogo.url' field should be present on the ${organization.title} organization Contentful record`,
      );
    }
  });

  return { slides, allSlidesItems };
};
