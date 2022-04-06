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

import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormikProvider, useFormik } from 'formik';
import Button from 'react-components/common/button/button.jsx';
import CustomCheckbox from 'react-components/common/custom-checkbox/customCheckbox.jsx';
import FormField from 'react-components/forms/form-field/formField.jsx';
import Modal from 'react-components/layouts/modal-layout/modal/modal.jsx';
import SalesForceFormBase from 'react-components/forms/salesforce-form-base/salesForceFormBase.jsx';
import ModalInfoMessage from 'react-components/layouts/modal-layout/modal-info-message/modalInfoMessage.jsx';
import ModalContext from '../../layouts/modal-layout/modalContext';
import { validate } from './util.js';
import styles from './contactForm.scss';

const cx = classNames.bind(styles);

const ContactForm = ({ className, title, description, options, modalClassName }) => {
  const { showModal, closeModal } = useContext(ModalContext);
  const [termsAgree, setTermsAgree] = useState(false);
  const [iframe, setIframe] = useState(null);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
    },
    validate,
  });

  const { dirty, isValid } = formik;

  useEffect(() => {
    const dummyframe = document.createElement('iframe');
    dummyframe.name = 'dummyframe';
    dummyframe.id = 'dummyframe';
    dummyframe.style.display = 'none';
    document.body.appendChild(dummyframe);

    setIframe(dummyframe);
    return () => {
      dummyframe.parentNode.removeChild(dummyframe);
    };
  }, []);

  const onSubmit = () => {
    const showModalInfoMessage = () => {
      showModal(<ModalInfoMessage onClose={closeModal} />);
    };

    if (termsAgree) {
      iframe.onload = () => {
        showModalInfoMessage();
      };
      iframe.onerror = () => {
        showModalInfoMessage();
      };
    }
  };

  return (
    <Modal className={cx(modalClassName)}>
      <div className={cx('contact-form', className)}>
        <div className={cx('form-title')}>{title}</div>
        <div className={cx('form-description')}>{description}</div>
        <FormikProvider value={formik}>
          <form
            action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
            method="POST"
            target="dummyframe"
          >
            <SalesForceFormBase
              additionalFields={options.map((option) => (
                <input key={option.name} type="hidden" name={option.name} value={option.value} />
              ))}
            />
            <FormField
              icon={<i className={cx('user-icon')} />}
              name="first_name"
              placeholder="First name"
            />
            <FormField
              icon={<i className={cx('user-icon')} />}
              name="last_name"
              maxLength={80}
              placeholder="Last name"
            />
            <FormField
              icon={<i className={cx('email-icon')} />}
              name="email"
              type="email"
              maxLength={80}
              placeholder="Email"
            />
            <FormField
              icon={<i className={cx('company-icon')} />}
              name="company"
              placeholder="Company name"
            />
            <div className={cx('terms-of-use')}>
              <CustomCheckbox
                className={cx('term-checkbox')}
                value={termsAgree}
                onChange={(e) => setTermsAgree(e.target.checked)}
              />
              <div className={cx('term-description')}>
                I have read and agree to the{' '}
                <a target="_blank" href="">
                  General Terms of Service
                </a>{' '}
                and <br /> the{' '}
                <a target="_blank" href="">
                  Privacy Policy
                </a>
              </div>
            </div>
            <Button
              className={cx('button')}
              type='submit'
              onClick={onSubmit}
              disabled={!(isValid && dirty && termsAgree)}
            >
              Contact Us
            </Button>
          </form>
        </FormikProvider>
      </div>
    </Modal>
  );
};

ContactForm.propTypes = {
  modalClassName: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};
ContactForm.defaultProps = {
  modalClassName: '',
  className: '',
  title: '',
  description: '',
  options: [],
};

export default ContactForm;
