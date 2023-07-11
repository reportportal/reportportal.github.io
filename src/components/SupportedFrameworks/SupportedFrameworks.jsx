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
import { Link } from '../Link';

import './SupportedFrameworks.scss';

const getBlocksWith = createBemBlockBuilder(['frameworks']);

const activeTab = tabList[0].label;

export const SupportedFrameworks = () => {
  const [currentLanguage, setActiveLanguage] = useState(activeTab);

  const getCurrentFrameworks = useCallback(() => {
    const frameworks = {
      java: frameworkIconsJava,
      dotnet: frameworkIconsDotNet,
      javascript: frameworkIconsJavascript,
      python: frameworkIconsPython,
      php: frameworkIconsPhp,
      other: frameworkIconsOther,
    };

    return frameworks[currentLanguage] || frameworkIconsJava;
  }, [currentLanguage]);

  const getAlternativeText = (iconLink, index) => {
    const regex = /\/static\/icon_framework_(.*?)-/;
    const match = iconLink.match(regex);

    return match ? match[1] : `image-${index}`;
  };

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
              defaultActiveKey={activeTab}
              tabPosition="top"
              items={tabList}
              onTabClick={setActiveLanguage}
            />
          </ConfigProvider>
        </div>

        <div className={getBlocksWith('__box-content')}>
          {getCurrentFrameworks().map(({ icon, badge, href }, index) => (
            <Link to={href} key={index}>
              <div className={getBlocksWith('__box-content-item')}>
                {badge && <div className={getBlocksWith('__box-badge')}>from contributor</div>}
                <div className={getBlocksWith('__box-content-item-arrow')} />

                <img src={icon} alt={getAlternativeText(icon, index)} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};