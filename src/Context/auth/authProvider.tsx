import React, { useEffect, useState } from 'react';
import { UseApi } from '../../hooks/useApi';
import { User } from '../../types/User';
import { AuthContext } from './authContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = UseApi();

  const register = (name: string, email: string, password: string) => {
    api.createUser(name, email, password);
  };

  const signin = async (email: string, password: string) => {
    api.isLogged(email, password);

    return true;
  };

  return (
    <AuthContext.Provider value={{ user, register, signin }}>
      {children}
    </AuthContext.Provider>
  );
};
