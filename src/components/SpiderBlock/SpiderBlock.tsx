import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { LEFT_ASIDE_TEXT, RIGHT_ASIDE_TEXT } from './constants';

import './SpiderBlock.scss';

enum BlockTypes {
  ORIGINAL = 'original',
  OPACITY = 'opacity'
}

interface Props {
  blockType: BlockTypes
}

export const SpiderBlock: React.FC<Props> = ({ blockType = BlockTypes.ORIGINAL }) => (
  <div className="spider container">
    <div className="spider-container">
      <div className="spider-container__aside">
        {LEFT_ASIDE_TEXT.map(text => (
          <div
            key={text}
            className={classNames('spider-container__text', {
              'spider-container__text--original': blockType === 'original',
              'spider-container__text--opacity': blockType === 'opacity',
            })}
          >
            {text}
          </div>
        ))}
      </div>
      <div
        className={classNames('spider-container__image', `spider-container__image--${blockType}`)}
      >
        <div className="spider-container__image-title">Supported testing types</div>
      </div>
      <div className="spider-container__aside">
        {RIGHT_ASIDE_TEXT.map(text => (
          <div
            key={text}
            className={classNames('spider-container__text', {
              'spider-container__text--original': blockType === 'original',
              'spider-container__text--opacity':
                text === RIGHT_ASIDE_TEXT[2] && blockType === 'opacity',
            })}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
    <div className="line-container">
      <div className="line-container__heading">Supported test types</div>
      <div
        className={classNames(
          'line-container__line-block',
          `line-container__line-block--${blockType}`,
        )}
      >
        {[...RIGHT_ASIDE_TEXT, ...LEFT_ASIDE_TEXT].map(text => (
          <div key={text} className="line-container__line-block-item">
            {text}
          </div>
        ))}
      </div>
    </div>
  </div>
);
