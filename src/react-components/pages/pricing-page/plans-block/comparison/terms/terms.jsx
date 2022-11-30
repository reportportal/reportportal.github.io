import React  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './terms.scss';

const cx = classNames.bind(styles);

const Terms = ({ className }) => (
  <a className={cx('terms', className)} target="_blank" href='/legal/terms' rel='noreferrer'>
    Terms & Conditions
  </a>
);
Terms.propTypes = {
  className: PropTypes.string,
};
Terms.defaultProps = {
  className: '',
};

export default Terms;
