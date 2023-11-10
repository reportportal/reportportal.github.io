import { useStaticQuery, graphql } from 'gatsby';

interface CustomersStatisticsDto {
  title: string;
  subTitle: string;
  statistics: { quantity: string; entities: string; achievement: string }[];
}

interface CustomersStatisticsQueryDto {
  allContentfulCustomersStatistics: { nodes: CustomersStatisticsDto[] };
}

export const useCustomersStatistics = (): CustomersStatisticsDto => {
  const {
    allContentfulCustomersStatistics: {
      nodes: [customersStatistics],
    },
  } = useStaticQuery<CustomersStatisticsQueryDto>(graphql`
    query ContentfulCustomersStatisticsQuery {
      allContentfulCustomersStatistics(limit: 1) {
        nodes {
          title
          subTitle
          statistics {
            quantity
            entities
            achievement
          }
        }
      }
    }
  `);

  return customersStatistics;
};
