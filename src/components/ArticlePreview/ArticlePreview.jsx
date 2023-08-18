import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { ArticleAuthor } from '../ArticleAuthor/ArticleAuthor';
import { createBemBlockBuilder } from '../../utils';

import './ArticlePreview.scss';

const getBlocksWithArticleList = createBemBlockBuilder(['article-list']);
const getBlocksWithArticleItem = createBemBlockBuilder(['article-item']);

export const ArticlePreview = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  return (
    <div className="container">
      <ul className={getBlocksWithArticleList()}>
        {posts.map(post => {
          return (
            <li className={getBlocksWithArticleItem()} key={post.id}>
              <div className={getBlocksWithArticleItem('__featured-image')}>
                <GatsbyImage image={getImage(post.featuredImage)} alt={post.title.title} />
              </div>
              <div className={getBlocksWithArticleItem('__content')}>
                <p className={getBlocksWithArticleItem('__content__category')}>{post.category}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className={getBlocksWithArticleItem('__content__link')}
                >
                  <h2 className={getBlocksWithArticleItem('__content__title')}>
                    {post.title.title}
                  </h2>
                </Link>
                {post.description?.raw && <div>{renderRichText(post.description)}</div>}
                <div className={getBlocksWithArticleItem('__content__meta')}>
                  <span className="meta">{post.publishDate}</span>
                </div>
                <p className={getBlocksWithArticleItem('__content__excerpt')}>
                  {post.leadParagraph.leadParagraph}
                </p>
                <ArticleAuthor authorName={post.author} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
