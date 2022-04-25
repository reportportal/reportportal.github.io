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
import FormInput from 'react-components/forms/form-input/formInput.jsx';
import MarketingAndTermsAgree from 'react-components/forms/common-parts/marketing-and-terms-agree/marketingAndTermAgree.jsx';
import Modal from 'react-components/layouts/modal-layout/modal/modal.jsx';
import SalesForceFormBase from 'react-components/forms/salesforce-form-base/salesForceFormBase.jsx';
import ModalInfoMessage from 'react-components/layouts/modal-layout/modal-info-message/modalInfoMessage.jsx';
import ModalContext from '../../layouts/modal-layout/modalContext';
import { validate } from './util.js';
import styles from './contactForm.scss';

const cx = classNames.bind(styles);

const ContactForm = ({ className, title, description, options, modalClassName, backTo }) => {
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

    iframe.onload = () => {
      showModalInfoMessage();
    };
    iframe.onerror = () => {
      showModalInfoMessage();
    };
  };

  return (
    <Modal className={cx(modalClassName)} backTo={backTo} withoutMobileCloseButton>
      <div className={cx('contact-form', className)}>
        <div className={cx('form-title')}>{title}</div>
        <div className={cx('form-description')}>{description}</div>
        <FormikProvider value={formik}>
          <form
            action={process.env.SALESFORCE_URL}
            method='POST'
            target='dummyframe'
          >
            <SalesForceFormBase
              additionalFields={options.map((option) => (
                <input key={option.name} type='hidden' name={option.name} value={option.value} />
              ))}
            />
            <FormInput
              name='first_name'
              icon={<i className={cx('user-icon')} />}
              placeholder='First name'
            />
            <FormInput
              name='last_name'
              icon={<i className={cx('user-icon')} />}
              maxLength={80}
              placeholder='Last name'
            />
            <FormInput
              name='email'
              icon={<i className={cx('email-icon')} />}
              type='email'
              maxLength={80}
              placeholder='Email'
            />
            <FormInput
              name='company'
              icon={<i className={cx('company-icon')} />}
              placeholder='Company name'
            />
            <MarketingAndTermsAgree termsAgree={termsAgree} onTermsAgreeChange={setTermsAgree} />
            <Button
              className={cx('button')}
              type='submit'
              onClick={onSubmit}
              disabled={!(isValid && dirty && termsAgree)}
            >
              Send
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
  backTo: PropTypes.node,
};
ContactForm.defaultProps = {
  modalClassName: '',
  className: '',
  title: '',
  description: '',
  options: [],
  backTo: null,
};

export default ContactForm;
