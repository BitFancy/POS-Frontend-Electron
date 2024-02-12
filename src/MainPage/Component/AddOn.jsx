import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../utils/api';
import { useOrderContext } from '../../context/OrderContext';
import './index.css';
import { useTranslation } from 'react-i18next';

const Addon = ({
  activeState,
  setActiveState,
  productList,
  handleSelected,
}) => {
  const { changeAction } = useOrderContext();
  const [addons, setAddons] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [addonId, setAddonId] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (addonid) => {
    setIsActive(!isActive);
    setAddonId(addonid);
    setActiveState({ ...activeState, [addonid]: !activeState[addonid] });
  };

  useEffect(() => {
    handleSelected(addonId, activeState[addonId]);
  }, [isActive]);

  useEffect(() => {
    setIsActive(false);
  }, [changeAction]);

  useEffect(() => {
    (async () => {
      const res = await api.get('/product');
      const realAddon = res.data.filter((item) => item.productType.includes(5));
      setAddons(realAddon);
    })();
  }, []);

  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">{t('addon')}</h5>
        <button
          type="button"
          className="close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">x</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="row">
          {addons.map((addon, index) => (
            <div
              key={index}
              className="col-2 p-1 m-0"
              onClick={() => handleSubmit(addon._id)}
            >
              <div
                className="product-lists-main d-flex justify-content-center"
                style={{
                  // width: '140px',
                  height: '70px',
                  boxShadow: `${
                    activeState[addon._id]
                      ? '0px 0px 10px 0px rgba(0, 0, 0, 0.8)'
                      : ''
                  }`,
                }}
              >
                <div className="d-flex align-items-center lh-1">
                  <p
                    style={{
                      color: `${activeState[addon._id] ? 'white' : 'white'}`,
                      fontSize: activeState[addon._id] ? '19px' : '17px',
                      fontWeight: 'bold',
                      maxWidth: '100px',
                    }}
                  >
                    {addon.productName}
                  </p>
                  {/* <p className="card-text">£{price}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-lg-12 d-flex justify-content-center">
          <div to="#" className="btn btn-submit me-2" data-bs-dismiss="modal">
            {t('addon')}
          </div>
          <div to="#" className="btn btn-cancel" data-bs-dismiss="modal">
            {t('close')}
          </div>
        </div>
      </div>
    </>
  );
};
export default Addon;
