import React, { useEffect, useRef, useState, FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from '@gatsbyjs/reach-router';
import { useScroll } from 'ahooks';
import classNames from 'classnames';
import { useScrollDirection } from '@app/hooks';
import { createBemBlockBuilder, mediaDesktopSm, iconsCommon, DOCUMENTATION_URL } from '@app/utils';
import {
  Link,
  ProcessIntegration,
  SupportedFrameworks,
  ArrowLink,
  Banner,
  StartTestingWithReportPortal,
  Faq,
  FooterContent,
} from '@app/components';

import { FEATURES_LIST, NAVIGATION_LIST } from './constants';

import './FeaturesPage.scss';

const getBlocksWith = createBemBlockBuilder(['features-page']);

const scrollToAnchor = (anchor: string) => {
  const anchorTarget = document.getElementById(anchor.slice(1));

  if (anchorTarget) {
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
};

export const FeaturesPage: FC = () => {
  const handleScroll = () => {
    const itemList = document.querySelectorAll(
      `.${getBlocksWith('__features-list-item-container')}`,
    );

    let activeIndex: number | null = null;

    // eslint-disable-next-line no-plusplus
    for (let i = itemList.length - 1; i >= 0; i--) {
      const rect = itemList[i].getBoundingClientRect();

      const value = Math.abs(Math.round(rect.top));
      const scrollThreshold = 50;

      if (value <= scrollThreshold) {
        activeIndex = i;
        break;
      }
    }

    if (activeIndex !== null) {
      const anchor = NAVIGATION_LIST[activeIndex].link;

      if (anchor !== activeElement) {
        setActiveElement(anchor);
        setHistoryValue(anchor);
      }
    }
  };

  const location = useLocation();
  const [isFeaturesMenuSticky, setIsFeaturesMenuSticky] = useState(false);
  const [activeElement, setActiveElement] = useState(location.hash);
  const processIntegrationRef = useRef<null | HTMLElement>(null);
  const scrollDirection = useScrollDirection({ callbackFn: handleScroll, isMenuOpen: false });
  const scroll = useScroll();
  const isDesktop = useMediaQuery({ query: mediaDesktopSm });
  const scrollY = scroll?.top ?? 0;

  const featuresBlockStickyPosition = 126;
  const headerHeight = 76;
  const stickyScrollTopPosition = 1200;
  const featuresBlockStickyPositionWithHeader = featuresBlockStickyPosition - headerHeight;
  const menuItemActiveClassName = getBlocksWith('__features-navigation-item--active');
  const featureItemClassName = getBlocksWith('__features-navigation-item');

  const setHistoryValue = val => window.history.replaceState(null, '', `/features${val}`);

  useEffect(() => {
    const processIntegrationTopPosition =
      processIntegrationRef.current?.getBoundingClientRect().top;
    const offset = 100;

    let isStickyPositionReached: boolean = false;

    if (processIntegrationTopPosition) {
      isStickyPositionReached =
        (scrollDirection === 'up'
          ? processIntegrationTopPosition - headerHeight - offset
          : processIntegrationTopPosition - offset) > 0;
    }

    if (isStickyPositionReached && isFeaturesMenuSticky !== isStickyPositionReached) {
      setIsFeaturesMenuSticky(!isFeaturesMenuSticky);
    }
  }, [scroll, scrollDirection, isFeaturesMenuSticky]);

  const handleNavClick = (event, anchor) => {
    event.preventDefault();

    scrollToAnchor(anchor);
  };

  const collapsableList = [
    {
      key: 1,
      label: 'What is meant by "Premium feature"?',
      children: (
        <>
          <p>
            Premium feature is an advanced feature which comes on top of Free Open Source edition.
            It comes at no cost with SaaS offering and included into the &quot;160&quot; Managed
            Services package.
          </p>
          <p>
            See the{' '}
            <Link to={`${DOCUMENTATION_URL}/terms-and-conditions/PremiumFeatures`} className="link">
              List of features
            </Link>{' '}
            and their description.
          </p>
        </>
      ),
    },
    {
      key: 2,
      label: 'What capabilities does Rest API provide?',
      children: (
        <p>
          REST API enables users to easily integrate any testing framework or third-party tool with
          ReportPortal so as to report data into ReportPortal, call analyze action, add attributes,
          merge/update/finish launches. Besides, you can pull the data from ReportPortal in order to
          update the statuses in the pipeline, generate custom reports and many more.
        </p>
      ),
    },
  ];

  return (
    <div className={getBlocksWith()}>
      <div className={getBlocksWith('__hero')}>
        <div className="container">
          <div className={getBlocksWith('__hero-heading')}>
            <h1>Features</h1>
            <h2>Empower your testing process with ReportPortal</h2>
          </div>
          <div className={getBlocksWith('__hero-dashboard')}>
            <img
              src={iconsCommon.dashboard}
              alt=""
              onLoad={() => {
                if (activeElement) {
                  scrollToAnchor(activeElement);
                }
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={getBlocksWith('__features-explorer')}
        style={{
          position: isDesktop && isFeaturesMenuSticky ? 'sticky' : 'relative',
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
            {NAVIGATION_LIST.map(({ id, name, link }) => (
              <Link
                className={classNames(featureItemClassName, {
                  [menuItemActiveClassName]: link === activeElement,
                })}
                to={link}
                key={name}
                onClick={event => handleNavClick(event, link)}
              >
                <span>{id}</span>
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={getBlocksWith('__features-list')}>
        {FEATURES_LIST.map(({ id, link, title, description, image, isPremium }) => (
          <div className={getBlocksWith('__features-list-item-container')} key={id} id={id}>
            <div
              className={classNames(getBlocksWith('__features-list-item'), 'container')}
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
                <ArrowLink mode="primary" to={link} text="Learn more" />
              </div>

              <div className={getBlocksWith('__features-list-item-trailing')}>
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProcessIntegration ref={processIntegrationRef} />
      <div className={getBlocksWith('__frameworks')}>
        <h2>Supported frameworks</h2>
        <h3>Explore supported frameworks by language</h3>
        <SupportedFrameworks />
      </div>
      <StartTestingWithReportPortal />
      <div className={classNames(getBlocksWith('__faq'), 'container')}>
        <Faq items={collapsableList} showMoreInfoLink={false} />
      </div>
      <FooterContent>
        <div className={getBlocksWith('__banner')}>
          <Banner
            title="Still have questions about our features?"
            linkTitle="Contact us"
            link="/contact-us/general"
          />
        </div>
      </FooterContent>
    </div>
  );
};
