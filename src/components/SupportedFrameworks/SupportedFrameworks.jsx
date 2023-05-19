import React, { useCallback, useState } from 'react';
import { Tabs, ConfigProvider } from 'antd';

import {
  frameworkIconsDotNet,
  frameworkIconsJava,
  frameworkIconsJavascript,
  frameworkIconsOther,
  frameworkIconsPhp,
  frameworkIconsPython,
  tabList,
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
        <div className={styles.frameworks_tabs}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#009DBB',
                colorText: '#8791AB',
                colorHover: '#00B4D5',
                fontFamily: 'Poppins',
                fontSize: 16,
              },
            }}
          >
            <Tabs
              defaultActiveKey="java"
              tabPosition="top"
              items={tabList}
              onTabClick={(tabKey) => setActiveLanguage(tabKey)}
            />
          </ConfigProvider>
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
