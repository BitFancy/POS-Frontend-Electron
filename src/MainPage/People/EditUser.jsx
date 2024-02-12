import React, { useState } from "react";
import { Profile2, Upload } from "../../EntryFile/imagePath";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const options = [
  { id: 1, text: "owner", text: "owner" },
];

const EditUser = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const deleteImage =()=>{
    $(document).on("click",".hideset",function () {
		$(this).parent().parent().parent().hide();
	});
  }
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>User Management</h4>
              <h6>Edit/Update User</h6>
            </div>
          </div>
          {/* /add */}
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" defaultValue="Thomas" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" defaultValue="" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>User Name</label>
                    <input type="text" defaultValue="Thomas12" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Password</label>
                    <div className="pass-group">
                      <input
                        type={passwordShown ? "text" : "password"}
                        className=" pass-input"
                        placeholder={123456}
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
                    <input type="text" defaultValue={+123456789} />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" defaultValue="thomas@mail.com" />
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
                <div className="col-12">
                  <div className="product-list">
                    <ul className="row">
                      <li className="ps-0">
                        <div className="productviewset">
                          <div className="productviewsimg">
                            <img src={Profile2} alt="img" />
                          </div>
                          <div className="productviewscontent">
                            <Link to="#" className="hideset" onClick={deleteImage}>
                              <i className="fa fa-trash-alt" />                
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button className="btn btn-submit me-2">Update</button>
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

export default EditUser;
