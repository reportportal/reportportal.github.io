import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="visualwebsiteoptimizer"
      rel="preconnect"
      href="https://dev.visualwebsiteoptimizer.com"
    />,
    <script key="vwoCode" type="text/javascript" id="vwoCode" src="/abtesting.js" />,
  ]);
};
