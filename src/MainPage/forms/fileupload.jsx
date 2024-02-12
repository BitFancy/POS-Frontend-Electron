import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/plugins/fileupload/fileupload.min.js";

const FormElements = () => {
  return (
    <div className="page-wrapper cardhead">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">File Upload</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dream-pos/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">File Upload</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Drag Card */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Single File Upload</h5>
              </div>
              <div className="card-body">
                <div
                  className="custom-file-container"
                  data-upload-id="myFirstImage"
                >
                  <label>
                    Upload (Single File){" "}
                    <a
                      href="#"
                      className="custom-file-container__image-clear"
                      title="Clear Image"
                    >
                      x
                    </a>
                  </label>
                  <label className="custom-file-container__custom-file">
                    <input
                      type="file"
                      className="custom-file-container__custom-file__custom-file-input"
                      accept="image/*"
                    />
                    <input
                      type="hidden"
                      name="MAX_FILE_SIZE"
                      defaultValue={10485760}
                    />
                    <span className="custom-file-container__custom-file__custom-file-control">
                      Choose file...
                      <span className="custom-file-container__custom-file__custom-file-control__button">
                        {" "}
                        Browse{" "}
                      </span>
                    </span>
                  </label>
                  <div className="custom-file-container__image-preview file-upload"></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Multiple File Upload</h5>
              </div>
              <div className="card-body">
                <div
                  className="custom-file-container"
                  data-upload-id="mySecondImage"
                >
                  <label>
                    Upload (Allow Multiple){" "}
                    <a
                      href="#"
                      className="custom-file-container__image-clear"
                      title="Clear Image"
                    >
                      x
                    </a>
                  </label>                  
                  <label className="custom-file-container__custom-file">
                    <input
                      type="file"
                      className="custom-file-container__custom-file__custom-file-input"
                      accept="image/*"
                    />
                    <input
                      type="hidden"
                      name="MAX_FILE_SIZE"
                      defaultValue={10485760}
                    />
                    <span className="custom-file-container__custom-file__custom-file-control">
                      Choose file...
                      <span className="custom-file-container__custom-file__custom-file-control__button">
                        {" "}
                        Browse{" "}
                      </span>
                    </span>
                  </label>
                  <div className="custom-file-container__image-preview file-upload"></div>
                </div>
              </div>
            </div>
          </div>
          {/* /Drag Card */}
        </div>
      </div>
    </div>
  );
};
export default FormElements;
