import React from "react";

const Editpermission = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Edit Permission</h4>
            <h6>Manage Edit Permissions</h6>
          </div>
        </div>
        {/* /product list */}
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-12">
                <div className="form-group">
                  <label>Role</label>
                  <input type="text" placeholder="Admin" />
                </div>
              </div>
              <div className="col-lg-9 col-sm-12">
                <div className="form-group">
                  <label>Role Description</label>
                  <input type="text" placeholder="Owner" />
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="input-checkset">
                  <ul>
                    <li>
                      <label className="inputcheck">
                        Select All
                        <input type="checkbox" id="select-all" />
                        <span className="checkmark" />
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="productdetails product-respon">
                  <ul>
                    <li>
                      <h4>Users Management</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              View all records of all users
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked/>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>User Permission</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Products</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Barcode
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Import Products
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Adjustment</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Transfer</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked/>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Expenses</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Sales</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked/>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Purchase</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Quotations</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Sales Return</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked/>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Purchase Return</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked/>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Payment Sales</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked/>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Payments purchase</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked />
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Payments Return</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked/>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Customer list</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked/>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Supplier List</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked/>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <h4>Reports</h4>
                      <div className="input-checkset">
                        <ul>
                          <li>
                            <label className="inputcheck">
                              View
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Create
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Edit
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Delete
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </li>
                          <li>
                            <label className="inputcheck">
                              Select All
                              <input type="checkbox" defaultChecked="" checked/>
                              <span className="checkmark" />
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
    </div>
  );
};

export default Editpermission;
