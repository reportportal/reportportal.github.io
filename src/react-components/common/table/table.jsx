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
import Cell from 'react-components/common/table/table-cell/cell.jsx';
import styles from './table.scss';

const cx = classNames.bind(styles);

const Table = ({
  className,
  data,
}) => (
  <table className={cx('table', className)}>
    <thead className={cx('header')}>
      <tr>
        <Cell className={cx('header-cell', 'padding-cell')}/>
        {data.headers.map(header => <Cell key={header} className={cx('header-cell')}>{header}</Cell>)}
        <Cell className={cx('header-cell', 'padding-cell')}/>
      </tr>
    </thead>
    <tbody className={cx('body')}>
      {data.rows.map((row, i) => <tr
        key={i}
        className={cx('row')}
      >
        <Cell className={cx('cell', 'padding-cell')}/>
        {row.map((cell, j) => <Cell className={cx('cell')} key={`${i}-${j}`}>{cell}</Cell>)}
        <Cell className={cx('cell', 'padding-cell')}/>
      </tr>)}
      {data.footer && <tr className={cx('footer')}>{data.footer}</tr>}
    </tbody>
  </table>
);

Table.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    headers: PropTypes.arrayOf(PropTypes.node).isRequired,
    rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
    footer: PropTypes.element,
  }).isRequired,
};
Table.defaultProps = {
  className: '',
};

export default Table;
