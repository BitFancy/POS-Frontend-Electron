import React, { useState, useEffect, createContext } from 'react';
import { api } from '../utils/api';
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
