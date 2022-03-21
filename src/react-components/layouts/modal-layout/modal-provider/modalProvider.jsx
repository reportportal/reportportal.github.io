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

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContext from '../modalContext';
import PropTypes from 'prop-types';
import './modalProvider.scss';

const modalRootElement = document.querySelector('#modal');

const ModalProvider = ({ children }) => {
  const [currentModal, setCurrentModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (modal) => {
    setCurrentModal(modal);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modal = isModalOpen ? createPortal(currentModal, modalRootElement) : null;

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      {modal}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node,
};
ModalProvider.defaultProps = {
  children: null,
};

export default ModalProvider;