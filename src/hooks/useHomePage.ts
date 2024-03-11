import { useStaticQuery, graphql } from 'gatsby';
import { ImageWrapperDto } from '@app/utils';

interface HomePageQuery {
  integrations: Required<ImageWrapperDto>[];
}

interface HomePageQueryDto {
  allContentfulHomePage: { nodes: HomePageQuery[] };
}

export const useHomePage = (): HomePageQuery => {
  const { allContentfulHomePage } = useStaticQuery<HomePageQueryDto>(graphql`
    query ContentfulHomePageQuery {
      allContentfulHomePage(limit: 1) {
        nodes {
          integrations {
            sys {
              __typename
            }
            title
            link
            icon {
              url
            }
            alt
            hoverIcon {
              url
            }
          }
        }
      }
    }
  `);

  return allContentfulHomePage.nodes[0];
};
