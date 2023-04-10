import React from 'react';
import cx from 'classnames';

import './Notice.scss';

export const Notice = ({ importance = false, children }) => (
  <div className="notes">
    <div className={cx('notes__border', { notes__importance: importance })} />
      <div className="notes__content" >
        {importance && <div className="notes__title">Important!</div>}
        <div className="notes__text">{children}</div>
      </div>
  </div>
)
