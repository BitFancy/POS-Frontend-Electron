import { useContext } from 'react';

import { ProductContext } from '../context/ProductContext';

const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useProduct;
