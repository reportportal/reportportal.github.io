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
import classnames from 'classnames';
import Cell from 'react-components/table/table-cell/cell.jsx';
import './table.scss';

const Table = ({
  className,
  data,
}) => (
  <div className={classnames('table', className)}>
    <div className="header">
        {data.headers.map(header => <Cell key={header} className="header-cell">{header}</Cell>)}
    </div>
    <div className="body">
      {data.rows.map((row, i) => <div
        key={i}
        className="row"
      >
        {row.map((cell, j) => <Cell key={`${i}-${j}`}>{cell}</Cell>)}
      </div>)}
      {data.footer && <div className="footer">{data.footer}</div>}
    </div>
</div>
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
