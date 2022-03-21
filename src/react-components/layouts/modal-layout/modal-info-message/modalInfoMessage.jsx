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

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from 'react-components/button/button.jsx';
import Modal from 'react-components/layouts/modal-layout/modal/modal.jsx';
import './modalInfoMessage.scss';

const ModalInfoMessage = ({
  className,
  title,
  description,
  onClosed,
  buttonName,
}) => (
  <Modal>
    <div className={classnames('contact-form', className)}>
      <div className="form-title">{title}</div>
      <div className="form-description">{description}</div>
      <Button onClick={onClosed}>{buttonName}</Button>
    </div>
  </Modal>
);

ModalInfoMessage.propTypes = {
  className: PropTypes.string,
  onClosed: PropTypes.func.isRequired,
  title: PropTypes.node,
  description: PropTypes.node,
  buttonName: PropTypes.node,
};
ModalInfoMessage.defaultProps = {
  className: '',
  title: '',
  description: '',
  buttonName: '',
};

export default ModalInfoMessage;
