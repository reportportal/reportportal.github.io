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
const HERO_HIGHT = 500;
const DEFAULT_BOTTOM_LINE_POSITION = 400;

export const ScrollIndicator = ({ sections }) => {
  const [offSet, setOffSet] = useState(-FIRST_POSITION_OFFSET);
  const [heroPassed, setHeroPassed] = useState(false);
  const scroll = useScroll(document);

  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(-DEFAULT_BOTTOM_LINE_POSITION);

  const indicatoryScrollPosition = useScroll(indicatoryRef);
  const pathRef = useRef(null);
  const indicatoryRef = useRef(null);
  const pathSize = useSize(pathRef);
  const indicatorySize = useSize(indicatoryRef);

  useEffect(() => {
    const topPosition = indicatoryScrollPosition?.top + HERO_HIGHT;
    const bottomPosition = pathSize?.height - indicatorySize?.height - topPosition;

    const adjustedBottom =
      bottomPosition < HERO_HIGHT ? DEFAULT_BOTTOM_LINE_POSITION : bottomPosition;

    setTop(-topPosition);
    setBottom(-adjustedBottom);
  }, [indicatoryScrollPosition?.top]);

  useEffect(() => {
    scroll?.top < FIRST_POSITION_OFFSET ? setOffSet(-FIRST_POSITION_OFFSET) : setOffSet(-OFFSET);

    scroll?.top < HERO_HIGHT ? setHeroPassed(false) : setHeroPassed(true);
  }, [scroll]);

  return (
    <>
      {sections && (
        <div ref={pathRef} className={getBlocksWith('__path')}>
          <div
            ref={indicatoryRef}
            className={cx(getBlocksWith(), { [getBlocksWith('__centered')]: heroPassed })}
          >
            <div className={getBlocksWith('__box')}>
              {sections.map((section) => (
                <div key={section.id} className={getBlocksWith('__box-item')}>
                  <div
                    className={getBlocksWith('__box-item-line')}
                    style={{ top: `${top}px`, bottom: `${bottom}px` }}
                  />
                  <Link
                    className={getBlocksWith('__link')}
                    activeClass="active"
                    to={section.id}
                    spy={true}
                    smooth={true}
                    offset={offSet}
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
