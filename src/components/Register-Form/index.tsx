import React from 'react';
import './style.css';

export const RegisterForm = () => {
  return (
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
  );
};
