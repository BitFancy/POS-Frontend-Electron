import React, { useState } from "react";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const options = [
    { id: 1, text: "Choose Category", text: "Choose Category" },
    { id: 2, text: "Category", text: "Category" },
];

const AddSubCategory = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Product Add sub Category</h4>
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
                      placeholder: "Category",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="form-group">
                  <label>Category Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="form-group">
                  <label>Category Code</label>
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
                <button className="btn btn-submit me-2">Submit</button>
                <button className="btn btn-cancel">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        {/* /add */}
      </div>
    </div>
  );
};

export default AddSubCategory;
