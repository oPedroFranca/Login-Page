import React from 'react';
import './style.css';
import { LeftPage } from '../../components/Left-page-screen';
import { RegisterForm } from '../../components/Register-Form';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

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
            <a href="#" className="linkedin-icon">
              <FaLinkedinIn />
            </a>
            <a href="#" className="facebook-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="google-icon">
              <FcGoogle />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
