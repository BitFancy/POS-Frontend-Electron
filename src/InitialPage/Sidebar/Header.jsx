import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Logo,
  SmallLogo,
  FlagUS,
  FlagCN,
  Logout,
  LogoWhite,
  Avatar1,
} from '../../EntryFile/imagePath';
import { Link, useHistory } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useTranslation } from 'react-i18next';
import TimeClock from '../../MainPage/DateTime/Clock';
import TimeDate from '../../MainPage/DateTime/Date';
import { UserContext } from '../../context/UserContext';
import LoadingSpinner from './LoadingSpinner';
import useAuth from '../../hooks/useAuth';

const Header = (props) => {
  const history = useHistory();
  const [searchBar, SetSearchBar] = useState(false);
  const [toggle, SetToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState('en');

  const handleLanguageChange = (lag) => {
    i18n.changeLanguage(lag);
    setActiveLanguage(lag);
  };

  // const [isLoading, setIsLoading] = useState(false);

  const { user, isAuthenticated } = useAuth();

  const handlesidebar = () => {
    document.body.classList.toggle('mini-sidebar');
    SetToggle((current) => !current);
  };
  const expandMenu = () => {
    document.body.classList.remove('expand-menu');
  };
  const expandMenuOpen = () => {
    document.body.classList.add('expand-menu');
  };
  // const sidebarOverlay = () => {
  //   console.log('sidebarOverlay', 'query selector');
  //   document.querySelector('.main-wrapper').classList.toggle('slide-nav');
  //   document.querySelector('.sidebar-overlay').classList.toggle('opened');
  //   document.querySelector('html').classList.toggle('menu-opened');
  // };

  let pathname = location.pathname;

  const handleLogoutClicked = () => {
    window.localStorage.removeItem('token');
    history.push('/signIn');
  };

  if (!user) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="header">
        <div className="d-flex justify-content-between">
          <div
            className={`header-left ${toggle ? '' : 'active'}`}
            onMouseLeave={expandMenu}
            onMouseOver={expandMenuOpen}
          >
            <Link
              to="/main/product/productlist-product"
              className="logo logo-normal"
            >
              {/* <img src={Logo} alt="" /> */}
              <strong>{t('app_name')}</strong>
            </Link>
            <Link
              to="/main/product/productlist-product"
              className="logo logo-white"
            >
              <img src={LogoWhite} alt="" />
            </Link>
            <Link to="/main/product/productlist-product" className="logo-small">
              <img src={SmallLogo} alt="" />
            </Link>
            <Link id="toggle_btn" to="#"></Link>

            {/* /Logo */}
            {/* <Link
              id="mobile_btn"
              className="mobile_btn"
              to="#"
              onClick={sidebarOverlay}
            >
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </Link> */}
          </div>
          <div className="nav-item has-arrow nav-item-box user-menu align-self-center">
            <TimeClock />
          </div>
          <ul className="justify-content-between nav user-menu">
            <li className="nav-item-box align-self-center me-3">
              <TimeDate />
            </li>
            <li className="d-flex align-items-center nav-item dropdown has-arrow flag-nav nav-item-boxb">
              <div className="nav-item dropdown has-arrow flag-nav nav-item-boxb d-flex justify-content-end">
                <Link
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                >
                  <FeatherIcon icon="globe" />
                  {/* <span>{i18n.language}</span> */}
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link
                    value={'en'}
                    className={`dropdown-item ${
                      activeLanguage === 'en' ? 'active' : ''
                    }`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    <img src={FlagUS} alt="" height={16} />
                    {t('english')}
                  </Link>
                  <Link
                    value={'cn'}
                    className={`dropdown-item ${
                      activeLanguage === 'cn' ? 'active' : ''
                    }`}
                    onClick={() => handleLanguageChange('cn')}
                  >
                    <img src={FlagCN} alt="" height={16} /> {t('chinese')}
                  </Link>
                </div>
                {/* <div className="select">
                  <select
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                  >
                    <option value={'en'}>
                      <img src={FlagUS} alt="" height={16} /> English
                    </option>
                    <option value={'cn'}>
                      <img src={FlagCN} alt="" height={16} /> Chinese
                    </option>
                  </select>
                </div> */}
              </div>
              <div className="nav-item dropdown has-arrow main-drop">
                <Link
                  className="dropdown-toggle nav-link userset"
                  data-bs-toggle="dropdown"
                >
                  <span className="user-info">
                    <span className="user-letter">
                      {/* <img src={Avatar1} alt="" className="img-fluid" /> */}
                      <FeatherIcon icon="user" />
                    </span>
                    <span className="user-detail">
                      <span className="user-name">{user.userName}</span>
                      <span className="user-role">{user.role}</span>
                    </span>
                  </span>
                </Link>
                <div className="dropdown-menu menu-drop-user">
                  <div className="profilename">
                    {/* <div className="profileset">
                      <span className="user-img">
                        <img src={Avatar1} alt="" />
                        <span className="status online" />
                      </span>
                      <div className="profilesets">
                        <h6>{user.userName}</h6>
                        <h5>{user.role}</h5>
                      </div>
                    </div> */}
                    {/* <hr className="m-0" /> */}
                    <Link
                      className="dropdown-item"
                      to="/main/profile/user-profile"
                    >
                      <FeatherIcon icon="user" />
                      {t('profile')}
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/main/settings/generalsettings"
                    >
                      <FeatherIcon icon="settings" />
                      {t('settings')}
                    </Link>
                    <hr className="m-0" />
                    <button
                      className="dropdown-item logout pb-0"
                      onClick={handleLogoutClicked}
                    >
                      <img src={Logout} className="me-2" alt="img" />
                      {t('logout')}
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* /Header Menu */}
        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <Link
            to="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v" />
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="profile.html">
              My Profile
            </Link>
            <Link className="dropdown-item" to="generalsettings.html">
              Settings
            </Link>
            <Link className="dropdown-item" to="signin.html">
              Logout
            </Link>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
    </>
  );
};

export default Header;
