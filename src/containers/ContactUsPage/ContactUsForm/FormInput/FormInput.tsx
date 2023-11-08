import React from 'react';

import { FormFieldWrapper } from '../FormFieldWrapper';
import { InputField } from './InputField';

export const FormInput = ({ name, ...props }) => (
  <FormFieldWrapper name={name}>
    <InputField {...props} />
  </FormFieldWrapper>
);
