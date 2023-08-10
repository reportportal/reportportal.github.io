import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { ArticlePreview } from '../components/ArticlePreview'
import { Layout } from '../components/Layout'
import { createBemBlockBuilder } from '../utils'

import '../components/BlogPage/BlogPage.scss'

const getBlocksWith = createBemBlockBuilder(['blog'])

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    console.log(posts)
    return (
      <Layout location={this.props.location}>
        <div>
          <div className={getBlocksWith()}>
            <div className='container'>
              <h1 className={getBlocksWith('__title')}>Blog</h1>
              <p className={getBlocksWith('__subtitle')}>
                Product updates, news and technology articles
              </p>
              <ArticlePreview posts={posts} />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

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
        leadParagraph {
          leadParagraph
        }
      }
    }
  }
`
