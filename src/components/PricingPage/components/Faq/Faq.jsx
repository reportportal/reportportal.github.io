import React, { useState, useCallback } from 'react';

import * as styles from './Faq.module.scss';
import { collapsableList } from './faqData';
import { CollapsePanel } from './components/CollapsePanel/CollapsePanel';
import { Link } from '../../../Link';
import { ArrowIcon } from '../../../Footer/icons';

export const Faq = () => {
  const [shownItems, setShownItems] = useState(() => collapsableList.map(() => false));

  const updateArrowStatus = useCallback(
    (index) => () => {
      const status = [...shownItems];
      status[index] = !status[index];
      setShownItems(status);
    },
    [shownItems],
  );
  return (
    <>
      <div className={styles.faq}>
        <div className={styles.faq_heading}>
          <h1>Frequently asked questions</h1>
        </div>
        <div className={styles.faq_content}>
          {collapsableList.map(({ title, description }, index) => (
            <CollapsePanel
              key={index}
              title={title}
              description={description}
              index={index}
              onClick={updateArrowStatus}
              isShow={shownItems[index]}
            />
          ))}
        </div>
        <div className={styles.faq_link}>
          <p>
            More information on the link to our
            <Link className={styles.faq_doc_link} to={''}>
              {'    Documentation   '}
              <ArrowIcon />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
