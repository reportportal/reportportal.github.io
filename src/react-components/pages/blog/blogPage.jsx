/*
 * Copyright 2023 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import reactWrapper from 'utils/reactWrapper';
import BodyLayout from 'react-components/layouts/bodyLayout.jsx';
import { ELASTIC_BLOG, PERFORMANCE_BLOG, BENEFITS_BLOG, AI_BLOG, VERSIONS_BLOG } from './constants';
import ElasticBlogPage from './elastic-blog-page/elasticBlogPage';
import PerformanceBlogPage from './performance-blog-page/performanceBlogPage';
import BenefitsBlogPage from './benefits-blog-page/benefitsBlogPage';
import AiBlogPage from './ai-blog-page/aiBlogPage';
import VersionsBlogPage from './versions-blog-page/versionsBlogPage';
import styles from './blogPage.scss';

const cx = classNames.bind(styles);

const blogPages = {
  [ELASTIC_BLOG]: ElasticBlogPage,
  [PERFORMANCE_BLOG]: PerformanceBlogPage,
  [BENEFITS_BLOG]: BenefitsBlogPage,
  [AI_BLOG]: AiBlogPage,
  [VERSIONS_BLOG]: VersionsBlogPage,
};

const BlogPage = ({ blogName }) => {
  const Blog = blogPages[blogName];

  return <BodyLayout className={cx('blog-page')}>{Blog && <Blog />}</BodyLayout>;
};
BlogPage.propTypes = {
  blogName: PropTypes.string.isRequired,
};

export default reactWrapper(BlogPage);
