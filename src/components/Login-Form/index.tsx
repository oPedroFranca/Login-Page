import React from 'react';
import { LoginButton } from '../Login-Button/inde';
import './style.css';

export const LoginForm = () => {
  return (
    <form className="form-login">
      <span className="forms-iputs email">
        <label htmlFor="input-email">Email</label>
        <input
          type="email"
          placeholder="email@gmail.com"
          className="input-email"
        />
      </span>
      <span className="forms-iputs password">
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          placeholder="8+ characters"
          className="input-password"
        />
      </span>

      <LoginButton />
    </form>
  );
};
