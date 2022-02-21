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

  // todo add validation for all handlers
  const onFirstNameChange = (event) => {
    const currentFirstName = event.target.value;
    setFirstName(currentFirstName);
    setFirstNameError(!currentFirstName);
  };

  const onLastNameChange = (event) => {
    const currentLastName = event.target.value;
    setLastName(currentLastName);
    setLastNameError(!currentLastName);
  };

  const onEmailChange = (event) => {
    const currentEmail = event.target.value;
    setEmail(currentEmail);
    setEmailError(!currentEmail);
  };

  const onCompanyNameChange = (event) => {
    const currentCompanyName = event.target.value;
    setCompanyName(currentCompanyName);
    setCompanyNameError(!currentCompanyName);
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
            onChange={onFirstNameChange}
          />
          {firstNameError && <div className="error-message">Please check your first name again.</div>}
        </div>
        <div className="field">
          <input
            className={classnames({ error: lastNameError })}
            type="text"
            placeholder='Last name'
            value={lastName}
            onChange={onLastNameChange}
          />
          {lastNameError && <div className="error-message">Please check your last name again.</div>}
        </div>
        <div className="field">
          <input
            className={classnames({ error: emailError })}
            type="text"
            placeholder='Email'
            value={email}
            onChange={onEmailChange}
          />
          {emailError && <div className="error-message">Please check your email again.</div>}
        </div>
        <div className="field">
          <input
            className={classnames({ error: companyNameError })}
            type="text"
            placeholder='Company name'
            value={companyName}
            onChange={onCompanyNameChange}
          />
          {companyNameError && <div className="error-message">Please check your company name again.</div>}
        </div>
      </div>
      <Button onClick={onClick} text='Send' />
    </div>
  );
};

export default QuestionsForm;
