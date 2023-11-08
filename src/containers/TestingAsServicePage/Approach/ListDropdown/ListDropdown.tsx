import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { UnorderedList, UnorderedList } from '@app/components';
import RightIcon from '@app/svg/testing/Right.svg';

import './ListDropdown.scss';

interface ListDropdownProps {
  title: string;
  list: {
    info?: string;
    description?: string;
  }[];
}

export const ListDropdown: FC<ListDropdownProps> = ({ title, list }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="list-dropdown">
      <div className="list-dropdown__title" onClick={toggleVisible}>
        <img
          className={classNames('list-dropdown__icon', { open: isVisible })}
          src={RightIcon}
          alt="dropdown icon"
        />
        {title}
      </div>
      {isVisible && <UnorderedList list={list} />}
    </div>
  );
};
