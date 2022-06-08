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

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ModalContext from 'react-components/layouts/modal-layout/modalContext';
import ContactForm from 'react-components/forms/contact-form/contactForm.jsx';
import Button from 'react-components/common/button/button.jsx';
import reactWrapper from 'utils/reactWrapper';
import styles from './askForServiceButton.scss';

const cx = classNames.bind(styles);

const AskForServiceButton = ({ onOpen, className, options }) => {
  const { showModal } = useContext(ModalContext);

  const onclick = () => {
    onOpen();
    showModal(
      <ContactForm
        modalClassName={cx('contact-form')}
        title='Need more help?'
        description={<div className={cx('description')}>
          ReportPortal is free and open source under the Apache 2.0 license, with no charges or hidden fees.<br/>
          <br/>
          But if you’re looking for dedicated professional support for installation, integration, or customization, we offer support plans for businesses of all sizes.<br/>
          <br/>
          Want to learn more? Please leave a business email and we’ll be in touch!
        </div>}
        options={options}
        backTo='Back to landing'
      />
    );
  };

  return (
    <Button
      className={cx('button', className)}
      onClick={onclick}
    >
      Ask for Service
    </Button>
  );
};
AskForServiceButton.propTypes = {
  onOpen: PropTypes.func,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};
AskForServiceButton.defaultProps = {
  onOpen: () => null,
  classNames: '',
  options: [],
}

export default AskForServiceButton;
export const AskForServiceButtonWrappered = reactWrapper(AskForServiceButton);
