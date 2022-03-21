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

import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createPortal } from 'react-dom';
import Button from 'react-components/button/button.jsx';
import ModalContext from '../modalContext';
import './modal.scss';

const modalRootElement = document.querySelector('#modal');

const Modal = ({
  children,
  className,
}) => {
  const value = useContext(ModalContext);
  const wrapperRef = useRef();

  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      value.setIsModalOpen(false);
    }
  };

  return value.isModalOpen
    ? createPortal(
      <div className="background" onClick={handleClickOutside}>
        <div className={classnames('modal', className, { visible: value.isModalOpen })} ref={wrapperRef} >
          <Button className='close' onClick={() => value.setIsModalOpen(false)}>
            <i className="cross-icon" />
          </Button>
          {children}
        </div>
      </div>,
      modalRootElement,
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
