import React, { forwardRef } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from '@app/components/Link';
import { useHomePage } from '@app/hooks/useHomePage';
import { createBemBlockBuilder, DOCUMENTATION_URL } from '@app/utils';

import './ProcessIntegration.scss';

const getBlocksWith = createBemBlockBuilder(['process-integration']);

export const ProcessIntegration = forwardRef((props, ref) => {
  const { integrations } = useHomePage();

  return (
    <section className={getBlocksWith()} ref={ref}>
      <div className="container">
        <h2>Integrate with your existing test automation process</h2>
        <h3>
          Integrate ReportPortal with frameworks, bug tracking systems, infrastructure providers you
          already use and others so as to streamline the development and testing processes
        </h3>
        <div className={getBlocksWith('__link-container')}>
          <Link
            className="btn btn--outline btn--large"
            to={`${DOCUMENTATION_URL}/category/plugins/`}
          >
            See all integrations
          </Link>
        </div>
      </div>
      <div className={getBlocksWith('__carousel')}>
        <Marquee className={getBlocksWith('__carousel-marquee')} speed={25} gradientWidth="19.27%">
          {[integrations, integrations].flat().map((slide, index) => (
            <div className={getBlocksWith('__carousel-logo')} key={index}>
              <img src={slide.icon.url} alt={slide.alt} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
});

ProcessIntegration.displayName = 'ProcessIntegration';
