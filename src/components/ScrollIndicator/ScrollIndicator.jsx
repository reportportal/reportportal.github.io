import React from 'react';
import { Link } from 'react-scroll';

import { createBemBlockBuilder } from '../../utils';

import '../InstallationPage/InstallationPage.scss';
import './ScrollIndicator.scss';

const getBlocksWith = createBemBlockBuilder(['indicatory']);

export const ScrollIndicator = ({ sections }) => (
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
                {section.step && <span>{section.step}</span>}
                <span className={getBlocksWith('__box-item-substring')}>{section.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )}
  </>
);
