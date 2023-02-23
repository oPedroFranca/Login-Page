import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/auth/authContext';
import { ButtonSubmit } from '../Submit-Button';
import {
  validateName,
  validateEmail,
  validatePassword,
} from '../Validade-Filds/validateFields';
import './style.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isNameValid && isEmailValid && isPasswordValid) {
      const isValid = authContext.register(name, email, password);
      if (isValid) {
        navigate('/login');
      }
    }
  };

  return (
    <form noValidate onSubmit={handleFormSubmit} className="form-register">
      <span className="forms-iputs name">
        <label htmlFor="input-name">Name</label>
        <input
          type="text"
          placeholder="Pedro Henrique"
          className="input-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <p className="errorForm errorFormName"></p>
      </span>
      <span className="forms-iputs email">
        <label htmlFor="input-email">Email</label>
        <input
          type="email"
          placeholder="email@gmail.com"
          className="input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <p className="errorForm errorFormEmail"></p>
      </span>
      <span className="forms-iputs password">
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          placeholder="8+ characters"
          className="input-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
        <p className="errorForm errorFormPassword"></p>
      </span>
      <ButtonSubmit value="Register" />
    </form>
  );
};
