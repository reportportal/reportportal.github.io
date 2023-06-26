import React, { useReducer, useState, useRef, useLayoutEffect } from 'react';
import { useLocation } from '@gatsbyjs/reach-router';
import { useScroll, configResponsive, useResponsive } from 'ahooks';

import cx from 'classnames';

import { collapsableList, featuresList, navigationList } from './dataSource';

import { ProcessIntegration } from '../ProcessIntegration';
import { SupportedFrameworks } from '../SupportedFrameworks';
import { iconsCommon } from '../../utils/imageSource';
import { createBemBlockBuilder } from '../../utils';
import { Link } from '../Link';
import { Banner } from '../InstallationPage/components/Banner';

import './Features.scss';

const getBlocksWith = createBemBlockBuilder(['features-page']);

const faqsInitialState = {
  1: true,
  2: false,
};

configResponsive({
  small: 0,
  middle: 800,
  large: 1240,
});

export const Features = () => {
  const [faqs, updateFAQs] = useReducer(
    (prevState, newState) => ({
      ...faqsInitialState,
      ...(newState && {
        [newState]: !prevState[newState],
      }),
    }),
    faqsInitialState,
  );

  const location = useLocation();
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollYRef = useRef(0);
  const scroll = useScroll();
  const responsive = useResponsive();
  const scrollY = scroll?.top ?? 0;

  const featuresBlockHeight = 126;
  const headerHeight = 86;
  const stickyScrollTopPosition = 1200;
  const featuresBlockHeightWithHeader = featuresBlockHeight - headerHeight;

  useLayoutEffect(() => {
    const direction = scrollY > lastScrollYRef.current ? 'down' : 'up';

    if (
      direction !== scrollDirection &&
      (scrollY - lastScrollYRef.current > 10 || scrollY - lastScrollYRef.current < -10)
    ) {
      setScrollDirection(direction);
    }

    lastScrollYRef.current = Math.max(scrollY, 0);
  }, [scrollY]);

  const handleNavClick = (event, id) => {
    event.preventDefault();

    const anchorTarget = document.getElementById(id.slice(1));
    anchorTarget &&
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };

  return (
    <div className={getBlocksWith()}>
      <div className={getBlocksWith('__hero')}>
        <div className="container">
          <div className={getBlocksWith('__hero-heading')}>
            <h1>Features</h1>
            <h2>Empower your testing process with ReportPortal</h2>
          </div>
          <div className={getBlocksWith('__hero-dashboard')}>
            <img src={iconsCommon.dashboard} alt="" />
          </div>
        </div>
      </div>
      <div
        className={getBlocksWith('__features-explorer')}
        style={{
          position: responsive.large ? 'sticky' : 'relative',
          top:
            scrollDirection === 'up'
              ? `-${featuresBlockHeightWithHeader}px`
              : `-${featuresBlockHeight}px`,
        }}
      >
        <h2
          className={getBlocksWith('__features-heading')}
          style={{
            visibility: `${scrollY > stickyScrollTopPosition ? 'hidden' : 'visible'}`,
          }}
        >
          Explore ReportPortal features
        </h2>
        <div className={getBlocksWith('__features-navigation')}>
          <div className={getBlocksWith('__features-navigation-container')}>
            {navigationList.map(({ id, name, link }) => (
              <Link
                className={cx(getBlocksWith('__features-navigation-item'), {
                  [getBlocksWith('__features-navigation-item--active')]: location.hash === link,
                })}
                to={link}
                key={name}
                onClick={(event) => handleNavClick(event, link)}
              >
                <span>{id}</span>
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={getBlocksWith('__features-list')}>
        {featuresList.map(({ link, title, description, image, isPremium }) => (
          <div
            id={link}
            className={cx(getBlocksWith('__features-list-item'), 'container')}
            key={title}
          >
            <div className={getBlocksWith('__features-list-item-leading')}>
              {isPremium && (
                <span className={getBlocksWith('__features-list-item-premium')}>
                  Premium feature
                </span>
              )}
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#">
                Learn more <img src={iconsCommon.arrow} alt="" />
              </a>
            </div>

            <div className={getBlocksWith('__features-list-item-trailing')}>
              <img src={image} alt="" />
            </div>
          </div>
        ))}
      </div>
      <ProcessIntegration />

      <div className={getBlocksWith('__frameworks')}>
        <div className="container">
          <h2>Supported frameworks</h2>
          <h3>Explore supported frameworks by language</h3>
        </div>
        <SupportedFrameworks />
      </div>

      <div className={cx(getBlocksWith('__subscription'), 'container')}>
        <div className={getBlocksWith('__subscription-leading')}>
          <div className={getBlocksWith('__subscription-leading-heading')}>
            <h2>Start testing with ReportPortal</h2>
            <h3>
              Ready to get the most of ReportPortal features? Start your <b>30-day free trial</b> or
              get in touch with us to learn more about our offer.
            </h3>
          </div>
          <div className={getBlocksWith('__subscription-leading-button-group')}>
            <button className="btn btn--primary btn--large">Start free trial</button>
            <button className="btn btn--outline btn--large">Get a quote</button>
          </div>
        </div>
        <div className={getBlocksWith('__subscription-trailing')}>
          <img src={iconsCommon.subscription} alt="" />
        </div>
      </div>
      <div className={cx(getBlocksWith('__faq'), 'container')}>
        <div className={getBlocksWith('__faq-heading')}>
          <h2>Frequently asked questions</h2>
        </div>
        <div className={getBlocksWith('__faq-content')}>
          {collapsableList.map(({ id, title, description }) => (
            <button
              className={getBlocksWith('__faq-content-item')}
              key={title}
              type="button"
              onClick={() => updateFAQs(id)}
            >
              <div className={getBlocksWith('__faq-content-item-title')}>
                <h3>{title} </h3>
                <img
                  className={cx({
                    [getBlocksWith('__faq-content-item-title--arrow-shown')]: faqs[id],
                  })}
                  src={iconsCommon.arrowalt}
                  alt=""
                />
              </div>
              <div
                className={cx(getBlocksWith('__faq-content-item-description'), {
                  [getBlocksWith('__faq-content-item-description--shown')]: faqs[id],
                })}
              >
                <p>{description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className={getBlocksWith('__banner')}>
        <Banner title="Still have questions about our features?" linkTitle="Contact Us" link="#" />
      </div>
    </div>
  );
};
