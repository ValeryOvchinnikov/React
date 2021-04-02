import React, { useState } from 'react';
import './SignIn.css';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
  const [isSignIn, setSignIn] = useState(false);

  const submitForm = () => {
    setSignIn(true);
  };

  return (
    <div>
      <form onSubmit={submitForm} className="signin-form">
        <div className="signin-body">
          <h1>Sign In</h1>
          <input
            type="text"
            name="username"
            className="username-input"
            placeholder="UserName"
          />

          <input
            type="password"
            name="password"
            className="password-input"
            placeholder="Password"
          />

          <button type="submit" className="btn">
            Sign In
          </button>
        </div>
      </form>
      {isSignIn && <Redirect to="/" />}
    </div>
  );
};
export default SignIn;
