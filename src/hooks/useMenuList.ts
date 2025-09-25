import { useStaticQuery, graphql } from 'gatsby';
import { ImageWrapperDto } from '@app/utils';

interface MenuQuery {
  communities: Required<ImageWrapperDto>[];
  integrations: Required<ImageWrapperDto>[];
  solutions: ImageWrapperDto[];
  pricing: Required<ImageWrapperDto>[];
}

interface MenuQueryDto {
  allContentfulMenu: { nodes: MenuQuery[] };
}

export const useMenuList = (): MenuQuery => {
  const { allContentfulMenu } = useStaticQuery<MenuQueryDto>(graphql`
    query ContentfulMenuQuery {
      allContentfulMenu(limit: 1) {
        nodes {
          communities {
            sys {
              __typename
            }
            title
            link {
              url
            }
            icon {
              url
            }
            hoverIcon {
              url
            }
          }
          integrations {
            sys {
              __typename
            }
            title
            link {
              url
            }
            icon {
              url
            }
            hoverIcon {
              url
            }
          }
          solutions {
            sys {
              __typename
            }
            title
            subTitle
            link {
              url
            }
            description
            icon {
              url
            }
          }
          pricing {
            sys {
              __typename
            }
            title
            subTitle
            link {
              url
            }
            description
            icon {
              url
            }
            hoverIcon {
              url
            }
          }
        }
      }
    }
  `);

  return allContentfulMenu.nodes[0];
};
