import { useStaticQuery, graphql } from 'gatsby';
import { CommunityListDto } from '@app/utils';

interface CommunityListQuery {
  communities: Required<CommunityListDto>[];
}

interface CommunityListQueryDto {
  allContentfulCommunityList: { nodes: CommunityListQuery[] };
}

export const useCommunityList = (): CommunityListQuery['communities'] => {
  const {
    allContentfulCommunityList: {
      nodes: [{ communities }],
    },
  } = useStaticQuery<CommunityListQueryDto>(graphql`
    query ContentfulCommunityListQuery {
      allContentfulCommunityList(limit: 1) {
        nodes {
          communities {
            title
            link
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

  return communities;
};
