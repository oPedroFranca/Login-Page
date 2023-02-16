import { useContext } from 'react';
import { AuthContext } from './authContext';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  return children;
};
