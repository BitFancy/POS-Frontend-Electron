import React, { useEffect, useState } from "react";
import {
  Avatar,
  Avatar1,
  Avatar13,
  Avatar17,
  Avatar2,
  Avatar3,
  Avatar6,
  FlagDE,
  FlagES,
  FlagUS,
  Logo,
  LogoWhite,
  Logout,
  SmallLogo,
} from "../../../../EntryFile/imagePath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const Headerthree = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const toggleFullscreen = (elem) => {
    elem = elem || document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

  const MobileMenuThree = () => {
    var element = document.querySelector(".main-wrapper"); // Assuming 'myElement' does not exist in the document
    element.classList.toggle("slide-nav");
  };

  return (
    <>
      {/* Header */}
      <div className="header header-three">
        {/* Logo */}
        <div className="header-left active">
          <Link to="/dream-pos/dashboard" className="logo logo-normal">
            <img src={Logo} alt="" />
          </Link>
          <Link to="/dream-pos/dashboard" className="logo logo-white">
            <img src={LogoWhite} alt="" />
          </Link>
          <Link to="/dream-pos/dashboard" className="logo-small">
            <img src={SmallLogo} alt="" />
          </Link>
        </div>
        {/* /Logo */}
        <Link id="mobile_btn" className="mobile_btn" to="#sidebar">
          <span className="bar-icon" onClick={MobileMenuThree}>
            <span />
            <span />
            <span />
          </span>
        </Link>
        {/* Header Menu */}
        <ul className="nav user-menu">
          {/* Search */}
          <li className="nav-item nav-searchinputs">
            <div className="top-nav-search">
              <Link to="#" className="responsive-search">
                <i className="fa fa-search" />
              </Link>
              <form action="#">
                <div className="searchinputs">
                  <input type="text" placeholder="Search" />
                  <div className="search-addon">
                    <span>
                      <i data-feather="search" className="feather-14" />
                    </span>
                  </div>
                </div>
                {/* <Link class="btn"  id="searchdiv"><img src="assets/img/icons/search.svg" alt="img"></Link> */}
              </form>
            </div>
          </li>
          {/* /Search */}
          {/* Flag */}
          <li className="nav-item dropdown has-arrow flag-nav nav-item-box">
            <Link
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              to="#"
              role="button"
            >
              <i data-feather="globe">
                <FeatherIcon icon={"globe"} />
              </i>
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
          </li>
          {/* /Flag */}
          <li className="nav-item nav-item-box">
            <Link
              to="#"
              id="btnFullscreen"
              onClick={() => toggleFullscreen()}
              className={isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
            >
              <i data-feather="maximize">
                <FeatherIcon icon="maximize" />
              </i>
            </Link>
          </li>
          <li className="nav-item nav-item-box">
            <Link to="/dream-pos/application/email">
              <i data-feather="mail">
                <FeatherIcon icon="mail" />
              </i>
              <span className="badge rounded-pill">1</span>
            </Link>
          </li>
          {/* Notifications */}
          <li className="nav-item dropdown nav-item-box">
            <Link
              to="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <i data-feather="bell">
                <FeatherIcon icon="bell" />
              </i>
              <span className="badge rounded-pill">2</span>
            </Link>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <Link to="#" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </Link>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <Link to="/dream-pos/activities">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img alt="" src={Avatar2} />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">John Doe</span> added
                            new task{" "}
                            <span className="noti-title">
                              Patient appointment booking
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="/dream-pos/activities">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img alt="" src={Avatar3} />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Tarah Shropshire</span>{" "}
                            changed the task name{" "}
                            <span className="noti-title">
                              Appointment booking with payment gateway
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="/dream-pos/activities">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img alt="" src={Avatar6} />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Misty Tison</span>{" "}
                            added{" "}
                            <span className="noti-title">Domenic Houston</span>{" "}
                            and <span className="noti-title">Claire Mapes</span>{" "}
                            to project{" "}
                            <span className="noti-title">
                              Doctor available module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="/dream-pos/activities">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img alt="" src={Avatar17} />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Rolland Webber</span>{" "}
                            completed task{" "}
                            <span className="noti-title">
                              Patient and Doctor video conferencing
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link to="/dream-pos/activities">
                      <div className="media d-flex">
                        <span className="avatar flex-shrink-0">
                          <img alt="" src={Avatar13} />
                        </span>
                        <div className="media-body flex-grow-1">
                          <p className="noti-details">
                            <span className="noti-title">Bernardo Galaviz</span>{" "}
                            added new task{" "}
                            <span className="noti-title">
                              Private chat module
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              2 days ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link to="/dream-pos/activities">View all Notifications</Link>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          <li className="nav-item nav-item-box">
            <Link to="/dream-pos/settings/generalsettings">
              <i data-feather="settings">
                <FeatherIcon icon={"settings"} />
              </i>
            </Link>
          </li>
          <li className="nav-item dropdown has-arrow main-drop">
            <Link
              to="#"
              className="dropdown-toggle nav-link userset"
              data-bs-toggle="dropdown"
            >
              <span className="user-info">
                <span className="user-letter">
                  <img src={Avatar} alt="" className="img-fluid" />
                </span>
                <span className="user-detail">
                  <span className="user-name">John Smilga</span>
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
                    <h6>John Smilga</h6>
                    <h5>Super Admin</h5>
                  </div>
                </div>
                <hr className="m-0" />
                <Link
                  className="dropdown-item"
                  to="/dream-pos/profile/user-profile"
                >
                  {" "}
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
          </li>
        </ul>
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
            <Link
              className="dropdown-item"
              to="/dream-pos/profile/user-profile"
            >
              My Profile
            </Link>
            <Link
              className="dropdown-item"
              to="/dream-pos/settings/generalsettings"
            >
              Settings
            </Link>
            <Link className="dropdown-item" to="/signIn">
              Logout
            </Link>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
      {/* Header */}
    </>
  );
};
export default Headerthree;
