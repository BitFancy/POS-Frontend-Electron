import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PlusIcon,
  Search,
  Excel,
  Printer,
  Pdf,
  DeleteIcon,
  EditIcon,
} from "../../EntryFile/imagePath";
import Table from "../../EntryFile/datatable";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import Swal from "sweetalert2";

const CurrencySettings = () => {
  const confirmText = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: !0,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      confirmButtonClass: "btn btn-primary",
      cancelButtonClass: "btn btn-danger ml-1",
      buttonsStyling: !1,
    }).then(function (t) {
      t.value &&
        Swal.fire({
          type: "success",
          title: "Deleted!",
          text: "Your file has been deleted.",
          confirmButtonClass: "btn btn-success",
        });
    });
  };
  const options = [
    { id: 1, text: "Active", text: "Active" },
    { id: 2, text: "Inactive", text: "Inactive" },
  ];
  const [data] = useState([
    {
      name: "India - Indian rupee",
      code: "INR",
      symbol: "₹",
      Status: "checkbox",
    },
    {
      name: "US dollar",
      code: "USD",
      symbol: "$",
      Status: "checkbox",
    },
  ]);

  const columns = [
    {
      title: "Currency Name",
      dataIndex: "name",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Currency Code",
      dataIndex: "code",
      render: (text, record) => <div className="text-center">{text}</div>,
      sorter: (a, b) => a.Code.length - b.Code.length,
    },
    {
      title: "Currency Symbol",
      dataIndex: "symbol",
      render: (text, record) => <div className="text-center">{text}</div>,
      sorter: (a, b) => a.Symbol.length - b.Symbol.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <>
          <div className="status-toggle d-flex justify-content-between align-items-center">
            <input
              type="checkbox"
              id="user1"
              className="check"
              defaultChecked={text}
            />
            <label htmlFor="user1" className="checktoggle">
              checkbox
            </label>
          </div>
        </>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Action",
      className: "text-end",
      render: (text, record) => (
        <div className="text-end">
          <a
            className="me-3"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#editpayment"
          >
            <img src={EditIcon} alt="img" />
          </a>
          <Link className="me-3 confirm-text" to="#" onClick={confirmText}>
            <img src={DeleteIcon} alt="img" />
          </Link>
        </div>
      ),
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Currency Settings</h4>
              <h6>Manage Currency Settings</h6>
            </div>
            <div className="page-btn">
              <a
                className="btn btn-added"
                data-bs-toggle="modal"
                data-bs-target="#addpayment"
              >
                <img src={PlusIcon} alt="img" className="me-2" />
                Add New Currency
              </a>
            </div>
          </div>
          {/* /product list */}
          <div className="card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                  <div className="search-input">
                    <input
                      className="form-control form-control-sm search-icon"
                      type="text"
                      placeholder="Search..."
                    />
                    <a className="btn btn-searchset">
                      <img src={Search} alt="img" />
                    </a>
                  </div>
                </div>
                <div className="wordset">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="pdf"
                      >
                        <img src={Pdf} alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="excel"
                      >
                        <img src={Excel} alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="print"
                      >
                        <img src={Printer} alt="img" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="table-responsive">
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
      {/* add Modal */}
      <>
        <div
          className="modal fade"
          id="addpayment"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Currency </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>
                        Currency Name<span className="manitory">*</span>
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Currency Code</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>
                        Currency Symbol<span className="manitory">*</span>
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-0">
                      <label>Status</label>
                      <Select2
                        className="select"
                        data={options}
                        options={{
                          placeholder: "Choose Status",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-submit">
                  Confirm
                </button>
                <button
                  type="button"
                  className="btn btn-cancel"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* edit Modal */}
        <div
          className="modal fade"
          id="editpayment"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Currency</h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>
                        Currency Name<span className="manitory">*</span>
                      </label>
                      <input type="text" placeholder="India - Indian rupee" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Currency Code</label>
                      <input type="text" placeholder="INR" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>
                        Currency Symbol<span className="manitory">*</span>
                      </label>
                      <input type="text" placeholder="₹" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-0">
                      <label>Status</label>
                      <Select2
                        className="select"
                        data={options}
                        options={{
                          placeholder: "Choose Status",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-submit">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-cancel"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default CurrencySettings;
