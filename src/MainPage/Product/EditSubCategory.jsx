import React, { useState } from "react";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const options = [
  { id: 1, text: "Computers", text: "Computers" },
  { id: 2, text: "Category", text: "Category" },
];

const EditSubCategory = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Product Edit Sub Category</h4>
              <h6>Create new product Category</h6>
            </div>
          </div>
          {/* /add */}
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Parent Category</label>
                    <Select2
                      className="select"
                      data={options}
                      options={{
                        placeholder: "Computers",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Category Name</label>
                    <input type="text" defaultValue="Computers" />
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Category Code</label>
                    <input type="text" defaultValue="CT001" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      defaultValue={"Computers Description"}
                    />
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
    </>
  );
};

export default EditSubCategory;
