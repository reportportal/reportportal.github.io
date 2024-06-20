import React from 'react';

export const formatTextFromContentfulTextFieldWithLineBreaks = (text: string) => {
  return text.replaceAll('\\n', '\n');
};

export const formatTextFromContentfulRichTextFieldWithLineBreaks = (text: string) =>
  text
    .split('\n')
    .reduce(
      (children, textSegment, index) => [...children, index > 0 && <br key={index} />, textSegment],
      [],
    );
