import React, { ReactNode } from 'react';

interface TextWithColorProps {
  text: string;
}

export const TextWithColor = ({ text }: TextWithColorProps): ReactNode => {
  const knownColors = ['green'];
  const regex = /\[(?<color>\w+):(?<text>.*?)\]/g;
  let match: RegExpExecArray | null;
  const elements: ReactNode[] = [];
  let lastIndex = 0;

  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(text))) {
    // Add the text before the match
    if (match.index !== lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    const { color, text: matchedText } = match.groups as { color: string; text: string };

    elements.push(
      knownColors.includes(color) ? (
        <span key={matchedText} className={color}>
          {matchedText}
        </span>
      ) : (
        matchedText
      ),
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex !== text.length) {
    elements.push(text.substring(lastIndex));
  }

  return <div>{elements}</div>;
};
