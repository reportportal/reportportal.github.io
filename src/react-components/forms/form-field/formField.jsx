import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './formField.scss';

const cx = classNames.bind(styles);

const FormField = ({
  className,
  icon,
  maxLength,
  placeholder,
  type,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className={cx(
      'form-field',
      className,
      {
        'with-icon': !!icon,
        error: meta.touched && meta.error,
        filled: !!meta.value,
      },
    )}>
      {icon}
      <input
        {...field}
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? <div className={cx('error-message')}>{meta.error}</div> : null}
    </div>
  );
};
FormField.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'text', 'number', 'password', 'tel', 'url']),
};
FormField.defaultProps = {
  className: '',
  icon: null,
  maxLength: 40,
  placeholder: '',
  type: 'text',
};

export default FormField;
