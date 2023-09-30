import React from 'react';
import { Link } from 'gatsby';
import { Typography } from 'antd';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { createBemBlockBuilder } from '@utils';

import { ArticleAuthor } from './ArticleAuthor';

import './ArticlePreviewItem.scss';

const getBlocksWith = createBemBlockBuilder(['article-preview-item']);

export const ArticlePreviewItem = ({ post }) => {
  return (
    <li className={getBlocksWith()}>
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
          <Typography.Paragraph ellipsis={{ rows: 5 }} className={getBlocksWith('__excerpt')}>
            {post.leadParagraph.leadParagraph}
          </Typography.Paragraph>
          <ArticleAuthor authorName={post.author} />
        </div>
      </Link>
    </li>
  );
};
