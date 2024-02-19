import React, { useState, useEffect, FC } from 'react';
import { PageProps, graphql } from 'gatsby';
import { Layout } from '@app/components';
import { CasesPage } from '@app/containers/CasesPage';
import { SEO_DATA } from '@app/utils';

interface DataProps {
  allContentfulCaseStudy: {
    [key: string]: any;
  };
}

const Cases: FC<PageProps<DataProps>> = ({ data }) => {
  const {
    allContentfulCaseStudy: { nodes },
  } = data;

  const [caseStudies, setCaseStudies] = useState(nodes.slice(0, 12));
  const [displayCount, setDisplayCount] = useState(12);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 12);
  };

  useEffect(() => {
    setCaseStudies(nodes.slice(0, displayCount));
  }, [displayCount, nodes]);

  return (
    <Layout seoData={SEO_DATA.caseStudies} className="cases-page-layout">
      <CasesPage
        cases={caseStudies}
        handleLoadMore={handleLoadMore}
        showLoadMore={displayCount < nodes.length}
      />
    </Layout>
  );
};

export default Cases;

export const pageQuery = graphql`
  query CaseStudyIndexQuery {
    allContentfulCaseStudy(sort: { createdAt: DESC }) {
      nodes {
        id
        industry
        icon {
          file {
            url
          }
        }
        createdAt
        cardBackgroundImage {
          file {
            url
          }
        }
        title
        slug
      }
    }
  }
`;
