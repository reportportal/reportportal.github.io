import React, { FC } from 'react';
import { Divider } from 'antd';
import classNames from 'classnames';
import { Link } from '@app/components/Link';
import { createBemBlockBuilder, isNewYearMode } from '@app/utils';

import { FooterList } from './FooterList';
import { PRODUCT_LINKS, SERVICES_LINKS, SOLUTIONS_LINKS, LEARN_LINKS } from './constants';
import TwitterIcon from './icons/twitter.inline.svg';
import YoutubeIcon from './icons/youtube.inline.svg';
import GithubIcon from './icons/github.inline.svg';
import SlackIcon from './icons/slack.inline.svg';
import LinkedinIcon from './icons/linkedin.inline.svg';
import LambdaIcon from './icons/lambda.inline.svg';
import { NavLogoIcon, NewYearNavLogoIcon } from './icons';

import './Footer.scss';

const getBlocksWith = createBemBlockBuilder(['footer']);

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

export const Footer: FC = () => (
  <footer className={getBlocksWith()}>
    <div className={classNames(getBlocksWith('__container'), 'container')}>
      <section id="footer-content" />
      <section className={getBlocksWith('__navigation')}>
        <div className={getBlocksWith('__purpose')}>
          <Link to="/" className={getBlocksWith('__logo')}>
            {isNewYearMode ? <NewYearNavLogoIcon /> : <NavLogoIcon />}
          </Link>
          <span>
            ReportPortal is a service, that provides increased capabilities to speed up results
            analysis and reporting through the use of built-in analytics features.
          </span>
          <span>© {new Date().getFullYear()} ReportPortal</span>
        </div>
        <div className={getBlocksWith('__navigation-links')}>
          <FooterList title="Product" items={PRODUCT_LINKS} />
          <FooterList title="Services" items={SERVICES_LINKS} />
          <FooterList title="Solutions" items={SOLUTIONS_LINKS} />
          <FooterList title="Resources" items={LEARN_LINKS} />
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
            {socialLinks.map(({ link, icon }) => (
              <li key={link}>
                <Link to={link}>{icon}</Link>
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
