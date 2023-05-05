import React from 'react';
import { createBemBlockBuilder } from '../../utils';

import '../InstallationPage/InstallationPage.scss';
import './ScrollIndicator.scss';

const getBlocksWith = createBemBlockBuilder(['indicatory']);

import { Link } from 'react-scroll';

export const ScrollIndicator = ({ sections }) => {
  const getSubstring = (title, substringNumber) => title.split('\n')[substringNumber];

  return (
    <>
      {sections && (
        <div className={getBlocksWith()}>
          <div className={getBlocksWith('__box')}>
            {sections.map((section) => (
              <div key={section.id} className={getBlocksWith('__box-item')}>
                <Link
                  className={getBlocksWith('__link')}
                  activeClass="active"
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span>{getSubstring(section.title, 0)}</span>
                  <br />
                  <span className={getBlocksWith('__box-item-substring')}>
                    {getSubstring(section.title, 1)}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
