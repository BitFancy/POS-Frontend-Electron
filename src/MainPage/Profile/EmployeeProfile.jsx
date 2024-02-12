import React,{useState} from "react";
import { Customer5, EditSet } from "../../EntryFile/imagePath";

const EmployeeProfile = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Profile</h4>
              <h6>User Profile</h6>
            </div>
          </div>
          {/* /product list */}
          <div className="card">
            <div className="card-body">
              <div className="profile-set">
                <div className="profile-head"></div>
                <div className="profile-top">
                  <div className="profile-content">
                    <div className="profile-contentimg">
                      <img src={Customer5} alt="img" id="blah" />
                      <div className="profileupload">
                        <input type="file" id="imgInp" />
                        <a href="#">
                          <img src={EditSet} alt="img" />
                        </a>
                      </div>
                    </div>
                    <div className="profile-contentname">
                      <h2>William Castillo</h2>
                      <h4>Updates Your Photo and Personal Details.</h4>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <button className="btn btn-submit me-2">Save</button>
                    <button className="btn btn-cancel">Cancel</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="William" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Castilo" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" placeholder="william@example.com" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" placeholder="+1452 876 5432" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>User Name</label>
                    <input type="text" placeholder="+1452 876 5432" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>Password</label>
                    <div className="pass-group">
                      <input
                        type={passwordShown ? "text" : "password"}
                        className=" pass-input"
                      />
                      <span
                        className={`fas toggle-password ${
                          passwordShown ? "fa-eye" : "fa-eye-slash"
                        }`}
                        onClick={togglePassword}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-submit me-2">Submit</button>
                  <button className="btn btn-cancel">Cancel</button>
                </div>
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
    </>
  );
};

export default EmployeeProfile;
