import React, { useState } from 'react';

import * as styles from './Features.module.scss';

import {
  collapsableList,
  customerIcons,
  featuresList,
  frameworkIconsDotNet,
  frameworkIconsJava,
  frameworkIconsJavascript,
  frameworkIconsOther,
  frameworkIconsPhp,
  frameworkIconsPython,
  languageList,
  navigationList,
} from './dataSource';

import { iconsCommon } from '../../utils/imageSource';

export const Features = () => {
  const [currentLanguage, setActiveLanguage] = useState('java');
  const [shownItem, setShownItem] = useState();

  function currentFrameworks() {
    const frameworks = {
      java: frameworkIconsJava,
      dotnet: frameworkIconsDotNet,
      javascript: frameworkIconsJavascript,
      python: frameworkIconsPython,
      php: frameworkIconsPhp,
    };

    return frameworks[currentLanguage] || frameworkIconsOther;
  }

  return (
    <div>
      <div className={styles.background_hero}>
        <div className={styles.backgroundhero_heading}>
          <h2>FEATURES</h2>
          <h1>Empower your testing process with ReportPortal</h1>
        </div>
        <div className={styles.image_dashboard}>
          <img src={iconsCommon.dashboard} />
        </div>
      </div>
      <div className={styles.features_explorer}>
        <div className={styles.features_heading}>
          <h1>Explore ReportPortal features</h1>
        </div>
        <div className={styles.features_navigation}>
          {navigationList.map((nav, index) => (
            <a className={styles.navigation_item} href={nav.link} key={index}>
              <span>{nav.id}</span>
              <span>{nav.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div className={styles.feature_list}>
        {featuresList.map((feature, index) => (
          <div className={styles.feature_blockitem} id={feature.link} key={index}>
            <div className={styles.features_leading}>
              <h1>{feature.title}</h1>
              <p>{feature.description}</p>
              <a href="#">
                Learn more <img src={iconsCommon.arrow} />
              </a>
            </div>

            <div className={styles.features_trailing}>
              <img src={feature.image} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.integrations}>
        <div>
          <h1>Integrate with your existing test automation process</h1>
          <h2>
            Integrate ReportPortal with frameworks, bug tracking systems, infrastructure providers
            you already use and others so as to streamline the development and testing processes
          </h2>
          <button>See all integrations</button>
        </div>
        <div className={styles.integrations_customers}>
          {customerIcons.map((icon, index) => (
            <div className={styles.integrations_customer_icon} key={index}>
              <img src={icon} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.frameworks}>
        <h1>Supported frameworks</h1>
        <h2>Explore supported frameworks by language</h2>

        <div className={styles.frameworks_box}>
          <div className={styles.frameworks_box_header}>
            {languageList.map((lang, index) => (
              <div
                className={lang.id === currentLanguage ? styles.active_lang : ''}
                key={index}
                onClick={() => setActiveLanguage(lang.id)}
              >
                {lang.lang}
              </div>
            ))}
          </div>
          <div className={styles.frameworks_box_content}>
            {currentFrameworks().map((java, index) => (
              <div className={styles.frameworks_box_content_item} key={index}>
                <img src={java.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.subscription}>
        <div className={styles.subscription_leading}>
          <div className={styles.subscription_leading_heading}>
            <h1>Start testing with ReportPortal</h1>
            <h2>
              Ready to get the most of ReportPortal features? Start your <b>30-day free trial</b> or
              get in touch with us to learn more about our offer.
            </h2>
          </div>
          <div className={styles.subscription_leading_button_group}>
            <button className={'btn'}>Start free trial</button>
            <button className="btn-clear">Get a quote</button>
          </div>
        </div>
        <div className={styles.subscription_trailing}>
          <img src={iconsCommon.subscription} />
        </div>
      </div>
      <div className={styles.faq}>
        <div className={styles.faq_heading}>
          <h1>Frequently asked questions</h1>
        </div>
        <div className={styles.faq_content}>
          {collapsableList.map((item, index) => (
            <div className={styles.faq_content_item} key={index}>
              <div className={styles.faq_content_item_title}>
                <h1>{item.title} </h1>
                <img
                  className={`${shownItem !== item.id ? styles.arrowshown : ''}`}
                  src={iconsCommon.arrowalt}
                  onClick={() => setShownItem(item.id)}
                />
              </div>
              <div
                className={`${styles.faq_content_item_description} ${
                  shownItem === item.id ? styles.shown : styles.collapsed
                }`}
              >
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contact_us}>
        <div className={styles.contact_info_block}>
          <h1>Still have questions about our features?</h1>
          <button className="btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};
