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
import styles from './notes.scss';

const cx = classNames.bind(styles);

const Notes = ({ notes }) =>
  notes.map((note, i) => (
    <div key={`note${i}`} className={cx('note')}>
      <div className={cx('content')}>
        <div className={cx('name')}>{notes.length > 1 ? `Note ${i + 1}` : 'Note'}</div>
        <div className={cx('text')}>{note}</div>
      </div>
    </div>
  ));
Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
};
Notes.defaultProps = {
  title: '',
  isSimple: false,
};

export default Notes;
