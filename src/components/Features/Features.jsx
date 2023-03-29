import * as styles from './Features.module.scss';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { customerIcons, featuresList, frameworkIconsDotNet, frameworkIconsJava, languageList, navigationList } from './dataSource.js';

import ImageDashboard from '../../svg/ImageDashboard.svg';
import arrow from '../../svg/arrow.svg';

export const Features = () => {
  const [currentLang, setActiveLang] = useState('java');


  function currentFrameworks() {
    if  (currentLang == "java") {
      return  frameworkIconsJava
    } else {
      return frameworkIconsDotNet
    }

  }
  return (
    <div id={styles.features_container}>
      <div className={styles.backgroundhero}>
        <div className={styles.backgroundhero_heading}>
          <h2>Features</h2>
          <h1>Empower your testing process with ReportPortal</h1>
        </div>
        <div className={styles.imagedashboard}>
          <img src={ImageDashboard}></img>
        </div>
      </div>

      <div className={styles.features_explorer}>
        <div className={styles.features_heading}>
          <h1>Explore ReportPortal features</h1>
        </div>

        <div className={styles.features_navigation}>
          {navigationList.map((nav) => (
            <a className={styles.navigation_item} href={nav.link}>
              <span>{nav.id}</span>
              <span>{nav.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.feature_list}>
        {featuresList.map((feature) => (
          <div className={styles.feature_blockitem} id={feature.link}>
            <div className={styles.features_description}>
              <h1>{feature.title}</h1>
              <p>{feature.description}</p>
              <a>
                Learn more <img src={arrow} />
              </a>
            </div>

            <div className={styles.features_image}>
              <img src={feature.image}></img>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.integrations}>
        <div className={styles.integrations_heading}>
          <h1>Integrate with your existing test automation process</h1>
          <h2>
            Integrate ReportPortal with frameworks, bug tracking systems, infrastructure providers
            you already use and others so as to streamline the development and testing processes
          </h2>
          <button>See all integrations</button>
        </div>

        <div className={styles.intergrations_customers}>
          {customerIcons.map((icon) => (
            <div className={styles.intergrations_customer_icon}>
              <img src={icon}></img>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.frameworks}>
        <h1>Supported frameworks</h1>
        <h2>Explore supported frameworks by language</h2>

        <div className={styles.frameworks_box}>
          <div className={styles.frameworks_box_header}>
            {languageList.map((lang) => (
              <div
                onClick={() => setActiveLang(lang.id)}
                className={lang.id == currentLang ? styles.active_lang : ''}
              >
                {lang.lang}
              </div>
            ))}
          </div>
          <div className={styles.frameworks_box_content}>
            {currentFrameworks().map((java) => (
              <div className={styles.frameworks_box_content_item}>
                <img src={java.icon}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
