import React, { useCallback, useState } from 'react';

import {
  frameworkIconsDotNet,
  frameworkIconsJava,
  frameworkIconsJavascript,
  frameworkIconsOther,
  frameworkIconsPhp,
  frameworkIconsPython,
  languageList,
} from './dataSource';

import * as styles from './SupportedFrameworks.module.scss';

export const SupportedFrameworks = () => {
  const [currentLanguage, setActiveLanguage] = useState('java');

  const getCurrentFrameworks = useCallback(() => {
    const frameworks = {
      java: frameworkIconsJava,
      dotnet: frameworkIconsDotNet,
      javascript: frameworkIconsJavascript,
      python: frameworkIconsPython,
      php: frameworkIconsPhp,
    };

    return frameworks[currentLanguage] || frameworkIconsOther;
  }, [currentLanguage]);

  return (
    <div className={styles.frameworks_wrapper}>
      <div className={styles.frameworks_box}>
        <div className={styles.frameworks_box_header}>
          {languageList.map(({ id, lang }) => (
            <div
              className={id === currentLanguage ? styles.active_lang : ''}
              key={lang}
              onClick={() => setActiveLanguage(id)}
            >
              {lang}
            </div>
          ))}
        </div>
        <div className={styles.frameworks_box_content}>
          {getCurrentFrameworks().map(({ icon }, index) => (
            <div className={styles.frameworks_box_content_item} key={index}>
              <img src={icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
