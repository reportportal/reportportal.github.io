/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useEffect, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createPortal } from 'react-dom';
import Button from 'react-components/button/button.jsx';
import Context from '../../context';
import './modal.scss';

const modalRootElement = document.querySelector('#modal');

const Modal = ({
  children,
  className,
}) => {
  const value = useContext(Context);
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (value.isModalOpen) {
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      };
    }
    return null;
  });

  const onBackgroundClick = (e) => {
    if (e.target.className === 'background') {
      value.setIsModalOpen(false);
    }
  };

  return value.isModalOpen
    ? createPortal(
      <div className="background" onClick={onBackgroundClick}>
        <div className={classnames('modal', className, { visible: value.isModalOpen })}>
          <Button className='close' onClick={() => value.setIsModalOpen(false)}>
            <i className="cross-icon" />
          </Button>
          {children}
        </div>
      </div>,
      element,
    )
    : null;
};

Modal.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};
Modal.defaultProps = {
  className: '',
};

export default Modal;
