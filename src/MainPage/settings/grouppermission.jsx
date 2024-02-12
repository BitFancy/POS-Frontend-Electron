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
import "react-select2-wrapper/css/select2.css";
import Swal from "sweetalert2";

const GroupPermission = () => {
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
      Role: "Admin",
      Description: "Owner",
    },
    {
      Role: "Purchase",
      Description: "Purchase Permission",
    },
    {
      Role: "Sales",
      Description: "Sales Permission",
    },
  ]);

  const columns = [
    {
      title: "Role",
      dataIndex: "Role",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.Role.length - b.Role.length,
    },
    {
      title: "Description",
      dataIndex: "Description",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.Description.length - b.Description.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <>
          <span class="badges bg-lightgreen">Active</span>
        </>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Action",
      className: "text-end",
      render: (text, record) => (
        <div className="text-end">
          <Link className="me-3" to="/dream-pos/settings/editpermission">
            <img src={EditIcon} alt="img" />
          </Link>
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
              <h4>Group Permissions</h4>
              <h6>Manage Group Permissions</h6>
            </div>
            <div className="page-btn">
              <Link
                to="/dream-pos/settings/createpermission"
                className="btn btn-added"
              >
                <img src={PlusIcon} alt="img" className="me-2" />
                Add Group Permission
              </Link>
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
    </>
  );
};

export default GroupPermission;
