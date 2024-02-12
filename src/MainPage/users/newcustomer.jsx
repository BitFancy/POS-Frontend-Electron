import React, { useEffect, useState } from 'react';
import Select2 from 'react-select2-wrapper';
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';
import 'react-select2-wrapper/css/select2.css';
import { Upload } from '../../EntryFile/imagePath';
import alertify from 'alertifyjs';
import { api } from '../../utils/api';
import { set } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const AddCustomer = () => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [postCode, setPostCode] = useState('');
  const [postCodes, setPostCodes] = useState([]);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/postcode/${postCode}`);
      console.log(response.data, 'res data');
      console.log('Postcode found');
      await api.post('/customer/add', {
        customerName,
        email,
        phoneNumber,
        houseNumber,
        streetName,
        postCode,
      });
      alertify.success('Successfully Customer Added');
      setCustomerName('');
      setEmail('');
      setPhoneNumber('');
      setHouseNumber('');
      setStreetName('');
      setPostCode('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log('Postcode not found');
        alertify.warning('PostCode invalid!');
      } else if (error.response && error.response.status === 400) {
        alertify.warning('Customer Already Exists');
      } else {
        console.error('An error occurred:', error);
      }
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>{t('add_customer.title')}</h4>
            <h6>{t('add_customer.description')}</h6>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label>{t('add_customer.customer_name')}</label>
                    <input
                      type="text"
                      // placeholder="Enter Name"
                      onChange={(event) => setCustomerName(event.target.value)}
                      value={customerName}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>{t('email')}</label>
                    <input
                      type="email"
                      // placeholder="Enter Email"
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>{t('phone')}</label>
                    <input
                      type="text"
                      // placeholder="Enter Phone Number"
                      onChange={(event) => setPhoneNumber(event.target.value)}
                      required
                      value={phoneNumber}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="form-group">
                    <div className="form-group">
                      <label>{t('house_number')}</label>
                      <input
                        type="text"
                        // placeholder="Enter City"
                        onChange={(event) => setHouseNumber(event.target.value)}
                        required
                        value={houseNumber}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>{t('street_name')}</label>
                    <input
                      type="text"
                      // placeholder="Enter Address"
                      onChange={(event) => setStreetName(event.target.value)}
                      required
                      value={streetName}
                    />
                  </div>
                  <div className="form-group">
                    <label>{t('postcode')}</label>
                    <input
                      type="text"
                      // placeholder="Enter ZipCode"
                      onChange={(event) => setPostCode(event.target.value)}
                      required
                      value={postCode}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label>{t('add_product.category')}</label>
                    <Select2
                      className="select"
                      data={postCodes}
                      options={{
                        placeholder: t('add_customer.input_postcode'),
                      }}
                      value={postCode}
                      onChange={(e) => setPostCode(e.target.value)}
                      required
                    />
                  </div> */}
                </div>
                <div className="col-lg-12">
                  <button
                    onSubmit={handleSubmit}
                    className="btn btn-submit me-2"
                  >
                    {t('submit')}
                  </button>
                  <button type="button" className="btn btn-cancel">
                    {t('cancel')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
