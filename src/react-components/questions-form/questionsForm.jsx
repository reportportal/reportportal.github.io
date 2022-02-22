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
import classnames from 'classnames';
import Button from 'react-components/button/button.jsx';
import './questionsForm.scss';

const QuestionsForm = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState(false);

  const onClick = () => {
    console.log('questions form send click');
  };

  const uniHandler = (event, fieldSetter, errorSetter) => {
    const field = event.target.value;
    fieldSetter(field);
    errorSetter(!field);
  };

  return (
    <div className="questions-form">
      <div className="header">Do you have a question?</div>
      <div className="text">
        For more details please leave your e-mail and we will contact you within 3 business days.
      </div>
      <div className="form">
        <div className="field">
          <input
            className={classnames({ error: firstNameError })}
            type="text"
            placeholder='First name'
            value={firstName}
            onChange={(event) => uniHandler(event, setFirstName, setFirstNameError)}
          />
          {firstNameError && <div className="error-message">Please check your first name again.</div>}
        </div>
        <div className="field">
          <input
            className={classnames({ error: lastNameError })}
            type="text"
            placeholder='Last name'
            value={lastName}
            onChange={(event) => uniHandler(event, setLastName, setLastNameError)}
          />
          {lastNameError && <div className="error-message">Please check your last name again.</div>}
        </div>
        <div className="field">
          <input
            className={classnames({ error: emailError })}
            type="text"
            placeholder='Email'
            value={email}
            onChange={(event) => uniHandler(event, setEmail, setEmailError)}
          />
          {emailError && <div className="error-message">Please check your email again.</div>}
        </div>
        <div className="field">
          <input
            className={classnames({ error: companyNameError })}
            type="text"
            placeholder='Company name'
            value={companyName}
            onChange={(event) => uniHandler(event, setCompanyName, setCompanyNameError)}
          />
          {companyNameError && <div className="error-message">Please check your company name again.</div>}
        </div>
      </div>
      <Button onClick={onClick}>
        Send
      </Button>
    </div>
  );
};

export default QuestionsForm;
