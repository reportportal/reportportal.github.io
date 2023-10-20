import React from 'react';
import { useField } from 'formik';

export const FormFieldWrapper = ({ children, ...props }) => {
  const [field, meta] = useField(props);

  return React.Children.map(children, child =>
    React.cloneElement(child, { ...props, ...field, ...meta }),
  );
};
