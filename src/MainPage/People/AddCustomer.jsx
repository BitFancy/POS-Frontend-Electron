import React, { useState } from "react";
import { Upload } from "../../EntryFile/imagePath";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const options = [
    { id: 1, text: "India", text: "India" },
    { id: 2, text: "Australia", text: "Australia" },
  ];
  const options1 = [
    { id: 1, text: "City1", text: "City1" },
    { id: 2, text: "City2", text: "City2" },
  ];

const AddCustomer = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Customer Management</h4>
              <h6>Add/Update Customer</h6>
            </div>
          </div>
          {/* /add */}
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Customer Name</label>
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
                    <label>Phone</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Choose Country</label>
                    <Select2
                      className="select"
                      data={options}
                      options={{
                        placeholder: "Choose Country",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>City</label>
                    <Select2
                      className="select"
                      data={options1}
                      options={{
                        placeholder: "Choose City",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-9 col-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" defaultValue={""} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label> Avatar</label>
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

export default AddCustomer;
