import React, { FC } from 'react';
import { Link } from 'gatsby';
import { Typography } from 'antd';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BlogPostDto, createBemBlockBuilder } from '@app/utils';

import { ArticleAuthor } from './ArticleAuthor';

import './ArticlePreviewItem.scss';

const getBlocksWith = createBemBlockBuilder(['article-preview-item']);

interface ArticlePreviewItemProps {
  post: BlogPostDto;
}

export const ArticlePreviewItem: FC<ArticlePreviewItemProps> = ({ post }) => (
  <li className={getBlocksWith()}>
    <Link to={`/blog/${post.slug}`} className={getBlocksWith('__link')}>
      <div className={getBlocksWith('__featured-image')}>
        <img alt={post.featuredImage.description} src={post.featuredImage.file.url} />
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
