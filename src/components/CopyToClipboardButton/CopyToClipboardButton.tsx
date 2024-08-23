import React, { FC, useState, useEffect } from 'react';
import classNames from 'classnames';
import { createBemBlockBuilder } from '@app/utils';

import CopyToClipboardIcon from './icons/copy-to-clipboard.inline.svg';
import CheckIcon from './icons/check.inline.svg';

const getBlocksWith = createBemBlockBuilder(['copy-to-clipboard-button']);

import './CopyToClipboardButton.scss';

interface CopyToClipboardButtonProps {
  text: string;
}

export const CopyToClipboardButton: FC<CopyToClipboardButtonProps> = ({ text }) => {
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const id = setTimeout(() => {
      setCopied(false);
    }, 5000);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(id);
    };
  }, [isCopied]);

  const onClick = () => {
    navigator.clipboard.writeText(text).then(() => setCopied(true));
  };

  return (
    <button
      className={classNames(getBlocksWith(), { 'copy-to-clipboard-button--copied': isCopied })}
      onClick={onClick}
      title="Copy to clipboard"
    >
      {isCopied ? <CheckIcon /> : <CopyToClipboardIcon />}
    </button>
  );
};
