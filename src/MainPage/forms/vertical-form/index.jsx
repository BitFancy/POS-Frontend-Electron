import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const options1 = [
  { id: 1, text: "A+", text: "A+" },
  { id: 2, text: "O+", text: "O+" },
  { id: 3, text: "B+", text: "B+" },
  { id: 4, text: "AB+", text: "AB+" },
];
const options2 = [
  { id: 1, text: "USA", text: "USA" },
  { id: 1, text: "France", text: "France" },
  { id: 1, text: "India", text: "India" },
  { id: 1, text: "Spain", text: "Spain" },
];
const options3 = [
  { id: 1, text: "California", text: "California" },
  { id: 1, text: "Texas", text: "Texas" },
  { id: 1, text: "Tamilnadu", text: "Tamilnadu" },
  { id: 1, text: "Florida", text: "Florida" },
];
const FormElements = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="page-wrapper cardhead">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">Vertical Form</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dream-pos/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Vertical Form</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title mb-0">Basic Form</h4>
              </div>
              <div className="card-body">
                <form action="#">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Repeat Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title mb-0">Address Form</h4>
              </div>
              <div className="card-body">
                <form action="#">
                  <div className="form-group">
                    <label>Address Line 1</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Address Line 2</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title mb-0">Two Column Vertical Form</h4>
              </div>
              <div className="card-body">
                <form action="#">
                  <h4 className="card-title">Personal Information</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Blood Group</label>
                        <Select2
                          className="select"
                          data={options1}
                          options={{
                            placeholder: "Select",
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label className="d-block">Gender:</label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender_male"
                            defaultValue="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gender_male"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="gender_female"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gender_female"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Repeat Password</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <h4 className="card-title">Postal Address</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Address Line 1</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Address Line 2</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>State</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Country</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Postal Code</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-0">
              <div className="card-header">
                <h4 className="card-title mb-0">Two Column Vertical Form</h4>
              </div>
              <div className="card-body">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="card-title">Personal details</h4>
                      <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>State:</label>
                        <Select2
                          className="select"
                          data={options2}
                          options={{
                            placeholder: "Select State",
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label>Your Message:</label>
                        <textarea
                          rows={5}
                          cols={5}
                          className="form-control"
                          placeholder="Enter message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="card-title">Personal details</h4>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>First Name:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Address line:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Country:</label>
                            <Select2
                              className="select"
                              data={options3}
                              options={{
                                placeholder: "Select Country",
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>State/Province:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>ZIP code:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>City:</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormElements;
