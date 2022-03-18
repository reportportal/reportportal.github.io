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

import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Formik } from 'formik';
import Context from '../../context';
import Button from 'react-components/button/button.jsx';
import Modal from 'react-components/modal/modal.jsx';
import { validate, hiddenInputs } from 'react-components/contact-form/util.js';
import './questionsForm.scss';

const QuestionsForm = () => {
  const [iframe, setIframe] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsSubmitted(true);
      setIsModalOpen(true);
      resetForm();
      document.getElementById('questions-form').reset();
    };

    iframe.onload = () => {
      reset();
    };
    iframe.onerror = () => {
      reset();
    };
  };

  const onClosed = () => {
    setIsSubmitted(false);
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
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            dirty,
            resetForm,
          }) => {
            console.log(values);
            return (<form
              id='questions-form'
              action='https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'
              method='POST'
              target='dummyQuestionFrame'
            >
              {hiddenInputs}
              <input type='hidden' name='Source' value='Landing page'/>
              <div className="field">
                <input
                  className={classnames({ error: touched.first_name && errors.first_name })}
                  key='firstName'
                  id='first_name'
                  name='first_name'
                  type='text'
                  maxLength={40}
                  placeholder='First name'
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.first_name && errors.first_name
                  ? <div className="error-message">Please check your first name again.</div>
                  : null
                }
              </div>
              <div className="field">
                <input
                  className={classnames({ error: touched.last_name && errors.last_name })}
                  key='lastName'
                  id='last_name'
                  name='last_name'
                  type='text'
                  maxLength={80}
                  placeholder='Last name'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.last_name && errors.last_name
                  ? <div className="error-message">Please check your last name again.</div>
                  : null
                }
              </div>
              <div className="field">
                <input
                  className={classnames({ error: touched.email && errors.email })}
                  key='email'
                  id='email'
                  name='email'
                  type='email'
                  maxLength={80}
                  placeholder='Email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email
                  ? <div className="error-message">Please check your email again.</div>
                  : null
                }
              </div>
              <div className="field">
                <input
                  className={classnames({ error: touched.company && errors.company })}
                  key='companyName'
                  id='company'
                  name='company'
                  type='text'
                  maxLength={40}
                  placeholder='Company name'
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.company && errors.company
                  ? <div className="error-message">Please check your company name again.</div>
                  : null
                }
              </div>
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
            </form>);
          }
          }
        </Formik>
        <Context.Provider value={{ isModalOpen, setIsModalOpen }}>
          {isSubmitted && isModalOpen && <Modal>
            <div className="contact-form">
              <div className="form-title">Thank You!</div>
              <div className="form-description">We received your message! Our consultant will contact you within <br/> 4 working days.</div>
              <Button onClick={onClosed}>Closed</Button>
            </div>
          </Modal>}
        </Context.Provider>
      </div>
    </div>
  );
};

export default QuestionsForm;