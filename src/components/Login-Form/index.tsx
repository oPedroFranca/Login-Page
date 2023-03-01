import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/auth/authContext';
import { ButtonSubmit } from '../Submit-Button';
import {
  validateEmail,
  validatePassword,
} from '../Validate-Filds/validateFields';
import './style.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      authContext.signin(email, password);
      navigate('/home');
    }
  };

  return (
    <form noValidate onSubmit={handleLoginSubmit} className="form-login">
      <div className="forms-iputs email">
        <label htmlFor="input-email">Email</label>
        <input
          type="email"
          placeholder="email@gmail.com"
          className="input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorForm errorFormEmail"></p>
      </div>
      <div className="forms-iputs password">
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          placeholder="8+ characters"
          className="input-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
        />
        <p className="errorForm errorFormPassword"></p>
      </div>

      <div className="form-button">
        <div className="checkbox-remeber-day">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p>Remember for 30 days</p>
        </div>

        <a href="#">Forgot password</a>
      </div>

      <ButtonSubmit value="Login" />
    </form>
  );
};
