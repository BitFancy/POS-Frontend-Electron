import React,{useState} from "react";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const EmailSettings = () => {
  const options = [
    { id: 1, text: "Choose", text: "Choose" },
    { id: 2, text: "Encryption", text: "Encryption" },
  ];  
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Email Setting</h4>
            <h6>Manage Email Setting</h6>
          </div>
        </div>
        {/* /add */}
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Mail Host <span className="manitory">*</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Mail Port<span className="manitory">*</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Mail Address <span className="manitory">*</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Password <span className="manitory">*</span>
                  </label>
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
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Mail From Name<span className="manitory">*</span>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label>
                    Encryption <span className="manitory">*</span>
                  </label>
                  <Select2
                    className="select"
                    data={options}
                    options={{
                      placeholder: "Choose",
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Link to="#" className="btn btn-submit me-2">
                    Submit
                  </Link>
                  <Link to="#" className="btn btn-cancel">
                    Cancel
                  </Link>
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

export default EmailSettings;
