import React, { useEffect, useState, useRef, FC } from 'react';
import { motion } from 'framer-motion';
import { useScroll, useSize } from 'ahooks';
import {
  createBemBlockBuilder,
  getEaseInOutTransition,
  opacityScaleAnimationProps,
} from '@app/utils';
import { useMotionEnterAnimation } from '@app/hooks/useMotionEnterAnimation';

import { ScrollItem } from './ScrollItem';

import '../InstallationPage.scss';
import './ScrollIndicator.scss';

const getBlocksWith = createBemBlockBuilder(['indicatory']);

const FIRST_POSITION_OFFSET = 200;
const OFFSET = 20;
const HERO_HEIGHT = 500;
const DEFAULT_BOTTOM_LINE_POSITION = 400;

const HEADER_HEIGHT = 76;

interface ScrollIndicatorProps {
  sections: { id: string; title: string; step?: string }[];
  isInView: boolean;
}

export const ScrollIndicator: FC<ScrollIndicatorProps> = ({ sections, isInView }) => {
  const [offset, setOffset] = useState(-FIRST_POSITION_OFFSET);
  const [indicatorTopPosition, setIndicatorTopPosition] = useState(HEADER_HEIGHT);
  const scroll = useScroll();

  const [topPosition, setTopPosition] = useState(0);
  const [bottomPosition, setBottomPosition] = useState(-DEFAULT_BOTTOM_LINE_POSITION);

  const indicatoryRef = useRef(null);
  const indicatoryScrollPosition = useScroll(indicatoryRef);
  const pathRef = useRef(null);
  const pathSize = useSize(pathRef);
  const indicatorySize = useSize(indicatoryRef);
  const getLineAnimation = useMotionEnterAnimation({
    ...opacityScaleAnimationProps,
    ...getEaseInOutTransition(0.3),
  });

  useEffect(() => {
    const top = (indicatoryScrollPosition?.top ?? 0) + HERO_HEIGHT;
    const bottom = (pathSize?.height ?? 0) - (indicatorySize?.height ?? 0) - top;

    const adjustedBottom = bottom < HERO_HEIGHT ? DEFAULT_BOTTOM_LINE_POSITION : bottom;

    setTopPosition(-top);
    setBottomPosition(-adjustedBottom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indicatoryScrollPosition?.top]);

  useEffect(() => {
    setOffset((scroll?.top ?? 0) < FIRST_POSITION_OFFSET ? -FIRST_POSITION_OFFSET : -OFFSET);
  }, [scroll]);

  useEffect(() => {
    const viewportHeight = window.innerHeight;

    const marginValue = (viewportHeight - (indicatorySize?.height ?? 0)) / 2;

    setIndicatorTopPosition(marginValue);
  }, [indicatorySize]);

  return (
    <div ref={pathRef} className={getBlocksWith()} style={{ top: `${indicatorTopPosition}px` }}>
      <div ref={indicatoryRef} className={getBlocksWith('__path')}>
        <div className={getBlocksWith('__box')}>
          <motion.div
            className={getBlocksWith('__box-item-line')}
            style={{ bottom: `${bottomPosition}px` }}
            {...getLineAnimation({
              isInView,
              additionalEffects: {
                hiddenAdditional: { top: 0 },
                enterAdditional: { top: topPosition },
              },
            })}
          />
          {sections.map(section => (
            <ScrollItem section={section} offset={offset} key={section.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
