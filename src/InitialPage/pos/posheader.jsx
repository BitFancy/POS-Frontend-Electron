// import React, { useState } from "react";
// import {
//   Logo,
//   SmallLogo,
//   Closes,
//   Search,
//   HeaderSearch,
//   Flag,
//   FlagUS,
//   FlagFR,
//   FlagES,
//   FlagDE,
//   Notification,
//   Avatar2,
//   Avatar3,
//   Avatar6,
//   Avatar17,
//   Avatar13,
//   Avatar,
//   Logout,
// } from "../../EntryFile/imagePath";
// import { Link } from "react-router-dom";

// const PosHeader = (props) => {
//   const [searchBar, SetSearchBar] = useState(false);

//   return (
//     <>
//       <div className="header">
//         {/* Logo */}
//         <div className="header-left border-0">
//           <Link to="/dream-pos/dashboard" className="logo">
//             <img src={Logo} alt="" />
//           </Link>
//           <Link to="/dream-pos/dashboard" className="logo-small">
//             <img src={SmallLogo} alt="" />
//           </Link>
//         </div>
//         {/* /Logo */}
//         <Link id="mobile_btn" className="mobile_btn" to="#sidebar">
//           <span className="bar-icon">
//             <span />
//             <span />
//             <span />
//           </span>
//         </Link>
//         {/* Header Menu */}
//         <ul className="nav user-menu">
//           {/* Search */}
//           <li className="nav-item">
//             <div className="top-nav-search">
//               <Link to="#" className="responsive-search">
//                 <i className="fa fa-search" />
//               </Link>
//               <form action="#">
//                 <div className={`searchinputs ${searchBar ? "show" : ""}`}>
//                   <input type="text" placeholder="Search Here ..." />
//                   <div
//                     className="search-addon"
//                     onClick={() => SetSearchBar(false)}
//                   >
//                     <span>
//                       <img src={Closes} alt="img" />
//                     </span>
//                   </div>
//                 </div>
//                 <Link
//                   to="#"
//                   className="btn"
//                   id="searchdiv"
//                   onClick={() => SetSearchBar(true)}
//                 >
//                   <img src={HeaderSearch} alt="img" />
//                 </Link>
//               </form>
//             </div>
//           </li>
//           {/* /Search */}
//           {/* Flag */}
//           <li className="nav-item dropdown has-arrow flag-nav">
//             <Link
//               className="nav-link dropdown-toggle"
//               data-bs-toggle="dropdown"
//               to="#"
//               role="button"
//             >
//               <img src={Flag} alt="" height={20} />
//             </Link>
//             <div className="dropdown-menu dropdown-menu-right">
//               <Link to="#" className="dropdown-item">
//                 <img src={FlagUS} alt="" height={16} /> English
//               </Link>
//               <Link to="#" className="dropdown-item">
//                 <img src={FlagFR} alt="" height={16} /> French
//               </Link>
//               <Link to="#" className="dropdown-item">
//                 <img src={FlagES} alt="" height={16} /> Spanish
//               </Link>
//               <Link to="#" className="dropdown-item">
//                 <img src={FlagDE} alt="" height={16} /> German
//               </Link>
//             </div>
//           </li>
//           {/* /Flag */}
//           {/* Notifications */}
//           <li className="nav-item dropdown">
//             <Link
//               to="#"
//               className="dropdown-toggle nav-link"
//               data-bs-toggle="dropdown"
//             >
//               <img src={Notification} alt="img" />{" "}
//               <span className="badge rounded-pill">4</span>
//             </Link>
//             <div className="dropdown-menu notifications">
//               <div className="topnav-dropdown-header">
//                 <span className="notification-title">Notifications</span>
//                 <Link to="#" className="clear-noti">
//                   {" "}
//                   Clear All{" "}
//                 </Link>
//               </div>
//               <div className="noti-content">
//                 <ul className="notification-list">
//                   <li className="notification-message">
//                     <Link to="/dream-pos/activities">
//                       <div className="media d-flex">
//                         <span className="avatar flex-shrink-0">
//                           <img alt="" src={Avatar2} />
//                         </span>
//                         <div className="media-body flex-grow-1">
//                           <p className="noti-details">
//                             <span className="noti-title">John Doe</span> added
//                             new task{" "}
//                             <span className="noti-title">
//                               Patient appointment booking
//                             </span>
//                           </p>
//                           <p className="noti-time">
//                             <span className="notification-time">
//                               4 mins ago
//                             </span>
//                           </p>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li className="notification-message">
//                     <Link to="/dream-pos/activities">
//                       <div className="media d-flex">
//                         <span className="avatar flex-shrink-0">
//                           <img alt="" src={Avatar3} />
//                         </span>
//                         <div className="media-body flex-grow-1">
//                           <p className="noti-details">
//                             <span className="noti-title">Tarah Shropshire</span>{" "}
//                             changed the task name{" "}
//                             <span className="noti-title">
//                               Appointment booking with payment gateway
//                             </span>
//                           </p>
//                           <p className="noti-time">
//                             <span className="notification-time">
//                               6 mins ago
//                             </span>
//                           </p>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li className="notification-message">
//                     <Link to="/dream-pos/activities">
//                       <div className="media d-flex">
//                         <span className="avatar flex-shrink-0">
//                           <img alt="" src={Avatar6} />
//                         </span>
//                         <div className="media-body flex-grow-1">
//                           <p className="noti-details">
//                             <span className="noti-title">Misty Tison</span>{" "}
//                             added{" "}
//                             <span className="noti-title">Domenic Houston</span>{" "}
//                             and <span className="noti-title">Claire Mapes</span>{" "}
//                             to project{" "}
//                             <span className="noti-title">
//                               Doctor available module
//                             </span>
//                           </p>
//                           <p className="noti-time">
//                             <span className="notification-time">
//                               8 mins ago
//                             </span>
//                           </p>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li className="notification-message">
//                     <Link to="/dream-pos/activities">
//                       <div className="media d-flex">
//                         <span className="avatar flex-shrink-0">
//                           <img alt="" src={Avatar17} />
//                         </span>
//                         <div className="media-body flex-grow-1">
//                           <p className="noti-details">
//                             <span className="noti-title">Rolland Webber</span>{" "}
//                             completed task{" "}
//                             <span className="noti-title">
//                               Patient and Doctor video conferencing
//                             </span>
//                           </p>
//                           <p className="noti-time">
//                             <span className="notification-time">
//                               12 mins ago
//                             </span>
//                           </p>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                   <li className="notification-message">
//                     <Link to="/dream-pos/activities">
//                       <div className="media d-flex">
//                         <span className="avatar flex-shrink-0">
//                           <img alt="" src={Avatar13} />
//                         </span>
//                         <div className="media-body flex-grow-1">
//                           <p className="noti-details">
//                             <span className="noti-title">Bernardo Galaviz</span>{" "}
//                             added new task{" "}
//                             <span className="noti-title">
//                               Private chat module
//                             </span>
//                           </p>
//                           <p className="noti-time">
//                             <span className="notification-time">
//                               2 days ago
//                             </span>
//                           </p>
//                         </div>
//                       </div>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="topnav-dropdown-footer">
//                 <Link to="/dream-pos/activities">View all Notifications</Link>
//               </div>
//             </div>
//           </li>
//           {/* /Notifications */}
//           <li className="nav-item dropdown has-arrow main-drop">
//             <Link
//               to="#"
//               className="dropdown-toggle nav-link userset"
//               data-bs-toggle="dropdown"
//             >
//               <span className="user-img">
//                 <img src={Avatar} alt="" />
//                 <span className="status online" />
//               </span>
//             </Link>
//             <div className="dropdown-menu menu-drop-user">
//               <div className="profilename">
//                 <div className="profileset">
//                   <span className="user-img">
//                     <img src={Avatar} alt="" />
//                     <span className="status online" />
//                   </span>
//                   <div className="profilesets">
//                     <h6>John Doe</h6>
//                     <h5>Admin</h5>
//                   </div>
//                 </div>
//                 <hr className="m-0" />
//                 <Link
//                   className="dropdown-item"
//                   to="/dream-pos/profile/user-profile"
//                 >
//                   <i className="me-2" data-feather="user" /> My Profile
//                 </Link>
//                 <Link
//                   className="dropdown-item"
//                   to="/dream-pos/settings/generalsettings"
//                 >
//                   <i className="me-2" data-feather="settings" />
//                   Settings
//                 </Link>
//                 <hr className="m-0" />
//                 <Link className="dropdown-item logout pb-0" to="/signIn">
//                   <img src={Logout} className="me-2" alt="img" />
//                   Logout
//                 </Link>
//               </div>
//             </div>
//           </li>
//         </ul>
//         {/* /Header Menu */}
//         {/* Mobile Menu */}
//         <div className="dropdown mobile-user-menu">
//           <Link
//             to="#"
//             className="nav-link dropdown-toggle"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <i className="fa fa-ellipsis-v" />
//           </Link>
//           <div className="dropdown-menu dropdown-menu-right">
//             <Link
//               className="dropdown-item"
//               to="/dream-pos/profile/user-profile"
//             >
//               My Profile
//             </Link>
//             <Link
//               className="dropdown-item"
//               to="/dream-pos/settings/generalsettings"
//             >
//               Settings
//             </Link>
//             <Link className="dropdown-item" to="/signIn">
//               Logout
//             </Link>
//           </div>
//         </div>
//         {/* /Mobile Menu */}
//       </div>
//     </>
//   );
// };

// export default PosHeader;

import React, { useEffect, useRef, useState } from 'react';
import {
  Logo,
  SmallLogo,
  Closes,
  HeaderSearch,
  Flag,
  FlagUS,
  FlagES,
  FlagDE,
  Notification,
  Avatar2,
  Avatar3,
  Avatar6,
  Avatar17,
  Avatar13,
  Avatar,
  Logout,
  LogoWhite,
  Avatar1,
} from '../../EntryFile/imagePath';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import TimeClock from '../../MainPage/DateTime/Clock';
import TimeDate from '../../MainPage/DateTime/Date';

const Header = (props) => {
  const [searchBar, SetSearchBar] = useState(false);
  const [toggle, SetToggle] = useState(false);

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
  const sidebarOverlay = () => {
    document.querySelector('.main-wrapper').classList.toggle('slide-nav');
    document.querySelector('.sidebar-overlay').classList.toggle('opened');
    document.querySelector('html').classList.toggle('menu-opened');
  };

  let pathname = location.pathname;

  return (
    <>
      <div className="header">
        {/* Logo */}
        {/* Header Menu */}

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
              <img src={Logo} alt="" />
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
            <Link
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
            </Link>
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
                  to="#"
                  role="button"
                >
                  <FeatherIcon icon="globe" />
                </Link>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link to="#" className="dropdown-item active">
                    <img src={FlagUS} alt="" height={16} /> English
                  </Link>
                  <Link to="#" className="dropdown-item">
                    <img src={FlagES} alt="" height={16} /> Spanish
                  </Link>
                  <Link to="#" className="dropdown-item">
                    <img src={FlagDE} alt="" height={16} /> German
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown has-arrow main-drop">
                <Link
                  to="#"
                  className="dropdown-toggle nav-link userset"
                  data-bs-toggle="dropdown"
                >
                  <span className="user-info">
                    <span className="user-letter">
                      <img src={Avatar1} alt="" className="img-fluid" />
                    </span>
                    <span className="user-detail">
                      <span className="user-name">Edward Chee</span>
                      <span className="user-role">Super Admin</span>
                    </span>
                  </span>
                </Link>
                <div className="dropdown-menu menu-drop-user">
                  <div className="profilename">
                    <div className="profileset">
                      <span className="user-img">
                        <img src={Avatar1} alt="" />
                        <span className="status online" />
                      </span>
                      <div className="profilesets">
                        <h6>Edward Chee</h6>
                        <h5>Super Admin</h5>
                      </div>
                    </div>
                    <hr className="m-0" />
                    <Link
                      className="dropdown-item"
                      to="/dream-pos/profile/user-profile"
                    >
                      <i className="me-2" data-feather="user" /> My Profile
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/dream-pos/settings/generalsettings"
                    >
                      <i className="me-2" data-feather="settings" />
                      Settings
                    </Link>
                    <hr className="m-0" />
                    <Link className="dropdown-item logout pb-0" to="/signIn">
                      <img src={Logout} className="me-2" alt="img" />
                      Logout
                    </Link>
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
