import React from 'react';
import * as styles from './StillHaveQuestions.module.scss';

export const StillHaveQuestions = () => {
  return (
    <div className={styles.contact_us}>
      <div className={styles.contact_info_block}>
        <h1>Still have questions about our features?</h1>
        <button className="btn">Contact Us</button>
      </div>
    </div>
  );
};
