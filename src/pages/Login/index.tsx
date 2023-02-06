import React from 'react';
import './style.css';

export const Login = () => {
  return (
    <div className="bodyLogin">
      <div className="left-page-screen">
        <span>
          <h1>Welcome to my project</h1>
          <p>
            This project was created for my personal development as a
            programmer. I hope you like the result.
          </p>

          <img src="../../../public/Programming-amico.svg" />
        </span>
      </div>

      <div className="right-page-screen">
        <span className="signin-header">
          <p>Already have an account ?</p>
          <button className="button-sigin">SIGN IN</button>
        </span>
      </div>
    </div>
  );
};
