import React from 'react';
import { LoginForm } from '../../components/Login-Form';
import { RegisterIcons } from '../../components/Register-Icons';
import { RighPage } from '../../components/Right-page-screen';
import './style.css';

export const Login = () => {
  return (
    <div className="bodyLogin">
      <div className="left-page-login">
        <span className="header-login">
          <p>&#x2022; Untitled UI</p>
          <span className="signin-header">
            <p>Already have an account ?</p>
            <button className="button-signin">SIGN IN</button>
          </span>
        </span>

        <div className="body-login">
          <div className="form-container-login">
            <span className="login-account-text">
              <h1>Hi user!</h1>
              <p>Welcome back! Please enter your details.</p>
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
