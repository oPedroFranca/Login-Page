import React from 'react';
import './style.css';
import { LeftPage } from '../../components/Left-page-screen';
import { RegisterForm } from '../../components/Register-Form';

export const Register = () => {
  return (
    <div className="bodyLogin">
      <LeftPage />

      <div className="right-page-screen">
        <span className="signin-header">
          <p>Already have an account ?</p>
          <button>SIGN IN</button>
        </span>
        <div className="right-page-body">
          <span className="login-account-text">
            <h1>Hello new user!</h1>
            <p>Register your account</p>
          </span>

          <RegisterForm />

          <button type="submit" className="registerButton">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
