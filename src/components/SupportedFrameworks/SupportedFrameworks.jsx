import React, { useCallback, useState } from 'react';
import { Tabs, ConfigProvider } from 'antd';

import { createBemBlockBuilder } from '@utils';

import {
  FRAMEWORK_ICONS_DOT_NET,
  FRAMEWORK_ICONS_JAVA,
  FRAMEWORK_ICONS_JAVASCRIPT,
  FRAMEWORK_ICONS_OTHER,
  FRAMEWORK_ICONS_PHP,
  FRAMEWORK_ICONS_PYTHON,
  TAB_LIST,
  $colorPrimary600,
  $textService,
  $colorPrimary500,
  $poppinsFont,
} from './constants';
import { Link } from '../Link';

import './SupportedFrameworks.scss';

const getBlocksWith = createBemBlockBuilder(['frameworks']);

const activeTab = TAB_LIST[0].label;

export const SupportedFrameworks = () => {
  const [currentLanguage, setActiveLanguage] = useState(activeTab);

  const getCurrentFrameworks = useCallback(() => {
    const frameworks = {
      java: FRAMEWORK_ICONS_JAVA,
      dotnet: FRAMEWORK_ICONS_DOT_NET,
      javascript: FRAMEWORK_ICONS_JAVASCRIPT,
      python: FRAMEWORK_ICONS_PYTHON,
      php: FRAMEWORK_ICONS_PHP,
      other: FRAMEWORK_ICONS_OTHER,
    };

    return frameworks[currentLanguage] || FRAMEWORK_ICONS_JAVA;
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
              items={TAB_LIST}
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
