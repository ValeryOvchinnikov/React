import React, { PureComponent } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignInInput from './Input/SignInInput';
import { authorize } from '../../store/reducers/authReducer';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: {
          elementConfig: {
            type: 'email',
            placeholder: 'Email',
          },
          value: '',
          validation: {
            required: true,
            regexp: /.+@.+\..+/i,
          },
          valid: false,
          touched: false,
        },

        password: {
          elementConfig: {
            type: 'password',
            placeholder: 'password',
          },
          value: '',
          validation: {
            required: true,
            minLength: 8,
            regexp: /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]/g,
          },
          valid: false,
          touched: false,
        },
      },
      formIsValid: false,
    };
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const { form } = this.state;
    const updatedSignInForm = {
      ...form,
    };

    const updatedFormElement = {
      ...updatedSignInForm[inputIdentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidation(
      updatedFormElement.value,
      updatedFormElement.validation,
    );

    updatedFormElement.touched = true;
    updatedSignInForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (const element in updatedSignInForm) {
      if ({}.hasOwnProperty.call(updatedSignInForm, element)) {
        formIsValid = updatedSignInForm[element].valid && formIsValid;
      }
    }
    this.setState({
      form: updatedSignInForm,
      formIsValid,
    });
  };

  auth = () => {
    this.props.authorize({
      username: this.state.form.username.value,
      password: this.state.form.password.value,
    });
  };

  checkValidation = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.regexp) {
      isValid = rules.regexp.test(value) && isValid;
    }
    return isValid;
  };

  render() {
    const { form, formIsValid } = this.state;
    return (
      <div className="signin-body">
        <h1>Sign In</h1>
        <form className="signin-form">
          {Object.entries(form).map(([key, value]) => (
            <SignInInput
              key={key}
              {...value}
              invalid={!value.valid}
              changed={event => this.inputChangedHandler(event, key)}
            />
          ))}

          <Link to="/">
            <button
              type="submit"
              onClick={this.auth}
              className="btn"
              disabled={!formIsValid}
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  authorize,
};

SignIn.propTypes = {
  authorize: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SignIn);
