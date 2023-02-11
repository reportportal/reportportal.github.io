import React from 'react';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Container } from '../Container';

import * as styles from './ArticlePreview.module.scss';

export const ArticlePreview = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`} className={styles.link}>
                <h2 className={styles.title}>{post.title.title}</h2>
              </Link>
              <div>{post.description?.raw && renderRichText(post.description)}</div>
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
