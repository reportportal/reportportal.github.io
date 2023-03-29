import * as styles from './Features.module.scss';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { featuresList, navigationList } from './dataSource.js';

import ImageDashboard from '../../svg/ImageDashboard.svg';
import arrow from '../../svg/arrow.svg';

export const Features = () => {


  const ref = useRef()

  // The scroll listener
  const handleScroll = useCallback(() => {
    console.log("scrolling")
  }, [])


  function screen() {
    const div = ref.current
    div.addEventListener("scroll", handleScroll)
  }

  useEffect(() => {
    const div = ref.current
    div.addEventListener("scroll", handleScroll)
  }, [handleScroll])

  screen() 

  return (
    <div id={styles.features_container}  ref={ref}>
      <div className={styles.backgroundhero}>
        <div className={styles.backgroundhero_heading}>
          <h2>Features</h2>
          <h1>Empower your testing process with ReportPortal</h1>
        </div>
        <div className={styles.imagedashboard}>
          <img src={ImageDashboard}></img>
        </div>
      </div>

      <div className={styles.features_explorer} >
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
    </div>
  );
};
