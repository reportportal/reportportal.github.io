import React from 'react';
import { useField } from 'formik';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const CustomField = ({
  icon,
  maxLength,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className={classnames(
      'custom-field',
      { error: meta.touched && meta.error, filled: !!meta.value },
    )}>
      {icon}
      <input
        {...field}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? <div className="error-message">{meta.error}</div> : null}
    </div>
  );
};
CustomField.propTypes = {
  icon: PropTypes.node,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
};
CustomField.defaultProps = {
  icon: null,
  maxLength: 40,
  placeholder: '',
};

export default CustomField;
