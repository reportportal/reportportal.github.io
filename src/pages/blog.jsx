import { ArticlePreview } from '../components/ArticlePreview';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import React from 'react';
import { Seo } from '../components/Seo';
import get from 'lodash/get';
import { graphql } from 'gatsby';

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

