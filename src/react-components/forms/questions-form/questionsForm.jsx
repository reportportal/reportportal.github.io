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

import React, { useContext, useEffect, useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import classNames from 'classnames/bind';
import Button from 'react-components/common/button/button.jsx';
import FormField from 'react-components/forms/form-field/formField.jsx';
import ModalContext from '../../layouts/modal-layout/modalContext';
import SalesForceFormBase from 'react-components/forms/salesforce-form-base/salesForceFormBase.jsx';
import ModalInfoMessage from 'react-components/layouts/modal-layout/modal-info-message/modalInfoMessage.jsx';
import { validate } from 'react-components/forms/contact-form/util.js';
import styles from './questionsForm.scss';

const cx = classNames.bind(styles);

const QuestionsForm = () => {
  const { showModal, closeModal } = useContext(ModalContext);
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

  const { resetForm, dirty, isValid } = formik;

  useEffect(() => {
    const dummyQuestionFrame = document.createElement('iframe');
    dummyQuestionFrame.name = 'dummyQuestionFrame';
    dummyQuestionFrame.id = 'dummyQuestionFrame';
    dummyQuestionFrame.style.display = 'none';
    document.body.appendChild(dummyQuestionFrame);

    setIframe(dummyQuestionFrame);
    return () => {
      dummyQuestionFrame.parentNode.removeChild(dummyQuestionFrame);
    };
  }, []);

  const onSubmit = (resetFunction) => {
    const reset = () => {
      resetFunction();
      document.getElementById('questions-form').reset();
    };

    showModal(<ModalInfoMessage onClose={closeModal} />);

    iframe.onload = () => {
      reset();
    };
    iframe.onerror = () => {
      reset();
    };
  };

  return (
    <div className={cx('questions-form')}>
      <div className={cx('header')}>Do you have a question?</div>
      <div className={cx('text')}>
        For more details please leave your e-mail and we will contact you within 3 business days.
      </div>
      <div className={cx('form')}>
        <FormikProvider value={formik}>
          <form
            id='questions-form'
            action='https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'
            method='POST'
            target='dummyQuestionFrame'
            className={cx('inner-form')}
          >
            <SalesForceFormBase
              additionalFields={[
                <input
                  key='ReportPortalSource__c'
                  type='hidden'
                  name='ReportPortalSource__c'
                  value='Landing page'
                />,
              ]}
            />
            <FormField className={cx('questions-form-field')} name='first_name' placeholder='First name' />
            <FormField className={cx('questions-form-field')} name='last_name' maxLength={80} placeholder='Last name' />
            <FormField className={cx('questions-form-field')} name='email' type='email' maxLength={80} placeholder='Email' />
            <FormField className={cx('questions-form-field')} name='company' placeholder='Company name' />
            <Button
              className={cx('questions-form-submit-button')}
              type='submit'
              onClick={() => {
                onSubmit(resetForm);
              }}
              disabled={!(isValid && dirty)}
            >Send</Button>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default QuestionsForm;
