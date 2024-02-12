import React, { useEffect, useState } from 'react';
import Select2 from 'react-select2-wrapper';
import { useNavigate } from 'react-router-dom';
import 'react-select2-wrapper/css/select2.css';
import { Upload } from '../../EntryFile/imagePath';
import alertify from 'alertifyjs';
import { api } from '../../utils/api';
import { useTranslation } from 'react-i18next';

const AddUser = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  // const [mobile, setMobile] = useState('');
  const [passError, setPassError] = useState('');
  const { t } = useTranslation();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePassword1 = () => {
    setPasswordShown1(!passwordShown1);
  };

  const userRoles = [
    { id: 'Admin', text: 'Admin' },
    { id: 'User', text: 'User' },
  ];

  const data = {
    userName,
    email,
    password,
    role,
  };

  useEffect(() => {
    if (role === 1) {
      setRole('Admin');
    }
    if (role === 2) {
      setRole('User');
    }
  }, [role]);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setPassError('Passwords do not match');
    } else {
      try {
        await api.post('/users/register', data);
        alertify.success('Successfully User Added');
        setPassError('');
        setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setRole('');
      } catch (error) {
        if (error.response.status === 400) {
          alertify.warning('User Already Exists');
        }
      }
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>{t('add_user.title')}</h4>
            <h6>{t('add_user.description')}</h6>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label>{t('add_user.user_name')}</label>
                    <input
                      type="text"
                      // placeholder="Enter User Name"
                      onChange={(event) => setUserName(event.target.value)}
                      required
                      value={userName}
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
                    <label>{t('add_user.title')}</label>
                    <Select2
                      className="select"
                      data={userRoles}
                      onChange={(event) => setRole(event.target.value)}
                      value={role}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label>{t('add_user.password')}</label>
                    <div className="pass-group">
                      <input
                        type={passwordShown ? 'text' : 'password'}
                        className=" pass-input"
                        // placeholder="Enter Password"
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        value={password}
                      />
                      <span
                        className={`fas toggle-password ${
                          passwordShown ? 'fa-eye' : 'fa-eye-slash'
                        }`}
                        onClick={togglePassword}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>{t('add_user.confirm_password')}</label>
                    <div className="pass-group">
                      <input
                        type={passwordShown1 ? 'text' : 'password'}
                        className=" pass-input"
                        // placeholder="Enter Confirm Password"
                        onChange={(event) =>
                          setConfirmPassword(event.target.value)
                        }
                        required
                        value={confirmPassword}
                      />
                      <span
                        className={`fas toggle-password ${
                          passwordShown1 ? 'fa-eye' : 'fa-eye-slash'
                        }`}
                        onClick={togglePassword1}
                      />
                    </div>
                    <h6 className="manitoryred">{passError}</h6>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    onClick={handleSubmit}
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
        </div>
        {/* /add */}
      </div>
    </div>
  );
};

export default AddUser;
