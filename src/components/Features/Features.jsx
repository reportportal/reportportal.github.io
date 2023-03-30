import * as styles from './Features.module.scss';

import React, { useState } from 'react';
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
} from './dataSource.js';

import DOMPurify from 'dompurify'
import { icons_common } from '../../utils/imageSource';

export const Features = () => {
  const [currentLang, setActiveLang] = useState('java');
  const [shownItem, setshownItem] = useState();

  function currentFrameworks() {
    if (currentLang == 'java') {
      return frameworkIconsJava;
    } else if (currentLang == 'dotnet') {
      return frameworkIconsDotNet;
    } else if (currentLang == 'javascript') {
      return frameworkIconsJavascript;
    } else if (currentLang == 'python') {
      return frameworkIconsPython;
    } else if (currentLang == 'php') {
      return frameworkIconsPhp;
    } else {
      return frameworkIconsOther;
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
          <img src={icons_common.dashboard}></img>
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
                Learn more <img src={icons_common.arrow} />
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
            <button>Start free trial</button>
            <button>Get a quote</button>
          </div>
        </div>
        <div classNem={styles.subscription_trailing}>
          <img src={icons_common.subscription}></img>
        </div>
      </div>

      <div className={styles.faq}>
        <div className={styles.faq_heading}>
          <h1>Frequently asked qustions</h1>
        </div>
        <div className={styles.faq_content}>
          {collapsableList.map((item) => (
            <div className={styles.faq_content_item}>
              <div className={styles.faq_content_item_title}>
                <h1>{item.title} </h1>
                <img
                  className={`${shownItem != item.id ? styles.arrowshown : ''}`}
                  src={icons_common.arrowalt}
                  onClick={() => setshownItem(item.id)}
                />
              </div>
              <div
                className={`${styles.faq_content_item_description} ${shownItem == item.id ? styles.shown : styles.collapsed }`}>
                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.description)}}></p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className={styles.contact_us}>
        <h1>Still have questions about our features?</h1>
        <div></div>
        <button>Contact Us</button>

      </div>



    </div>
  );
};
