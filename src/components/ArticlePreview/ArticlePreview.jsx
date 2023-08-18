import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { ArticleAuthor } from '../ArticleAuthor/ArticleAuthor';

import * as styles from './ArticlePreview.scss';

export const ArticlePreview = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  return (
    <div className="container">
      <ul className={styles.articleList}>
        {posts.map(post => {
          return (
            <li className={styles.articleItem} key={post.id}>
              <div className={styles.articleItemFeaturedImage}>
                <GatsbyImage image={getImage(post.featuredImage)} alt={post.title.title} />
              </div>
              <div className={styles.articleItemContent}>
                <p className={styles.articleItemContentCategory}>{post.category}</p>
                <Link to={`/blog/${post.id}`} className={styles.link}>
                  <h2 className={styles.title}>{post.title.title}</h2>
                </Link>
                <div>{post.description?.raw && renderRichText(post.description)}</div>
                <div className={styles.meta}>
                  <small className="meta">{post.publishDate}</small>
                </div>
                <p className={styles.articleItemContentExcerpt}>
                  {post.leadParagraph.leadParagraph}
                </p>
                <p className={styles.articleAuthor}>
                  <ArticleAuthor />
                  {post.author}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
