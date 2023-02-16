import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/auth/authContext';
import { ButtonSubmit } from '../Submit-Button';

import './style.css';

export const RegisterForm = () => {
  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useContext(AuthContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name && email && password) {
      auth.register(name, email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-register">
      <span className="forms-iputs name">
        <label htmlFor="input-email">Name</label>
        <input
          type="text"
          placeholder="Pedro Henrique"
          className="input-Name"
          value={name}
          onChange={(e) => setNome(e.target.value)}
        />
      </span>
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
      <ButtonSubmit value="Register" />
    </form>
  );
};
