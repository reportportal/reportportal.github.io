import React from 'react';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { SubscriptionBanner } from '@components/SubscriptionBanner';

import ArrowLeft from './icons/arrow-left.svg';
import User from './icons/user.svg';
import Calendar from './icons/calendar.svg';
import { OPTIONS } from './constants';

import './BlogPostPage.scss';

interface Props {
  author: string
  articleBody: any
  date: string
  industry: string
  title?: {
    title: string
  }
}
export const BlogPostPage: React.FC<Props> = ({ industry, title, author, date, articleBody }) => (
  <>
    <div className="blog-post-page">
      <div className="blog-post-page__head">
        <p className="blog-post-page__industry">{industry}</p>
        <h1 className="blog-post-page__title">{title?.title}</h1>
        <div className="blog-post-page__info">
          <Link className="btn btn--white btn--large back-to-blog" to="/blog/">
            <img src={ArrowLeft} alt="arrow left" />
            Back to blog
          </Link>
          <div className="blog-post-page__info-aside">
            <div className="button-with-icon">
              <img className="button-with-icon__image" src={User} alt="user" />
              <span className="button-with-icon__text">{author}</span>
            </div>
            <div className="button-with-icon">
              <img className="button-with-icon__image" src={Calendar} alt="calendar" />
              <span className="button-with-icon__text">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="blog-post-page__container container">
      {articleBody?.raw && renderRichText(articleBody, OPTIONS)}
    </div>
    <SubscriptionBanner />
  </>
);
