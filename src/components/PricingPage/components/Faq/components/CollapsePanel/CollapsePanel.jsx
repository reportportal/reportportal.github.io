import React from 'react';
import cx from 'classnames';
import * as styles from './CollapsePanel.module.scss';
import { iconsCommon } from '../../../../../../utils/imageSource';

export const CollapsePanel = ({ title, description, index, onClick, isShow }) => {
  return (
    <div className={styles.faq_content_item} key={title}>
      <div className={styles.faq_content_item_title}>
        <h1>{title} </h1>
        <img
          className={cx({ [styles.arrowshown]: !isShow })}
          src={iconsCommon.arrowLight}
          onClick={onClick(index)}
        />
      </div>
      <div
        className={cx(styles.faq_content_item_description, {
          [styles.shown]: isShow,
          [styles.collapsed]: !isShow,
        })}
      >
        {description.split('\n').map((str, idx) => (
          <p key={idx + str.slice(5)}>{str}</p>
        ))}
      </div>
    </div>
  );
};
