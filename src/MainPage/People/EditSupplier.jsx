import React, { useState } from "react";
import { Upload } from "../../EntryFile/imagePath";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const options = [
  { id: 1, text: "United States", text: "United States" },
  { id: 2, text: "India", text: "India" },
];
const options1 = [
  { id: 1, text: "City1", text: "City1" },
  { id: 2, text: "City2", text: "City2" },
];

const EditSupplier = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Supplier Management</h4>
              <h6>Edit/Update Customer</h6>
            </div>
          </div>
          {/* /add */}
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Supplier Name</label>
                    <input type="text" defaultValue="Apex Computers" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      defaultValue="Apexcomputers@example.com"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" defaultValue={+12163547758} />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Choose Country</label>
                    <Select2
                      className="select"
                      data={options}
                      options={{
                        placeholder: "United States",
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
                        placeholder: "New York",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-9 col-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      defaultValue="132, My Street, Kingston, New York "
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      defaultValue={
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text "
                      }
                    />
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
                  <a className="btn btn-submit me-2">Update</a>
                  <a className="btn btn-cancel">Cancel</a>
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

export default EditSupplier;
