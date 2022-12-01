/*
 * Copyright 2022 EPAM Systems
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
import { ELASTIC_BLOG, PERFORMANCE_BLOG } from './constants';
import ElasticBlogPage from './elastic-blog-page/elasticBlogPage';
import PerformanceBlogPage from './performance-blog-page/performanceBlogPage';
import styles from './blogPage.scss';

const cx = classNames.bind(styles);

const BlogPage = ({ blogName }) => {
    const getBlog = () => {
        switch (blogName) {
            case ELASTIC_BLOG:
                return <ElasticBlogPage />;
            case PERFORMANCE_BLOG:
                return <PerformanceBlogPage />;
            default:
                return null;
        }
    }

    return (
        <BodyLayout className={cx('blog-page')}>
            {getBlog()}
        </BodyLayout>
    )
};
BlogPage.propTypes = {
    blogName: PropTypes.string.isRequired,
}

export default reactWrapper(BlogPage);
