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
import classnames from 'classnames';
import { Formik } from 'formik';
import CustomCheckbox from 'react-components/custom-checkbox/custom-checkbox.jsx';
import Modal from 'react-components/layouts/modal-layout/modal/modal.jsx';
import SalesForceFormBase from 'react-components/salesforce-form-base/salesForceFormBase.jsx';
import ModalInfoMessage from 'react-components/layouts/modal-layout/modal-info-message/modalInfoMessage.jsx';
import ModalContext from '../layouts/modal-layout/modalContext';
import { validate } from './util.js';
import './contactForm.scss';

const ContactForm = ({
  className,
  title,
  description,
  options,
}) => {
  const [termsAgree, setTermsAgree] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [iframe, setIframe] = useState(null);

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

  const value = useContext(ModalContext);

  const onSubmit = () => {
    if (termsAgree) {
      iframe.onload = () => {
        setIsSubmitted(true);
      };
      iframe.onerror = () => {
        setIsSubmitted(true);
      };
    }
  };

  const onClosed = () => {
    setIsSubmitted(false);
    value.setIsModalOpen(false);
  };

  return isSubmitted
    ? <ModalInfoMessage
      onClosed={onClosed}
      title='Thank You!'
      description={<span>
        We received your message! Our consultant will contact you within <br/> 4 working days.
      </span>}
      buttonName='Closed'
    />
    : <Modal>
      <div className={classnames('contact-form', className)}>
        <div className="form-title">{title}</div>
        <div className="form-description">{description}</div>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            company: '',
          }}
          validate={validate}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            dirty,
          }) => (
            <form
              action='https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'
              method='POST'
              target='dummyframe'
            >
              <SalesForceFormBase />
              {options.map(option => <input key={option.name} type='hidden' name={option.name} value={option.value}/>)}

              <div className={classnames('custom-input', { error: touched.first_name && errors.first_name })}>
                <i className="user-icon"/>
                <input
                  key='firstName'
                  id='first_name'
                  name='first_name'
                  type='text'
                  maxLength={40}
                  placeholder='First name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />
                {touched.first_name && errors.first_name ? <div className='error'>{errors.first_name}</div> : null}
              </div>

              <div className={classnames('custom-input', { error: touched.last_name && errors.last_name })}>
                <i className="user-icon"/>
                <input
                  key='lastName'
                  id='last_name'
                  name='last_name'
                  type='text'
                  maxLength={80}
                  placeholder='Last name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />
                {touched.last_name && errors.last_name ? <div className='error'>{errors.last_name}</div> : null}
              </div>

              <div className={classnames('custom-input', { error: touched.email && errors.email })}>
                <i className="email-icon"/>
                <input
                  key='email'
                  id='email'
                  name='email'
                  type='email'
                  maxLength={80}
                  placeholder='Email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email ? <div className='error'>{errors.email}</div> : null}
              </div>

              <div className={classnames('custom-input', { error: touched.company && errors.company })}>
                <i className="company-icon"/>
                <input
                  key='companyName'
                  id='company'
                  name='company'
                  type='text'
                  maxLength={40}
                  placeholder='Company name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.company}
                />
                {touched.company && errors.company ? <div className='error'>{errors.company}</div> : null}
              </div>

              <div className="terms-of-use">
                <CustomCheckbox className="term-checkbox" value={termsAgree} onChange={e => setTermsAgree(e.target.checked)} />
                <div className="term-description">
                  I have read and agree to the <a target="_blank" href="">General Terms of Service</a> and <br/> the <a target="_blank" href="">Privacy Policy</a>
                </div>
              </div>
              <button
                className="button"
                type="submit"
                onClick={onSubmit}
                disabled={!(isValid && dirty && termsAgree)}
              >
                Contact Us
              </button>
            </form>
          )}
        </Formik>
      </div>
    </Modal>;
};

ContactForm.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};
ContactForm.defaultProps = {
  className: '',
  title: '',
  description: '',
  options: [],
};

export default ContactForm;
