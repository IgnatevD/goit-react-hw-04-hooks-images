import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, className, onClick, inlineStyles, id, type }) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      type={type}
      onClick={onClick}
      style={inlineStyles}
      id={id}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  className: ' ',
  inlineStyles: {},
  id: ' ',
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  inlineStyles: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.string,
};

export default Button;
