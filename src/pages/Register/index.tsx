import React from 'react';
import './style.css';
import { LeftPage } from '../../components/Left-page-screen';
import { RegisterForm } from '../../components/Register-Form';

export const Register = () => {
  return (
    <div className="bodyLogin">
      <LeftPage />

      <div className="right-page-register">
        <span className="signin-header">
          <p>Already have an account ?</p>
          <button className="button-signin">SIGN IN</button>
        </span>

        <div className="right-page-body">
          <span className="login-account-text">
            <h1>Hello new user!</h1>
            <p>Register your account</p>
          </span>

          <RegisterForm />

          <span className="login-with">
            <p>Create account with</p>
            <a href="#">
              <link
                rel="icon"
                href="../../../public/google.png"
                type="image/png"
              />
            </a>
            <a href="#">
              <link
                rel="icon"
                href="../../../public/google.png"
                type="image/png"
              />
            </a>
            <a href="#">
              <link
                rel="icon"
                href="../../../public/google.png"
                type="image/png"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
