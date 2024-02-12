import React, { useState, useEffect, useContext } from 'react';
import { useOrderContext } from '../../context/OrderContext';
import './index.css';

const MainProduct = ({
  productId,
  name,
  price,
  handleSelected,
  activeState,
  setActiveState,
}) => {
  const { changeAction } = useOrderContext();
  const [isActive, setIsActive] = useState(false);
  const handleSubmit = () => {
    setIsActive(!isActive);
    setActiveState({ ...activeState, [productId]: !activeState[productId] });
  };

  useEffect(() => {
    setIsActive(false);
  }, [changeAction]);

  useEffect(() => {
    handleSelected(productId, activeState[productId]);
  }, [isActive]);
  return (
    <div onClick={handleSubmit} className="col-2 p-1 m-0">
      <div
        className="product-lists-main d-flex justify-content-center"
        style={{
          // width: '140px',
          height: '70px',
          boxShadow: `${
            activeState[productId] ? '0px 0px 10px 0px rgba(0, 0, 0, 0.8)' : ''
          }`,
        }}
      >
        <div className="d-flex align-items-center lh-1">
          <p
            style={{
              color: `${activeState[productId] ? 'white' : 'white'}`,
              fontSize: activeState[productId] ? '19px' : '17px',
              fontWeight: 'bold',
              maxWidth: '100px',
            }}
          >
            {name}
          </p>
          {/* <p className="card-text">£{price}</p> */}
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
