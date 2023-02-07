import React from 'react';
import './style.css';

export const Register = () => {
  return (
    <div className="bodyLogin">
      <div className="left-page-screen">
        <span>
          <h1>Welcome to my project !</h1>
          <p>
            This project was created for my personal development as a
            programmer. I hope you like the result.
          </p>

          <img src="../../../public/Programming-amico.svg" />
        </span>
      </div>

      <div className="right-page-screen">
        <div className="right-page-body">
          <span className="signin-header">
            <p>Already have an account ?</p>
            <button>SIGN IN</button>
          </span>

          <span className="login-account-text">
            <h1>Login Account</h1>
            <p>Login to your account</p>
          </span>

          <form className="form-register">
            <span className="forms-iputs">
              <label htmlFor="input-email">Name</label>
              <input
                type="text"
                placeholder="Pedro Henrique"
                className="input-Name"
              />
            </span>
            <span className="forms-iputs">
              <label htmlFor="input-email">Email</label>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="input-email"
              />
            </span>
            <span className="forms-iputs">
              <label htmlFor="input-password">Password</label>
              <input
                type="password"
                placeholder="8+ characters"
                className="input-password"
              />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
