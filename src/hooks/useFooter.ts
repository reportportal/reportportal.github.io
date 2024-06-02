import { useStaticQuery, graphql } from 'gatsby';
import { ContentfulAsset, ImageWrapperDto, LinkDto } from '@app/utils';

interface FooterQuery {
  text: string;
  sections: {
    title: string;
    items: {
      title: string;
      url: string;
    }[];
  }[];
  terms: {
    title: string;
    url: string;
  }[];
  testedOn: {
    link: LinkDto;
    alt: string;
    icon: Required<ContentfulAsset>;
    hoverIcon: ContentfulAsset;
  };
  socials: Required<ImageWrapperDto>[];
}

interface FooterQueryDto {
  allContentfulFooter: { nodes: FooterQuery[] };
}

export const useFooter = (): FooterQuery => {
  const { allContentfulFooter } = useStaticQuery<FooterQueryDto>(graphql`
    query ContentfulFooterQuery {
      allContentfulFooter(limit: 1) {
        nodes {
          text
          sections {
            title
            items {
              ...LinkFields
            }
          }
          terms {
            title
            url
          }
          socials {
            alt
            link {
              url
            }
            icon {
              url
              width
              height
            }
            hoverIcon {
              url
            }
          }
          testedOn {
            alt
            link {
              url
            }
            icon {
              url
              width
              height
            }
            hoverIcon {
              url
            }
          }
        }
      }
    }
  `);

  return allContentfulFooter.nodes[0];
};
