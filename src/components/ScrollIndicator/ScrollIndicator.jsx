import React from 'react';
import { createBemBlockBuilder } from '../../utils';

import '../InstallationPage/InstallationPage.scss';
import './ScrollIndicator.scss';

const getBlocksWithInd = createBemBlockBuilder(['indicatory']);

import { Link } from 'react-scroll';

export const ScrollIndicator = ({ sections }) => {
  return (
    <>
      {sections && (
        <div className={getBlocksWithInd()}>
          <div className={getBlocksWithInd('__box')}>
            {sections.map((section) => (
              <div key={section.id} className={getBlocksWithInd('__box-item')}>
                <Link
                  className={getBlocksWithInd('__link')}
                  activeClass="active"
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {section.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
