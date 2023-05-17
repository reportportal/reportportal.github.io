import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useScroll } from 'ahooks';
import cx from 'classnames';

import { createBemBlockBuilder } from '../../utils';

import '../InstallationPage/InstallationPage.scss';
import './ScrollIndicator.scss';

const getBlocksWith = createBemBlockBuilder(['indicatory']);

const FIRST_POSITION_OFFSET = 200;
const OFFSET = 20;
const HERO_HIGHT = 500;

export const ScrollIndicator = ({ sections }) => {
  const [offSet, setOffSet] = useState(-FIRST_POSITION_OFFSET);
  const [heroPassed, setHeroPassed] = useState(false);
  const scroll = useScroll(document);

  useEffect(() => {
    scroll?.top < FIRST_POSITION_OFFSET ? setOffSet(-FIRST_POSITION_OFFSET) : setOffSet(-OFFSET);

    scroll?.top < HERO_HIGHT ? setHeroPassed(false) : setHeroPassed(true);
  }, [scroll]);

  return (
    <>
      {sections && (
        <div className={getBlocksWith('__path')}>
          <div className={cx(getBlocksWith(), { [getBlocksWith('__centered')]: heroPassed })}>
            <div className={getBlocksWith('__box')}>
              {sections.map((section) => (
                <div key={section.id} className={getBlocksWith('__box-item')}>
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
