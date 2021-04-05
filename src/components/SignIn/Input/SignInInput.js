import React from 'react';
import './Input.css';
import PropTypes from 'prop-types';

const SignInInput = props => {
  const { elementConfig, value, changed, invalid, touched } = props;

  let validationError = null;

  if (invalid && touched) {
    validationError = (
      <p className="validationError">{elementConfig.type} does not valid</p>
    );
  }
  return (
    <div className="input">
      <input
        className="input-element"
        value={value}
        placeholder={elementConfig.placeholder}
        type={elementConfig.type}
        onChange={changed}
      />
      {validationError}
    </div>
  );
};

SignInInput.propTypes = {
  elementConfig: PropTypes.shape({
    placeholder: PropTypes.string,
    type: PropTypes.string,
  }),
  value: PropTypes.string,
  changed: PropTypes.func,
  invalid: PropTypes.bool,
  touched: PropTypes.bool,
};

export default React.memo(SignInInput);
