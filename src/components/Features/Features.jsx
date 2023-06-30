import React, { useReducer } from 'react';
import { useLocation } from '@gatsbyjs/reach-router';
import cx from 'classnames';

import { iconsCommon } from '../../utils/imageSource';
import { createBemBlockBuilder } from '../../utils';
import { Link } from '../Link';
import { ProcessIntegration } from '../ProcessIntegration';
import { SupportedFrameworks } from '../SupportedFrameworks';
import { ArrowLink } from '../ArrowLink';
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

  const location = useLocation();

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
      <div className={getBlocksWith('__features-explorer')}>
        <h2 className={getBlocksWith('__features-heading')}>Explore ReportPortal features</h2>
        <div className={getBlocksWith('__features-navigation')}>
          <div className={getBlocksWith('__features-navigation-container')}>
            {navigationList.map(({ id, name, link }) => (
              <Link
                className={cx(getBlocksWith('__features-navigation-item'), {
                  [getBlocksWith('__features-navigation-item--active')]: location.hash === link,
                })}
                to={link}
                key={name}
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
              <ArrowLink mode="primary" to="#" text="Learn more" />
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
