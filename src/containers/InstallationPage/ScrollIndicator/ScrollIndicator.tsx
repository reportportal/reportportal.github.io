import React, { useEffect, useState, useRef, FC } from 'react';
import { Link } from 'react-scroll';
import { useScroll, useSize } from 'ahooks';
import { createBemBlockBuilder } from '@app/utils';

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
}

export const ScrollIndicator: FC<ScrollIndicatorProps> = ({ sections }) => {
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

  useEffect(() => {
    const top = (indicatoryScrollPosition?.top ?? 0) + HERO_HEIGHT;
    const bottom = (pathSize?.height ?? 0) - (indicatorySize?.height ?? 0) - top;

    const adjustedBottom = bottom < HERO_HEIGHT ? DEFAULT_BOTTOM_LINE_POSITION : bottom;

    setTopPosition(-top);
    setBottomPosition(-adjustedBottom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indicatoryScrollPosition?.top]);

  useEffect(() => {
    setOffset(scroll?.top < FIRST_POSITION_OFFSET ? -FIRST_POSITION_OFFSET : -OFFSET);
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
          <div
            className={getBlocksWith('__box-item-line')}
            style={{ top: `${topPosition}px`, bottom: `${bottomPosition}px` }}
          />
          {sections.map(section => (
            <div key={section.id} className={getBlocksWith('__box-item')}>
              <Link
                className={getBlocksWith('__link')}
                activeClass="active"
                to={section.id}
                spy
                smooth
                offset={offset}
              >
                {section.step && <span>{section.step}</span>}
                <span className={getBlocksWith('__box-item-substring')}>{section.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
