import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import { ArticlePreview } from '../components/ArticlePreview';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes');

    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <Hero title="Blog" />
        <ArticlePreview posts={posts} />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { date: DESC }) {
      nodes {
        id
        date(formatString: "MMMM Do, YYYY")
        author
        articleBody {
          raw
        }
        title {
          title
        }
      }
    }
  }
`;