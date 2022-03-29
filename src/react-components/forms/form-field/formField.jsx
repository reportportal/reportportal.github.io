import React from 'react';
import { useField } from 'formik';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const FormField = ({
  icon,
  maxLength,
  placeholder,
  type,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className={classnames(
      'form-field',
      { error: meta.touched && meta.error, filled: !!meta.value },
    )}>
      {icon}
      <input
        {...field}
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? <div className="error-message">{meta.error}</div> : null}
    </div>
  );
};
FormField.propTypes = {
  icon: PropTypes.node,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'text', 'number', 'password', 'tel', 'url']),
};
FormField.defaultProps = {
  icon: null,
  maxLength: 40,
  placeholder: '',
  type: 'text',
};

export default FormField;
