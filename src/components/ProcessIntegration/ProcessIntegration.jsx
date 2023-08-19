import React, { forwardRef } from 'react';
import Marquee from 'react-fast-marquee';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';
import SauceLabsIcon from './icons/saucelabs.inline.svg';
import MicrosoftIcon from './icons/microsoft.inline.svg';
import SAMLIconIcon from './icons/saml.inline.svg';
import AzureDOIcon from './icons/azuredo.inline.svg';
import RallyIcon from './icons/rally.inline.svg';
import Jira1Icon from './icons/jira1.inline.svg';
import Jira2Icon from './icons/jira2.inline.svg';
import AzureSAMLIcon from './icons/azuresaml.inline.svg';
import OktaIcon from './icons/okta.inline.svg';

import './ProcessIntegration.scss';

const getBlocksWith = createBemBlockBuilder(['process-integration']);

export const icons = [
  { icon: <SauceLabsIcon /> },
  { icon: <MicrosoftIcon /> },
  { icon: <SAMLIconIcon /> },
  { icon: <AzureDOIcon /> },
  { icon: <RallyIcon /> },
  { icon: <Jira1Icon /> },
  { icon: <Jira2Icon /> },
  { icon: <AzureSAMLIcon /> },
  { icon: <OktaIcon /> },
];

export const ProcessIntegration = forwardRef((props, ref) => (
  <section className={cx(getBlocksWith())} ref={ref}>
    <div className="container">
      <h2>Integrate with your existing test automation process</h2>
      <h3>
        Integrate ReportPortal with frameworks, bug tracking systems, infrastructure providers you
        already use and others so as to streamline the development and testing processes
      </h3>
      <button className={cx('btn', 'btn--outline', 'btn--large')}>See all integrations</button>
    </div>
    <div className={getBlocksWith('__carousel')}>
      <Marquee className={getBlocksWith('__carousel-marquee')} speed={25} gradientWidth="19.27%">
        {[icons, icons].flat().map((slide, index) => (
          <div className={getBlocksWith('__carousel-logo')} key={index}>
            {slide.icon}
          </div>
        ))}
      </Marquee>
    </div>
  </section>
));

ProcessIntegration.displayName = 'ProcessIntegration';
