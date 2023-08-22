import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { CasesPage } from '../components/CasesPage';

const Cases = ({ data }) => {
  const [nodes, setNodes] = useState(data.allContentfulCaseStudy.nodes.slice(0, 12));
  const [displayCount, setDisplayCount] = useState(12);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 12);
  };

  useEffect(() => {
    setNodes(data.allContentfulCaseStudy.nodes.slice(0, displayCount));
  }, [displayCount, data.allContentfulCaseStudy.nodes]);

  return (
    <Layout className="cases-page-layout">
      <CasesPage
        cases={nodes}
        handleLoadMore={handleLoadMore}
        showLoadMore={displayCount < data.allContentfulCaseStudy.nodes.length}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query CaseSturyIndexQuery {
    allContentfulCaseStudy(sort: { id: DESC }) {
      nodes {
        id
        industry
        icon {
          file {
            url
          }
        }
        cardBackgroundImage {
          file {
            url
          }
        }
        title
      }
    }
  }
`;

export default Cases;
