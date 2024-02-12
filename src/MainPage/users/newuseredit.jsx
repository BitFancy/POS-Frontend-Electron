import React, { useState } from "react";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import { Thomas } from "../../EntryFile/imagePath";

const NewuserEdit = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePassword1 = () => {
    setPasswordShown1(!passwordShown1);
  };
  const options = [
    { id: 1, text: "Sales", text: "Sales" },
    { id: 2, text: "manager", text: "manager" },
  ];
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>User Management</h4>
            <h6>Add/Update User</h6>
          </div>
        </div>
        {/* /add */}
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>User Name</label>
                  <input type="text" placeholder="williams1234" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" placeholder="williams1234@example.com" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="pass-group">
                    <input
                      type={passwordShown ? "text" : "password"}
                      className=" pass-input"
                      value="123456"
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
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Mobile</label>
                  <input type="text" placeholder="+12163547758 " />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <Select2
                    className="select"
                    data={options}
                    options={{
                      placeholder: "Manager",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <div className="pass-group">
                    <input
                      type={passwordShown1 ? "text" : "password"}
                      className=" pass-input"
                      value="123456"
                    />
                    <span
                      className={`fas toggle-password ${
                        passwordShown1 ? "fa-eye" : "fa-eye-slash"
                      }`}
                      onClick={togglePassword1}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label> Profile Picture</label>
                  <div className="image-upload image-upload-new">
                    <div className="image-uploads">
                      <img src={Thomas} alt="img" />
                      <div className="productviews">
                        <div className="productviewscontent">
                          <div className="productviewsname">
                            <h2>macbookpro.jpg</h2>
                            <h3>581kb</h3>
                          </div>
                          <a href="#" className="hideset">
                            x
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <a href="#" className="btn btn-submit me-2">
                  Submit
                </a>
                <a href="#" className="btn btn-cancel">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /add */}
      </div>
    </div>
  );
};

export default NewuserEdit;
