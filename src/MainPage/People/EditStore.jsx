import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Macbook, Upload } from "../../EntryFile/imagePath";

const EditStore = () => {
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
              <h4>Store Management</h4>
              <h6>Edit/Update Store</h6>
            </div>
          </div>
          {/* /add */}
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Store Name</label>
                    <input type="text" defaultValue="Mac" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>User Name</label>
                    <input type="text" defaultValue="James" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Password</label>
                    <div className="pass-group">
                      <input
                        type={passwordShown ? "text" : "password"}
                        className=" pass-input"
                        value={123456}
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
                    <input type="text" defaultValue={123456879} />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" defaultValue="abc@gmail.com" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label> Store Image</label>
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
                        <div className="productviews">
                          <div className="productviewsimg">
                            <img src={Macbook} alt="img" />
                          </div>
                          <div className="productviewscontent">
                            <div className="productviewsname">
                              <h2>macbookpro.jpg</h2>
                              <h3>581kb</h3>
                            </div>
                            <Link to="#" className="hideset" onClick={deleteImage}>x</Link>
                          </div>
                        </div>
                      </li>
                    </ul>
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

export default EditStore;
