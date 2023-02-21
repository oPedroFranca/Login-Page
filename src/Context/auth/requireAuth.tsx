import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './authContext';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
};
