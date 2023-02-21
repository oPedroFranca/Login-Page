import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/auth/authContext';
import { ButtonSubmit } from '../Submit-Button';
import './style.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email && password) {
      auth.signin(email, password);

      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-login">
      <span className="forms-iputs email">
        <label htmlFor="input-email">Email</label>
        <input
          type="email"
          placeholder="email@gmail.com"
          className="input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </span>
      <span className="forms-iputs password">
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          placeholder="8+ characters"
          className="input-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </span>

      <span className="form-button">
        <span className="checkbox-remeber-day">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p>Remember for 30 days</p>
        </span>

        <a href="#">Forgot password</a>
      </span>

      <ButtonSubmit value="Login" />
    </form>
  );
};
