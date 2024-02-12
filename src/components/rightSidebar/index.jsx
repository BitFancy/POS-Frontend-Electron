import React, { useState } from 'react';
import {
  close_icon,
  layout_01,
  layout_03,
  layout_04,
  layout_ltr,
  layout_rtl,
  sidebar_icon_01,
  sidebar_icon_02,
  sidebar_icon_03,
  sun_icon,
} from '../../EntryFile/imagePath';
import { Link } from 'react-router-dom';

const RightSideBar = () => {
  const [preview, setPreview] = useState(false);
  const [preview1, setPreview1] = useState(false);

  const Darks = () => {
    const Themes = document.querySelector('body');
    console.log(Themes.setAttribute('data-theme', 'dark'));
  };
  const Lights = () => {
    const Themes = document.querySelector('body');
    console.log(Themes.setAttribute('data-theme', ''));
  };

  function refreshPage() {
    window.location.reload();
  }
  return (
    <>
      <div className="customizer-links">
        <ul className="sticky-sidebar">
          <li className="sidebar-icons">
            <Link
              to="#"
              className="add-setting"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              data-bs-original-title="Tooltip on left"
              onClick={() => setPreview(true)}
            >
              <img src={sidebar_icon_01} className="feather-five" alt="" />
            </Link>
          </li>

          <li className="sidebar-icons">
            <Link
              to="#"
              className="navigation-add"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              data-bs-original-title="Tooltip on left"
              onClick={() => setPreview1(true)}
            >
              <img src={sidebar_icon_02} className="feather-five" alt="" />
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`${
          preview === true
            ? 'sidebar-settings preview-toggle show-settings'
            : 'sidebar-settings preview-toggle'
        }`}
      >
        <div className="sidebar-content sticky-sidebar-one">
          <div className="sidebar-header">
            <h5>Preview Settings</h5>
            <Link
              className="sidebar-close"
              to="#"
              onClick={() => setPreview(false)}
            >
              <img src={close_icon} alt="" />
            </Link>
          </div>

          <div className="sidebar-body">
            <h6 className="theme-title">Choose Mode</h6>
            <div className="switch-wrapper">
              <div id="dark-mode-toggle">
                <span className="light-mode active" onClick={Lights}>
                  {' '}
                  <img src={sun_icon} className="me-2" alt="" /> Light
                </span>

                <span className="dark-mode" onClick={Darks}>
                  <i className="far fa-moon me-2" /> Dark
                </span>
              </div>
            </div>

            <div className="row  ">
              <div className="col-xl-6 ere">
                <div className="layout-wrap">
                  <div className="d-flex align-items-center">
                    <div className="status-toggle d-flex align-items-center me-2">
                      <input type="checkbox" id={1} className="check" />
                      <label
                        htmlFor={1}
                        className="checktoggle"
                        onClick={refreshPage}
                      >
                        <Link to="/dream-pos/dashboard" className="layout-link">
                          checkbox
                        </Link>{' '}
                      </label>
                    </div>
                    <span className="status-text">LTR</span>
                  </div>

                  <div className="layout-img">
                    <img className="img-fliud" src={layout_ltr} alt="layout" />
                  </div>
                </div>
              </div>

              {/* <div className="col-xl-6 ere">
                <div className="layout-wrap">
                  <div className="d-flex align-items-center">
                    <div className="status-toggle d-flex align-items-center me-2">
                      <input type="checkbox" id={1} className="check" />
                      <label htmlFor={1} className="checktoggle">
                        <a
                          href="https://dreamspos.dreamguystech.com/reactjs/template-rtl/dream-pos/dashboard"
                          className="layout-link"
                        >
                          checkbox
                        </a>{" "}
                      </label>
                    </div>
                    <span className="status-text">RTL</span>
                  </div>

                  <div className="layout-img">
                    <img className="img-fliud" src={layout_rtl} alt="layout" />
                  </div>
                </div>
              </div> */}
            </div>

            <div className="row  ">
              <div className="col-xl-6 ere">
                <div className="layout-wrap">
                  <div className="d-flex align-items-center">
                    <div className="status-toggle d-flex align-items-center me-2">
                      <input type="checkbox" id={3} className="check" />
                      <label
                        htmlFor={3}
                        className="checktoggle"
                        onClick={refreshPage}
                      >
                        <Link
                          to="/dream-pos/index-three"
                          className="layout-link"
                        >
                          checkbox
                        </Link>{' '}
                      </label>
                    </div>
                    <span className="status-text">Boxed</span>
                  </div>

                  <div className="layout-img">
                    <img className="img-fliud" src={layout_04} alt="layout" />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 ere">
                <div className="layout-wrap">
                  <div className="d-flex align-items-center">
                    <div className="status-toggle d-flex align-items-center me-2">
                      <input type="checkbox" id={3} className="check" />
                      <label
                        htmlFor={3}
                        className="checktoggle"
                        onClick={refreshPage}
                      >
                        <Link
                          to="/dream-pos/index-four"
                          className="layout-link"
                        >
                          checkbox
                        </Link>{' '}
                      </label>
                    </div>
                    <span className="status-text">Collapsed</span>
                  </div>

                  <div className="layout-img">
                    <img className="img-fliud" src={layout_01} alt="layout" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          preview1 === true
            ? 'sidebar-settings nav-toggle show-settings'
            : 'sidebar-settings nav-toggle'
        }`}
      >
        <div className="sidebar-content sticky-sidebar-one">
          <div className="sidebar-header">
            <h5>Navigation Settings</h5>
            <Link
              className="sidebar-close"
              to="#"
              onClick={() => setPreview1(false)}
            >
              <img src={close_icon} alt="" />
            </Link>
          </div>

          <div className="sidebar-body">
            <h6 className="theme-title">Navigation Type</h6>
            <div className="row  ">
              <div className="col-xl-6 ere">
                <div className="layout-wrap">
                  <div className="d-flex align-items-center">
                    <div className="status-toggle d-flex align-items-center me-2">
                      <input type="checkbox" id={1} className="check" />
                      <label
                        htmlFor={1}
                        className="checktoggle"
                        onClick={refreshPage}
                      >
                        <Link to="/dream-pos/dashboard" className="layout-link">
                          checkbox
                        </Link>{' '}
                      </label>
                    </div>
                    <span className="status-text">Vertical</span>
                  </div>

                  <div className="layout-img">
                    <img className="img-fliud" src={layout_03} alt="layout" />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 ere">
                <div className="layout-wrap">
                  <div className="d-flex align-items-center">
                    <div className="status-toggle d-flex align-items-center me-2">
                      <input type="checkbox" id={2} className="check" />
                      <label
                        htmlFor={2}
                        className="checktoggle"
                        onClick={refreshPage}
                      >
                        <Link to="/dream-pos/index-one" className="layout-link">
                          checkbox
                        </Link>{' '}
                      </label>
                    </div>
                    <span className="status-text">Horizontal</span>
                  </div>

                  <div className="layout-img">
                    <img className="img-fliud" src={layout_01} alt="layout" />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 ere">
                <div className="layout-wrap">
                  <div className="d-flex align-items-center">
                    <div className="status-toggle d-flex align-items-center me-2">
                      <input type="checkbox" id={3} className="check" />
                      <label
                        htmlFor={3}
                        className="checktoggle"
                        onClick={refreshPage}
                      >
                        <Link
                          to="/dream-pos/index-four"
                          className="layout-link"
                        >
                          checkbox
                        </Link>{' '}
                      </label>
                    </div>
                    <span className="status-text">Collapsed</span>
                  </div>

                  <div className="layout-img">
                    <img className="img-fliud" src={layout_01} alt="layout" />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 ere">
                <div className="layout-wrap">
                  <div className="d-flex align-items-center">
                    <div className="status-toggle d-flex align-items-center me-2">
                      <input type="checkbox" id={3} className="check" />
                      <label
                        htmlFor={3}
                        className="checktoggle"
                        onClick={refreshPage}
                      >
                        <Link
                          to="/dream-pos/index-three"
                          className="layout-link"
                        >
                          checkbox
                        </Link>{' '}
                      </label>
                    </div>
                    <span className="status-text">Modern</span>
                  </div>

                  <div className="layout-img">
                    <img className="img-fliud" src={layout_04} alt="layout" />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 ere">
                <div className="layout-wrap">
                  <div className="d-flex align-items-center">
                    <div className="status-toggle d-flex align-items-center me-2">
                      <input type="checkbox" id={3} className="check" />
                      <label
                        htmlFor={3}
                        className="checktoggle"
                        onClick={refreshPage}
                      >
                        <Link to="/dream-pos/index-two" className="layout-link">
                          checkbox
                        </Link>{' '}
                      </label>
                    </div>
                    <span className="status-text">Boxed</span>
                  </div>

                  <div className="layout-img">
                    <img className="img-fliud" src={layout_03} alt="layout" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RightSideBar;
