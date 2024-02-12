import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../../components/pagination";
import Swal from "sweetalert2";
import {
  EyeIcon,
  EditIcon,
  DeleteIcon,
  Search,
  Pdf,
  Excel,
  Printer,
} from "../../EntryFile/imagePath";

const Transactions = () => {
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

  const [data] = useState([
    {
      id: 1,
      Date: "2022-03-07",
      Reference: "INV/SL0101",
      Customer: "Walk-in Customer",
      Amount: "$ 1500.00",
    },
    {
      id:2,
      Date: "2022-03-07",
      Reference: "INV/SL0101",
      Customer: "Walk-in Customer",
      Amount: "$ 1500.00",
    },
    {
      id:3,
      Date: "2022-03-07",
      Reference: "INV/SL0101",
      Customer: "Walk-in Customer",
      Amount: "$ 1500.00",
    },
    {
      id:4,
      Date: "2022-03-07",
      Reference: "INV/SL0101",
      Customer: "Walk-in Customer",
      Amount: "$ 1500.00",
    },
    {
      id:5,
      Date: "2022-03-07",
      Reference: "INV/SL0101",
      Customer: "Walk-in Customer",
      Amount: "$ 1500.00",
    },
    {
      id:6,
      Date: "2022-03-07",
      Reference: "INV/SL0101",
      Customer: "Walk-in Customer",
      Amount: "$ 1500.00",
    },
    {
      id:7,
      Date: "2022-03-07",
      Reference: "INV/SL0101",
      Customer: "Walk-in Customer",
      Amount: "$ 1500.00",
    },
  ]);

  const columns = [
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Reference",
      dataIndex: "Reference",
      sorter: (a, b) => a.Reference.length - b.Reference.length,
    },
    {
      title: "Customer",
      dataIndex: "Customer",
      sorter: (a, b) => a.Customer.length - b.Customer.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Action",
      className: "text-end",
      render: (text, record) => (
        <div className="text-end">
          <Link className="me-3" to="#">
            <img src={EyeIcon} alt="img" />
          </Link>
          <Link className="me-3" to="#">
            <img src={EditIcon} alt="img" />
          </Link>
          <Link className="me-3" onClick={confirmText} to="#">
            <img src={DeleteIcon} alt="img" />
          </Link>
        </div>
      ),
      sorter: (a, b) => a.Payment.length - b.Payment.length,
    },
  ];
  return (
    <div className="modal fade" id="recents" tabIndex={-1} aria-hidden="true">
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Recent Transactions</h5>
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
            <div className="tabs-sets">
              <ul className="nav nav-tabs" id="myTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="purchase-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#purchase"
                    type="button"
                    aria-controls="purchase"
                    aria-selected="true"
                    role="tab"
                  >
                    Purchase
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="payment-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#payment"
                    type="button"
                    aria-controls="payment"
                    aria-selected="false"
                    role="tab"
                  >
                    Payment
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="return-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#return"
                    type="button"
                    aria-controls="return"
                    aria-selected="false"
                    role="tab"
                  >
                    Return
                  </button>
                </li>
              </ul>
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
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="purchase"
                  role="tabpanel"
                  aria-labelledby="purchase-tab"
                >
                  <div className="table-responsive">
                    <Table
                      className="table datanew table-striped table-nowrap custom-table mb-0 datatable dataTable no-footer"
                      columns={columns}
                      dataSource={data}
                      pagination={{
                        total: data.length,
                        showTotal: (total, range) =>
                          ` ${range[0]} to ${range[1]} of ${total} items`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                      }}
                      style={{ overflowX: "auto" }}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="payment" role="tabpanel">
                  <div className="table-responsive">
                    <Table
                      className="table datanew table-striped table-nowrap custom-table mb-0 datatable dataTable no-footer"
                      columns={columns}
                      dataSource={data}
                      pagination={{
                        total: data.length,
                        showTotal: (total, range) =>
                          ` ${range[0]} to ${range[1]} of ${total} items`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                      }}
                      style={{ overflowX: "auto" }}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
                <div className="tab-pane fade" id="return" role="tabpanel">
                  <div className="table-responsive">
                    <Table
                      className="table datanew table-striped table-nowrap custom-table mb-0 datatable dataTable no-footer"
                      columns={columns}
                      dataSource={data}
                      pagination={{
                        total: data.length,
                        showTotal: (total, range) =>
                          ` ${range[0]} to ${range[1]} of ${total} items`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                      }}
                      style={{ overflowX: "auto" }}
                      rowKey={(record) => record.id}
                    />
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

export default Transactions;
