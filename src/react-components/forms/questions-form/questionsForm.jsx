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
import { Formik } from 'formik';
import CustomField from 'react-components/forms/custom-field/customField.jsx';
import ModalContext from '../../layouts/modal-layout/modalContext';
import SalesForceFormBase from 'react-components/forms/salesforce-form-base/salesForceFormBase.jsx';
import ModalInfoMessage from 'react-components/layouts/modal-layout/modal-info-message/modalInfoMessage.jsx';
import { validate } from 'react-components/forms/contact-form/util.js';
import './questionsForm.scss';

const QuestionsForm = () => {
  const { showModal, closeModal } = useContext(ModalContext);
  const [iframe, setIframe] = useState(null);

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

  const onSubmit = (resetForm) => {
    const reset = () => {
      resetForm();
      document.getElementById('questions-form').reset();
    };

    showModal(
      <ModalInfoMessage onClose={closeModal} />,
    );

    iframe.onload = () => {
      reset();
    };
    iframe.onerror = () => {
      reset();
    };
  };

  return (
    <div className="questions-form">
      <div className="header">Do you have a question?</div>
      <div className="text">
        For more details please leave your e-mail and we will contact you within 3 business days.
      </div>
      <div className="form">
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            company: '',
          }}
          validate={validate}
        >
          {({ isValid, dirty, resetForm }) => (<form
            id='questions-form'
            action='https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'
            method='POST'
            target='dummyQuestionFrame'
          >
            <SalesForceFormBase additionalFields={[
              <input key='ReportPortalSource__c' type='hidden' name='ReportPortalSource__c' value='Landing page'/>,
            ]} />
            <CustomField
              name='first_name'
              type='text'
              placeholder='First name'
            />
            <CustomField
              name='last_name'
              type='text'
              maxLength={80}
              placeholder='Last name'
            />
            <CustomField
              name='email'
              type='email'
              maxLength={80}
              placeholder='Email'
            />
            <CustomField
              name='company'
              type='text'
              placeholder='Company name'
            />
            <button
              className="button"
              type='submit'
              onClick={() => {
                onSubmit(resetForm);
              }}
              disabled={!(isValid && dirty)}
            >
              Send
            </button>
          </form>)}
        </Formik>
      </div>
    </div>
  );
};

export default QuestionsForm;
