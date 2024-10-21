import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { Link } from '@app/components/Link';
import { useHomePage } from '@app/hooks/useHomePage';
import {
  createBemBlockBuilder,
  defaultSpringTransition,
  DOCUMENTATION_URL,
  easeInOutTransition,
  opacityScaleAnimationProps,
  PropsWithAnimation,
} from '@app/utils';
import { AnimatedHeader } from '@app/components/AnimatedHeader';
import { useInView } from '@app/hooks/useInView';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';

import './ProcessIntegration.scss';

const getBlocksWith = createBemBlockBuilder(['process-integration']);

export const ProcessIntegration = forwardRef<HTMLDivElement, PropsWithAnimation>(
  ({ isAnimationEnabled = false }, ref) => {
    const { integrations } = useHomePage();
    const [containerRef, isInView] = useInView();

    const getButtonAnimation = useMotionEnterAnimation(
      {
        ...opacityScaleAnimationProps,
        ...easeInOutTransition,
      },
      isAnimationEnabled,
    );

    return (
      <section className={getBlocksWith()} ref={ref}>
        <div className="container" ref={containerRef}>
          <AnimatedHeader
            isAnimationEnabled={isAnimationEnabled}
            transition={defaultSpringTransition}
          >
            Integrate with your existing test automation process
          </AnimatedHeader>
          <AnimatedHeader isAnimationEnabled={isAnimationEnabled} headerLevel={3} delay={0.1}>
            Integrate ReportPortal with frameworks, bug tracking systems, infrastructure providers
            you already use and others so as to streamline the development and testing processes
          </AnimatedHeader>
          <motion.div
            className={getBlocksWith('__link-container')}
            {...getButtonAnimation({ isInView, delay: 0.1 })}
          >
            <Link className="btn btn--outline btn--large" to={`${DOCUMENTATION_URL}/plugins/`}>
              See all integrations
            </Link>
          </motion.div>
        </div>
        <div className={getBlocksWith('__carousel')}>
          <Marquee
            className={getBlocksWith('__carousel-marquee')}
            speed={25}
            gradientWidth="19.27%"
          >
            {[integrations, integrations].flat().map((slide, index) => (
              <div className={getBlocksWith('__carousel-logo')} key={index}>
                <img src={slide.icon.url} alt={slide.alt} />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    );
  },
);

ProcessIntegration.displayName = 'ProcessIntegration';
