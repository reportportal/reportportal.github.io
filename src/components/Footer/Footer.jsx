import React from 'react';
import { Divider } from 'antd';
import cx from 'classnames';

import { Link } from '../Link';
import { createBemBlockBuilder, isAbsoluteURL } from '../../utils';
import ArrowIcon from '../../svg/arrow.inline.svg';
import TwitterIcon from './icons/twitter.inline.svg';
import YoutubeIcon from './icons/youtube.inline.svg';
import GithubIcon from './icons/github.inline.svg';
import SlackIcon from './icons/slack.inline.svg';
import LinkedinIcon from './icons/linkedin.inline.svg';
import LambdaIcon from './icons/lambda.inline.svg';
import { NavLogoIcon } from './icons';

import './Footer.scss';

const getBlocksWith = createBemBlockBuilder(['footer']);
const DOCUMENTATION_URL = process.env.DOCUMENTATION_URL;

const FooterList = ({ title, items }) => {
  return (
    <div className="footer__list">
      <h4>{title}</h4>
      <ul>
        {items.map(item => (
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
    link: `${DOCUMENTATION_URL}/category/releases/`,
  },
  {
    title: 'Integrations',
    link: `${DOCUMENTATION_URL}/category/plugins/`,
  },
  {
    title: 'Pricing',
    link: '/pricing/on-premises',
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
    link: DOCUMENTATION_URL,
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
    link: `${DOCUMENTATION_URL}/FAQ/`,
  },
];

const socialLinks = [
  {
    link: 'https://slack.epmrpp.reportportal.io/',
    icon: <SlackIcon />,
  },
  {
    link: 'https://twitter.com/reportportal_io',
    icon: <TwitterIcon />,
  },
  {
    link: 'https://www.linkedin.com/company/reportportal/',
    icon: <LinkedinIcon />,
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
              analysis and reporting through the use of built-in analytics features.
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
                <Link to="https://www.epam.com/">EPAM</Link>
              </span>
              <span>Licensed under Apache v2.0</span>
            </span>
            <div className={getBlocksWith('__terms')}>
              <Link to="/legal/terms">Terms & Conditions</Link>
              <Link to="https://privacy.epam.com/core/interaction/showpolicy?type=PrivacyPolicy">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className={getBlocksWith('__other-links')}>
            <ul className={getBlocksWith('__social-links')}>
              {socialLinks.map((socialLink, index) => (
                <li key={index}>
                  <Link to={socialLink.link}>{socialLink.icon}</Link>
                </li>
              ))}
            </ul>
            <Link to="https://www.lambdatest.com/">
              <LambdaIcon />
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};
