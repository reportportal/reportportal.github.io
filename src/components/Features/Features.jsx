import React, { useReducer } from 'react';
import { useLocation } from '@gatsbyjs/reach-router';
import { useScroll } from 'ahooks';
import cx from 'classnames';
import { useMediaQuery } from 'react-responsive';

import { useScrollDirection } from '../../custom-hooks/useScrollDirection';
import { iconsCommon } from '../../utils/imageSource';
import { createBemBlockBuilder, removeClassFromElements, mediaDesktopSm } from '../../utils';
import { Link } from '../Link';
import { ProcessIntegration } from '../ProcessIntegration';
import { SupportedFrameworks } from '../SupportedFrameworks';
import { Banner } from '../InstallationPage/components/Banner';
import { StartTestingWithReportPortal } from '../StartTestingWithReportPortal';
import { featuresList, navigationList } from './dataSource';

import './Features.scss';

const getBlocksWith = createBemBlockBuilder(['features-page']);

export const Features = () => {
  const [faqs, updateFAQs] = useReducer(
    (prevState, index) => {
      const newState = [...prevState];

      newState[index] = !newState[index];

      return newState;
    },
    [true, false],
  );

  const handleScroll = () => {
    const itemList = document.querySelectorAll(
      `.${getBlocksWith('__features-list-item-container')}`,
    );

    let activeIndex = null;

    // eslint-disable-next-line no-plusplus
    for (let i = itemList.length - 1; i >= 0; i--) {
      const rect = itemList[i].getBoundingClientRect();
      const heightOffsetCoefficient = 0.9;
      const offset =
        scrollDirection === 'up' ? rect.height * heightOffsetCoefficient : headerHeight;

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

  const location = useLocation();
  const scrollDirection = useScrollDirection(handleScroll, null);
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

  const collapsableList = [
    {
      title: 'What is meant by "Premium feature"?',
      description: (
        <>
          <p>
            Premium feature is an advanced feature which comes on top of Free Open Source edition.
            It comes at no cost with SaaS offering and included into the &quot;160&quot; Managed
            Services package.
          </p>
          <p>
            See the{' '}
            <a
              href="https://reportportal.io/docs/terms-and-conditions/PremiumFeatures"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              List of features
            </a>{' '}
            and their description.
          </p>
        </>
      ),
    },
    {
      title: 'What capabilities does Rest API provide?',
      description: (
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
      <StartTestingWithReportPortal />
      <div className={cx(getBlocksWith('__faq'), 'container')}>
        <div className={getBlocksWith('__faq-heading')}>
          <h2>Frequently asked questions</h2>
        </div>
        <div className={getBlocksWith('__faq-content')}>
          {collapsableList.map(({ title, description }, i) => (
            <button
              className={getBlocksWith('__faq-content-item')}
              key={title}
              type="button"
              onClick={() => updateFAQs(i)}
            >
              <div className={getBlocksWith('__faq-content-item-title')}>
                <h3>{title}</h3>
                <img
                  className={cx({
                    [getBlocksWith('__faq-content-item-title--arrow-shown')]: faqs[i],
                  })}
                  src={iconsCommon.arrowalt}
                  alt=""
                />
              </div>
              <div
                className={cx(getBlocksWith('__faq-content-item-description'), {
                  [getBlocksWith('__faq-content-item-description--shown')]: faqs[i],
                })}
              >
                {description}
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
