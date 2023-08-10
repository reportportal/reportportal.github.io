import React from 'react';
import { Divider } from 'antd';
import cx from 'classnames';

import { Link } from '../Link';

import './Footer.scss';

import { createBemBlockBuilder, isAbsoluteURL } from '../../utils';
import { ArrowIcon, GithubIcon, NavLogoIcon, SlackIcon, TwitterIcon, YoutubeIcon, InstagramIcon } from './icons';

const getBlocksWith = createBemBlockBuilder(['footer']);

const FooterList = ({ title, items }) => {
  return (
    <div className="footer__list">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <Link to={item.link}>
              {item.title}
              {isAbsoluteURL(item.link) && <ArrowIcon />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const productLinks = [
  {
    title: 'Installation',
    link: '/installation',
  },
  {
    title: 'Features',
    link: '/features',
  },
  {
    title: 'Release notes',
    link: '//release-notes',
  },
  {
    title: 'Integrations',
    link: '//integrations',
  },
  {
    title: 'Pricing',
    link: '/pricing',
  },
];

const servicesLinks = [
  {
    title: 'Testing as a Service',
    link: '/testing-as-a-service',
  },
  {
    title: 'Test Automation as a Service',
    link: '/test-automation-as-a-service',
  },
  {
    title: 'Quality Assessment',
    link: '/quality-assessment',
  },
];

const solutionsLinks = [
  {
    title: 'TDSpora',
    link: 'https://tdspora.ai/',
  },
  {
    title: 'Drill4J',
    link: 'https://drill4j.github.io/',
  },
  {
    title: 'Healenium',
    link: 'https://healenium.io/',
  },
  {
    title: 'QaSpace',
    link: 'https://marketplace.atlassian.com/apps/1214038/qaspace-test-management?tab=overview&hosting=server',
  },
];

const learnLinks = [
  {
    title: 'Documentation',
    link: 'https://slack.epmrpp.reportportal.io/',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'Case Studies',
    link: '/case-studies',
  },
  {
    title: 'FAQ',
    link: '/faq',
  },
];

const socialLinks = [
  {
    link: 'https://slack.epmrpp.reportportal.io/',
    icon: <SlackIcon />,
  },
  {
    link: 'https://twitter.com/ReportPortal_io',
    icon: <TwitterIcon />,
  },
  {
    link: 'https://instagram.com/ReportPortal_io',
    icon: <InstagramIcon />,
  },
  {
    link: 'https://www.youtube.com/c/ReportPortal',
    icon: <YoutubeIcon />,
  },
  {
    link: 'https://github.com/reportportal/reportportal',
    icon: <GithubIcon />,
  },
];

export const Footer = () => {
  return (
    <footer className={getBlocksWith()}>
      <div className={cx(getBlocksWith('__container'), 'container')}>
        <section className={getBlocksWith('__navigation')}>
          <div className={getBlocksWith('__purpose')}>
            <Link to="/" className={getBlocksWith('__logo')}>
              <NavLogoIcon />
            </Link>
            <span>
              ReportPortal is a service, that provides increased capabilities to speed up results
              analysis and reporting through the use of built-in analytic features.
            </span>
            <span>© {new Date().getFullYear()} EPAM</span>
          </div>
          <div className={getBlocksWith('__navigation-links')}>
            <FooterList title="PRODUCT" items={productLinks} />
            <FooterList title="SERVICES" items={servicesLinks} />
            <FooterList title="SOLUTIONS" items={solutionsLinks} />
            <FooterList title="LEARN" items={learnLinks} />
          </div>
        </section>
        <Divider />
        <section className={getBlocksWith('__secondary')}>
          <div className={getBlocksWith('__legal')}>
            <span className={getBlocksWith('__license')}>
              <span>
                Sponsored by&nbsp;
                <a href="https://www.epam.com/" target="_blank" rel="noopener noreferrer">
                  EPAM
                </a>
              </span>
              <span>Licensed under Apache v2.0</span>
            </span>
            <div className={getBlocksWith('__terms')}>
              <a
                href="https://reportportal.io/legal/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
              <a
                href="https://privacy.epam.com/core/interaction/showpolicy?type=PrivacyPolicy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <ul className={getBlocksWith('__social-links')}>
            {socialLinks.map((socialLink, index) => (
              <li key={index}>
                <a href={socialLink.link} target="_blank" rel="noopener noreferrer">
                  {socialLink.icon}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
};
