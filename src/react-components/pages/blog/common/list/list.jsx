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
import styles from './list.scss';

const cx = classNames.bind(styles);

const List = ({ title, list, isSimple }) => {
    const prefix = isSimple ? 'simple-' : '';

    return (
        <>
            {title && <p className={cx('title')}>{title}</p>}
            <ul className={cx(`${prefix}list`)}>
                {list.map((item, i) => (
                    <li key={`${prefix}list-item${i}`} className={cx(`${prefix}list-item`)}>
                        <div className={cx(`${prefix}list-item-text`)}>
                            {item}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
};
List.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.node).isRequired,
    isSimple: PropTypes.bool,
};
List.defaultProps = {
    title: '',
    isSimple: false,
};

export default List;
