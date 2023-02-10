import React from 'react';
import './style.css';
import { RegisterForm } from '../../components/Register-Form';
import { RegisterIcons } from '../../components/Register-Icons';
import { RighPage } from '../../components/Right-page-screen';

export const Register = () => {
  return (
    <div className="bodyRegister">
      <div className="left-page-register">
        <span className="header-register">
          <p>&#x2022; Untitled UI</p>
          <span className="signin-header">
            <p>Already have an account ?</p>
            <button className="button-signin">SIGN IN</button>
          </span>
        </span>

        <div className="body-register">
          <div className="form-container">
            <span className="register-account-text">
              <h1>Hello new user!</h1>
              <p>Enter your details to register.</p>
            </span>

            <RegisterForm />

            <span className="create-account-with">
              <p>Create account with</p>
              <RegisterIcons />
            </span>
          </div>
        </div>
      </div>

      <RighPage />
    </div>
  );
};
