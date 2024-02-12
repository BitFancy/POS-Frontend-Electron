import React, { useState } from "react";
import { Upload } from "../../EntryFile/imagePath";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const options = [
  { id: 1, text: "Select", text: "Select" },
  { id: 2, text: "owner", text: "owner" },
];

const AddUser = () => {
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
                    <label>First Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>User Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
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
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Role</label>
                    <Select2
                      className="select"
                      data={options}
                      options={{
                        placeholder: "Choose",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label> User Image</label>
                    <div className="image-upload">
                      <input type="file" />
                      <div className="image-uploads">
                        <img src={Upload} alt="img" />
                        <h4>Drag and drop a file to upload</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button className="btn btn-submit me-2">Submit</button>
                  <button className="btn btn-cancel">Cancel</button>
                </div>
              </div>
            </div>
          </div>
          {/* /add */}
        </div>
      </div>
    </>
  );
};

export default AddUser;
