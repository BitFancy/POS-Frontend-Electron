import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import Tabletop from "../../EntryFile/tabletop"
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import Swal from "sweetalert2";
import {
  ClosesIcon,
  Excel,
  Filter,
  Pdf,
  PlusIcon,
  Printer,
  Search,
  EditIcon,
  DeleteIcon,
  Thomas,
  Benjamin,
  James,
  Bruklin,
  Beverly,
  search_whites,
} from "../../EntryFile/imagePath";

const UserList = () => {
  const [inputfilter, setInputfilter] = useState(false);

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
  const togglefilter = (value) => {
    setInputfilter(value);
  };
  const options = [
    { id: 1, text: "Disable", text: "Disable" },
    { id: 2, text: "Enable", text: "Enable" },
  ];

  const [data] = useState([
    {
      id: 1,
      profile: Thomas,
      firstName: "Thomas",
      lastName: "Thomas",
      userName: "Thomas71",
      phone: "+12163547758",
      email: "thomas@example.com",
      status: true,
    },
    {
      id: 2,
      profile: Benjamin,
      firstName: "Benjamin",
      lastName: "Benjamin",
      userName: "Benjamin23",
      phone: "123-456-776",
      email: "benjamin@example.com",
      status: false,
    },
    {
      id: 3,
      profile: James,
      firstName: "James",
      lastName: "James",
      userName: "James233",
      phone: "+123-890-876",
      email: "james@example.com",
      status: false,
    },
    {
      id: 4,
      profile: Bruklin,
      firstName: "Bruklin",
      lastName: "Bruklin",
      userName: "Bruklin245",
      phone: "+123-876-876",
      email: "bruklin@example.com",
      status: true,
    },
    {
      id: 5,
      profile: Beverly,
      firstName: "Franklin",
      lastName: "Franklin",
      userName: "Franklin898",
      phone: "+0987652112",
      email: "beverly@example.com",
      status: false,
    },
  ]);

  const columns = [
    {
      title: "Profile",
      dataIndex: "profile",
      render: (text, record) => (
        <div className="productimgname">
          <Link to="#" style={{ width: "70%" }} className="product-img">
            <img alt="" src={record.profile} />
          </Link>
        </div>
      ),
      sorter: (a, b) => a.profile.length - b.profile.length,
      width: "80px",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      sorter: (a, b) => a.firstName.length - b.firstName.length,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      sorter: (a, b) => a.lastName.length - b.lastName.length,
    },
    {
      title: "User Name",
      dataIndex: "userName",
      sorter: (a, b) => a.userName.length - b.userName.length,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.length - b.phone.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (e, record) => (
        <div className="status-toggle d-flex justify-content-between align-items-center">
          <input
            type="checkbox"
            id="user2"
            className="check"
            defaultChecked={e}
          />
          <label htmlFor="user2" className="checktoggle">
            checkbox
          </label>
        </div>
      ),
    },
    {
      title: "Action",
      render: () => (
        <>
          <Link className="me-3" to="/dream-pos/people/edituser-people">
            <img src={EditIcon} alt="img" />
          </Link>
          <Link className="confirm-text" to="#" onClick={confirmText}>
            <img src={DeleteIcon} alt="img" />
          </Link>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>User List</h4>
              <h6>Manage your User</h6>
            </div>
            <div className="page-btn">
              <Link to="/dream-pos/people/adduser-people" className="btn btn-added">
                <img src={PlusIcon} alt="img" className="me-1" />
                Add User
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card">
            <div className="card-body">
            <Tabletop inputfilter={inputfilter} togglefilter={togglefilter} />
              {/* /Filter */}
              <div
                className={`card mb-0 ${ inputfilter ? "toggleCls" : ""}`}
                id="filter_inputs"
                style={{ display: inputfilter ? "block" :"none"}}
              >
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter User Name" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Phone" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Email" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <Select2
                          className="select"
                          data={options}
                          options={{
                            placeholder: "Disable",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-1 col-sm-6 col-12 ms-auto">
                      <div className="form-group">
                        <a className="btn btn-filters ms-auto">
                          <img src={search_whites} alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Filter */}
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
export default UserList;
