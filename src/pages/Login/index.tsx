import React from 'react';
import { LoginForm } from '../../components/Login-Form';
import { RegisterIcons } from '../../components/Register-Icons';
import { RighPage } from '../../components/Right-page-screen';
import './style.css';

export const Login = () => {
  return (
    <div className="bodyLogin">
      <div className="left-page-login">
        <div className="left-page-login-body">
          <span className="login-account-text">
            <h1>Hi user!</h1>
            <p>Welcome back! Please enter your details.</p>
          </span>

          <LoginForm />

          <span className="login-with">
            <p>Login account with</p>
            <RegisterIcons />
          </span>
        </div>
      </div>

      <RighPage />
    </div>
  );
};
