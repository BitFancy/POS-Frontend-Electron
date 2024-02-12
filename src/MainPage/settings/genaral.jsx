import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import { Upload } from '../../EntryFile/imagePath';
import alertify from 'alertifyjs';
import { api } from '../../utils/api';
import { useTranslation } from 'react-i18next';
import { GeneralContext } from '../../context/GeneralContext';

const GenaralSettings = () => {
  const inputRef = useRef(null);
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantEmail, setRestaurantEmail] = useState('');
  const [restaurantPhone, setRestaurantPhone] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [restaurantPostCode, setRestaurantPostCode] = useState('');
  const [restaurantLogo, setRestaurantLogo] = useState('');
  const [logo, setLogo] = useState(null);
  const { t } = useTranslation();
  const restaurant = useContext(GeneralContext);

  console.log(restaurant, 'restaurant name in general');
  const currentRestaurant = restaurant[0];

  useEffect(() => {
    if (currentRestaurant) {
      const res = currentRestaurant;
      setRestaurantName(res.name);
      setRestaurantEmail(res.email);
      setRestaurantPhone(res.phone);
      setRestaurantAddress(res.address);
      setRestaurantPostCode(res.postcode);
      setRestaurantLogo(res.logo);
    } else {
      setRestaurantName('');
      setRestaurantEmail('');
      setRestaurantPhone('');
      setRestaurantAddress('');
      setRestaurantPostCode('');
      setRestaurantLogo(null);
    }
  }, [currentRestaurant]);

  useEffect(() => {
    console.log(restaurantLogo, 'logo');
  }, [restaurantLogo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('restaurantName', restaurantName);
    formData.append('restaurantEmail', restaurantEmail);
    formData.append('restaurantPhone', restaurantPhone);
    formData.append('restaurantAddress', restaurantAddress);
    formData.append('restaurantPostCode', restaurantPostCode);
    formData.append('restaurantLogo', restaurantLogo);
    console.log(restaurantLogo, 'restaurant logo');
    try {
      const resPostcode = await api.get(`/postcode/${restaurantPostCode}`);
      console.log(resPostcode.data, 'res data');
      console.log('Postcode found');
      console.log(formData, 'form data');
      await api.post('/restaurant/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alertify.success('Restaurant saved successfully.');
    } catch (error) {
      // alertify.error('Some error occurred');
      if (error.response && error.response.status === 404) {
        console.log('Postcode not found');
        alertify.warning('PostCode invalid!');
      } else {
        console.error('An error occurred:', error);
      }
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setRestaurantLogo(URL.createObjectURL(file));
    setLogo(URL.createObjectURL(file));
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>{t('setting.title')}</h4>
            <h6>{t('setting.description')}</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    {t('restaurant_name')}
                    <span className="manitory">*</span>
                  </label>
                  <input
                    type="text"
                    value={restaurantName}
                    onChange={(event) => setRestaurantName(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    {t('email')}
                    <span className="manitory">*</span>
                  </label>
                  <input
                    type="email"
                    value={restaurantEmail}
                    onChange={(event) => setRestaurantEmail(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="form-group">
                  <label>
                    {t('phone')}
                    <span className="manitory">*</span>
                  </label>
                  <input
                    type="text"
                    value={restaurantPhone}
                    onChange={(event) => setRestaurantPhone(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    {t('address')}
                    <span className="manitory">*</span>{' '}
                  </label>
                  <input
                    type="text"
                    value={restaurantAddress}
                    onChange={(event) =>
                      setRestaurantAddress(event.target.value)
                    }
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    {t('postcode')}
                    <span className="manitory">*</span>{' '}
                  </label>
                  <input
                    type="text"
                    value={restaurantPostCode}
                    onChange={(event) =>
                      setRestaurantPostCode(event.target.value)
                    }
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>
                    {t('setting.restaurant_logo')}
                    <span className="manitory">*</span>{' '}
                  </label>
                  <div className="image-upload">
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      name="logo"
                      style={{ display: 'none' }}
                      ref={inputRef}
                      required
                    />
                    <div
                      className="image-uploads"
                      style={{ position: 'relative' }}
                      onClick={() => inputRef.current.click()}
                    >
                      {restaurantLogo ? (
                        <img
                          // src={logo}
                          // src="http://localhost:5000/images/b24d9763-51d2-49ca-88bd-a73780435eee-1706333422001.png"
                          src={restaurantLogo}
                          alt="restaurant logo"
                          style={{
                            objectFit: 'contain',
                            height: '100%',
                          }}
                        />
                      ) : (
                        <div>
                          <img src={Upload} alt="img" />
                          <h4>{t('setting.logo_drag')}</h4>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-submit me-2"
                  >
                    {t('save')}
                  </button>
                  <button type="button" className="btn btn-cancel">
                    {t('cancel')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenaralSettings;
