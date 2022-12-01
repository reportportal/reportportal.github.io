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
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './blogPageHeader.scss';

const cx = classNames.bind(styles);

const BlogPageHeader = ({ tags, date }) => (
    <>
        <div className={cx('additional-background')}/>
        <div className={cx('background')}>
            <div className={cx('background-content')}>
                <div className={cx('date')}>
                    {date}
                </div>
                <div className={cx('tags')}>
                    {tags.map((tag, i) => (
                        <span key={`tag${i}`} className={cx('tag')}>
              #{tag}
            </span>
                    ))}
                </div>
            </div>
        </div>
    </>
);
BlogPageHeader.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
};

export default BlogPageHeader;
