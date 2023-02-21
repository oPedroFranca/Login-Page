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
    const user = await api.isLogged(email, password);
    if (user) {
      setUser(user);
      localStorage.setItem('authenticated', 'true');
      return true;
    }

    return false;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('authenticated');
  };

  return (
    <AuthContext.Provider value={{ user, register, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
