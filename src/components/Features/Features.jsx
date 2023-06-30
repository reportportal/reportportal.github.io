import React, { useReducer, useState, useRef, useLayoutEffect } from 'react';
import { useLocation } from '@gatsbyjs/reach-router';
import { useScroll } from 'ahooks';
import cx from 'classnames';
import { useMediaQuery } from 'react-responsive';

import { collapsableList, featuresList, navigationList } from './dataSource';
import { ProcessIntegration } from '../ProcessIntegration';
import { SupportedFrameworks } from '../SupportedFrameworks';
import { iconsCommon } from '../../utils/imageSource';
import { createBemBlockBuilder, removeClassFromElements, mediaDesktopSm } from '../../utils';
import { Link } from '../Link';
import { Banner } from '../InstallationPage/components/Banner';

import './Features.scss';

const getBlocksWith = createBemBlockBuilder(['features-page']);

const faqsInitialState = {
  1: true,
  2: false,
};

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
  const isDesktop = useMediaQuery({ query: mediaDesktopSm });
  const scrollY = scroll?.top ?? 0;

  const featuresBlockStickyPosition = 126;
  const headerHeight = 86;
  const stickyScrollTopPosition = 1200;
  const featuresBlockStickyPositionWithHeader = featuresBlockStickyPosition - headerHeight;
  const menuItemActiveClassName = getBlocksWith('__features-navigation-item--active');
  const featureItemClassName = getBlocksWith('__features-navigation-item');

  const setHistoryValue = (val) => window.history.replaceState(null, '', `/features/${val}`);

  const handleScroll = () => {
    const itemList = document.querySelectorAll(
      `.${getBlocksWith('__features-list-item-container')}`,
    );

    let activeIndex = null;

    // eslint-disable-next-line no-plusplus
    for (let i = itemList.length - 1; i >= 0; i--) {
      const rect = itemList[i].getBoundingClientRect();
      const offset = scrollDirection === 'up' ? rect.height * 0.9 : headerHeight;

      if (rect.top <= offset) {
        activeIndex = i;
        break;
      }
    }

    if (activeIndex !== null) {
      removeClassFromElements(menuItemActiveClassName);

      const menuElements = document.querySelectorAll(`.${featureItemClassName}`);
      const activeMenuElement = menuElements[activeIndex];
      const anchor = navigationList[activeIndex].link;

      activeMenuElement.classList.add(menuItemActiveClassName);

      setHistoryValue(anchor);
    }
  };

  useLayoutEffect(() => {
    const direction = scrollY > lastScrollYRef.current ? 'down' : 'up';

    if (
      direction !== scrollDirection &&
      (scrollY - lastScrollYRef.current > 10 || scrollY - lastScrollYRef.current < -10)
    ) {
      setScrollDirection(direction);
    }

    lastScrollYRef.current = Math.max(scrollY, 0);

    handleScroll();
  }, [scrollY]);

  const handleNavClick = (event, anchor) => {
    event.preventDefault();

    const element = event.target;
    const anchorTarget = document.getElementById(anchor.slice(1));

    removeClassFromElements(menuItemActiveClassName);
    element.closest(`.${featureItemClassName}`).classList.add(menuItemActiveClassName);

    if (anchorTarget) {
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      setHistoryValue(anchor);
    }
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
          position: isDesktop ? 'sticky' : 'relative',
          top:
            scrollDirection === 'up'
              ? `-${featuresBlockStickyPositionWithHeader}px`
              : `-${featuresBlockStickyPosition}px`,
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
                className={cx(featureItemClassName, {
                  [menuItemActiveClassName]: location.hash === link,
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
          <div className={getBlocksWith('__features-list-item-container')} key={link} id={link}>
            <div className={cx(getBlocksWith('__features-list-item'), 'container')} key={title}>
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
