import React from 'react';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { ArticleAuthor } from '../ArticleAuthor/ArticleAuthor';
import { createBemBlockBuilder } from '../../utils';

import './ArticlePreview.scss';

const getBlocksWith = createBemBlockBuilder(['article-preview-list']);

export const ArticlePreview = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  return (
    <div className="container">
      <ul className={getBlocksWith()}>
        {posts.map(post => {
          return (
            <li className={getBlocksWith('__item')} key={post.id}>
              <Link to={`/blog/${post.slug}`} className={getBlocksWith('__link')}>
                <div className={getBlocksWith('__featured-image')}>
                  <img alt={post.title.title} src={post.featuredImage.file.url} />
                </div>
                <div className={getBlocksWith('__content')}>
                  <p className={getBlocksWith('__category')}>{post.category}</p>

                  <h2 className={getBlocksWith('__title')}>{post.title.title}</h2>
                  {post.description?.raw && <div>{renderRichText(post.description)}</div>}
                  <div className={getBlocksWith('__meta')}>
                    <span className="meta">{post.publishDate}</span>
                  </div>
                  <p className={getBlocksWith('__excerpt')}>{post.leadParagraph.leadParagraph}</p>
                  <ArticleAuthor authorName={post.author} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
