import React from 'react'
import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './ArticlePreview.module.scss'
import { ArticleAuthor } from '../ArticleAuthor/ArticleAuthor'

export const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <div className='container'>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li className={styles.articleItem} key={post.id}>
              <Link to={`/blog/${post.id}`} className={styles.link}>
                <h2 className={styles.title}>{post.title.title}</h2>
              </Link>
              <div>{post.description?.raw && renderRichText(post.description)}</div>
              <div className={styles.meta}>
                <small className='meta'>{post.publishDate}</small>
              </div>
              <p>{post.leadParagraph.leadParagraph}</p>
              <p className={styles.articleAuthor}>
                <ArticleAuthor />
                {post.author}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
