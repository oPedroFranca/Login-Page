import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/auth/authContext';

import './style.css';

export const Home = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  function handleSubmit() {
    navigate('/login');
    auth.logout();
  }

  return (
    <div className="bodyHome">
      <div className="home-content">
        <h1>Home</h1>
        <div className="button-logout-line">
          <button className="logoutButton" onClick={handleSubmit}>
            logout
          </button>
        </div>
      </div>
    </div>
  );
};
