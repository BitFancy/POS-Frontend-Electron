import { createContext, useContext, useState } from 'react';
import React from 'react';

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [changeAction, setChangeAction] = useState(false);

  return (
    <OrderContext.Provider
      value={{
        changeAction,
        setChangeAction,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('Ordercontext must be within OrderContextProvider');
  }
  return context;
};
