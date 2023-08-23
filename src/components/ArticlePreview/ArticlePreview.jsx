import React from 'react';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { ArticleAuthor } from '../ArticleAuthor/ArticleAuthor';
import { createBemBlockBuilder } from '../../utils';

import './ArticlePreview.scss';

const getBlocksWithArticleList = createBemBlockBuilder(['article-preview-list']);
const getBlocksWithArticleItem = createBemBlockBuilder(['article-preview-item']);

export const ArticlePreview = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  return (
    <div className="container">
      <ul className={getBlocksWithArticleList()}>
        {posts.map(post => {
          return (
            <li className={getBlocksWithArticleItem()} key={post.id}>
              <Link
                to={`/blog/${post.slug}`}
                className={getBlocksWithArticleItem('__content__link')}
              >
                <div className={getBlocksWithArticleItem('__featured-image')}>
                  <img alt={post.title.title} src={post.featuredImage.file.url} />
                </div>
                <div className={getBlocksWithArticleItem('__content')}>
                  <p className={getBlocksWithArticleItem('__content__category')}>{post.category}</p>

                  <h2 className={getBlocksWithArticleItem('__content__title')}>
                    {post.title.title}
                  </h2>
                  {post.description?.raw && <div>{renderRichText(post.description)}</div>}
                  <div className={getBlocksWithArticleItem('__content__meta')}>
                    <span className="meta">{post.publishDate}</span>
                  </div>
                  <p className={getBlocksWithArticleItem('__content__excerpt')}>
                    {post.leadParagraph.leadParagraph}
                  </p>
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
