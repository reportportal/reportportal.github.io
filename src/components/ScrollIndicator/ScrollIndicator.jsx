import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { useScroll, useSize } from 'ahooks';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';

import '../InstallationPage/InstallationPage.scss';
import './ScrollIndicator.scss';

const getBlocksWith = createBemBlockBuilder(['indicatory']);

const FIRST_POSITION_OFFSET = 200;
const OFFSET = 20;
const HERO_HEIGHT = 500;
const DEFAULT_BOTTOM_LINE_POSITION = 400;

export const ScrollIndicator = ({ sections }) => {
  const [offset, setOffset] = useState(-FIRST_POSITION_OFFSET);
  const [headerSectionPassed, setHeaderSectionPassed] = useState(false);
  const scroll = useScroll(document);

  const [topPosition, setTopPosition] = useState(0);
  const [bottomPosition, setBottomPosition] = useState(-DEFAULT_BOTTOM_LINE_POSITION);

  const indicatoryScrollPosition = useScroll(indicatoryRef);
  const pathRef = useRef(null);
  const indicatoryRef = useRef(null);
  const pathSize = useSize(pathRef);
  const indicatorySize = useSize(indicatoryRef);

  useEffect(() => {
    const top = indicatoryScrollPosition?.top + HERO_HEIGHT;
    const bottom = pathSize?.height - indicatorySize?.height - top;

    const adjustedBottom = bottom < HERO_HEIGHT ? DEFAULT_BOTTOM_LINE_POSITION : bottom;

    setTopPosition(-top);
    setBottomPosition(-adjustedBottom);
  }, [indicatoryScrollPosition?.top]);

  useEffect(() => {
    scroll?.top < FIRST_POSITION_OFFSET ? setOffset(-FIRST_POSITION_OFFSET) : setOffset(-OFFSET);

    scroll?.top < HERO_HEIGHT ? setHeaderSectionPassed(false) : setHeaderSectionPassed(true);
  }, [scroll]);

  return (
    <>
      {sections && (
        <div ref={pathRef} className={getBlocksWith('__path')}>
          <div
            ref={indicatoryRef}
            className={cx(getBlocksWith(), { [getBlocksWith('__centered')]: headerSectionPassed })}
          >
            <div className={getBlocksWith('__box')}>
              {sections.map((section) => (
                <div key={section.id} className={getBlocksWith('__box-item')}>
                  <div
                    className={getBlocksWith('__box-item-line')}
                    style={{ top: `${topPosition}px`, bottom: `${bottomPosition}px` }}
                  />
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
      )}
    </>
  );
};
