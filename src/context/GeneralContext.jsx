import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { api } from '../utils/api';
import { escapeSelector } from 'jquery';

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    (async () => {
      await api.get('/restaurant').then((res) => {
        setRestaurant(res.data);
      });
    })();
  }, []);

  return (
    <GeneralContext.Provider value={restaurant}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
