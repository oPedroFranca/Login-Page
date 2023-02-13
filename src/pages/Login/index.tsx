import React from 'react';
import { RegisterIcons } from '../../components/icons-form';
import { LoginForm } from '../../components/Login-Form';
import { RighPage } from '../../components/Right-page-screen';
import { SmallScreenLogo } from '../../components/SmallScreenLogo';
import './style.css';

export const Login = () => {
  return (
    <div className="bodyLogin">
      <div className="left-page-login">
        <span className="header-login">
          <p>&#x2022; Untitled UI</p>
          <span className="signup-header">
            <p>Don&apos;t have an account ?</p>
            <a className="button-signup" href="/register">
              Sign up
            </a>
          </span>
        </span>

        <div className="body-login">
          <div className="form-container-login">
            <SmallScreenLogo />
            <span className="login-account-text">
              <h1>Welcome back</h1>
              <p>Please enter your details.</p>
            </span>
            <LoginForm />
            <span className="create-account-with">
              <p>Login account with</p>
              <RegisterIcons />
            </span>
          </div>
        </div>
      </div>

      <RighPage />
    </div>
  );
};
