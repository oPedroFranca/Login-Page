import React from 'react';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  if (!localStorage.getItem('authenticated')) {
    return <Navigate to="/login" />;
  }

  return children;
};
