import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const options1 = [
  { id: 1, text: "Orange", text: "Orange" },
  { id: 2, text: "White", text: "White" },
  { id: 3, text: "Blue", text: "Blue" },
];
const options2 = [
  { id: 1, text: "First", text: "First" },
  { id: 2, text: "Second", text: "Second" },
  { id: 3, text: "Third", text: "Third" },
  { id: 4, text: "Fourth", text: "Fourth" },
  { id: 5, text: "Fifth", text: "Fifth" },
];

const FormElements = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="page-wrapper cardhead">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Form Select2</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dream-pos/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Form Select2</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-6">
            {/* Basic */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Basic</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Use select2() function on select element to convert it to
                      Select 2.
                    </p>
                    <Select2
                          className="select"
                          data={options1}
                          options={{
                            placeholder: "Select",
                          }}
                        />                                      
                  </div>
                </div>
              </div>
            </div>
            {/* /Basic */}
            {/* Nested */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Nested</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Add options inside the optgroups to for group options.
                    </p>
                    <select className="form-control nested">
                      <optgroup label="Group1">
                        <option selected="selected">orange</option>
                        <option>white</option>
                        <option>purple</option>
                      </optgroup>
                      <optgroup label="Group2">
                        <option>purple</option>
                        <option>orange</option>
                        <option>white</option>
                      </optgroup>
                      <optgroup label="Group3">
                        <option>white</option>
                        <option>purple</option>
                        <option>orange</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* /Nested */}
            {/* Placeholder */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Placeholder</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Apply Placeholder by setting option placeholder option.
                    </p>
                    <Select2
                          className="select"
                          data={options2}
                          options={{
                            placeholder: "Select",
                          }}
                        />                                       
                  </div>
                </div>
              </div>
            </div>
            {/* /Placeholder */}
            {/* Tagging with multi-value */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">
                  Tagging with multi-value select boxes
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>Set tags: true to convert select 2 in Tag mode.</p>
                    <select
                      className="form-control tagging"
                      multiple="multiple"
                    >
                      <option>orange</option>
                      <option>white</option>
                      <option>purple</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* /Tagging with multi-value */}
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Small Select2</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Use data('select2') function to get container of select2.
                    </p>
                    <select className="form-control form-small select">
                      <option selected="selected">orange</option>
                      <option>white</option>
                      <option>purple</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Disabling options</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>Disable Select using disabled attribute.</p>
                    <select className="form-control disabled-results">
                      <option value="one">First</option>
                      <option value="two" disabled="disabled">
                        Second
                      </option>
                      <option value="three">Third</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Limiting the number of Tagging</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Set maximumSelectionLength: 2 with tags: true to limit
                      selectin in Tag mode.
                    </p>
                    <select
                      className="form-control tagging"
                      multiple="multiple"
                    >
                      <option>orange</option>
                      <option>white</option>
                      <option>purple</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormElements;
