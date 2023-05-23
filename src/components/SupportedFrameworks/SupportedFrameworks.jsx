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
import { createBemBlockBuilder } from '../../utils';
import { $colorPrimary600, $textService, $colorPrimary500, $poppinsFont } from './styleVariables';

import './SupportedFrameworks.scss';

const getBlocksWith = createBemBlockBuilder(['frameworks']);

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
    <div className={getBlocksWith()}>
      <div className={getBlocksWith('__box')}>
        <div className={getBlocksWith('__box-tabs')}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: $colorPrimary600,
                colorText: $textService,
                colorHover: $colorPrimary500,
                fontFamily: $poppinsFont,
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

        <div className={getBlocksWith('__box-content')}>
          {getCurrentFrameworks().map(({ icon }, index) => (
            <div className={getBlocksWith('__box-content-item')} key={index}>
              <img src={icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
