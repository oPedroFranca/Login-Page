import React from 'react';
import './style.css';
import { RegisterForm } from '../../components/Register-Form';
import { RighPage } from '../../components/Right-page-screen';
import { RegisterIcons } from '../../components/icons-form';
import { SmallScreenLogo } from '../../components/SmallScreenLogo';

export const Register = () => {
  return (
    <div className="bodyRegister">
      <div className="left-page-register">
        <span className="header-register">
          <p>&#x2022; Untitled UI</p>
          <span className="signin-header">
            <p>Already have an account ?</p>
            <a className="button-signin" href="/login">
              Sign in
            </a>
          </span>
        </span>

        <div className="body-register">
          <div className="form-container-register">
            <SmallScreenLogo />
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
