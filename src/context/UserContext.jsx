import React, { createContext, useEffect, useState } from 'react';
import { api } from '../utils/api';
import { setAuthToken } from '../utils/api';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    // const token = localStorage.token;
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const res = await api.get('/users/me', {
            headers: { 'x-auth-token': token },
          });
          setUser(res.data);
        } catch (err) {
          console.error('Error fetching user: ', err.message);
          throw new Error('No token, Unauthorized');
        }
      })();
    } else {
      setUser(null);
    }
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
