import React from 'react';

import './Spider.scss';

export const Spider = () => (
  <div className="spider container">
    <div className="spider-container">
      <div className="spider-container__aside">
        <div className="spider-container__text">Performance testing</div>
        <div className="spider-container__text">Accessibility Testing</div>
        <div className="spider-container__text">Exploratory Testing</div>
      </div>
      <div className="spider-container__image">
        <div className="spider-container__image-title">Supported testing types</div>
      </div>
      <div className="spider-container__aside">
        <div className="spider-container__text">Test Automation</div>
        <div className="spider-container__text">Test Case Authoring & Execution</div>
        <div className="spider-container__text">Localization Testing</div>
      </div>
    </div>
    <div className="line-container">
      <div className="line-container__heading">Supported test types</div>
      <div className="line-container__line-block">
        <div className="line-container__line-block-item">Test Automation</div>
        <div className="line-container__line-block-item">Test Case Authoring & Execution</div>
        <div className="line-container__line-block-item">Localization Testing</div>
        <div className="line-container__line-block-item">Exploratory Testing</div>
        <div className="line-container__line-block-item">Accessibility Testing</div>
        <div className="line-container__line-block-item">Performance Testing</div>
      </div>
    </div>
  </div>
);
