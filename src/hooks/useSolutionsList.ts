import { useStaticQuery, graphql } from 'gatsby';
import type { ListItem } from '@app/components/Layout/Navigation/NavMenu/LinkList';

interface SolutionsListDto {
  solutions: ListItem[];
}

interface SolutionsListQueryDto {
  allContentfulCustomersStatistics: { nodes: SolutionsListDto };
}

export const useSolutionsList = (): SolutionsListQueryDto => {
  const {
    allContentfulSolutionsList: {
      nodes: [solutionsList],
    },
  } = useStaticQuery<SolutionsListQueryDto>(graphql`
    query ContentfulSolutionsListQuery {
      allContentfulSolutionsList(limit: 1) {
        nodes {
          solutions {
            description
            link
            title
            addition
            icon {
              url
            }
          }
        }
      }
    }
  `);

  return solutionsList;
};
