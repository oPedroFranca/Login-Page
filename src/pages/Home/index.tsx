import React from 'react';
import { ButtonSubmit } from '../../components/Submit-Button/inde';
import './style.css';

export const Home = () => {
  return (
    <div className="bodyHome">
      <div className="home-content">
        <h1>Home</h1>
        <ButtonSubmit value="logout" />
      </div>
    </div>
  );
};
