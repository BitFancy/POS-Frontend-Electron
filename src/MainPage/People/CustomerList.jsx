import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import Tabletop from "../../EntryFile/tabletop"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  ClosesIcon,
  Excel,
  Filter,
  Pdf,
  PlusIcon,
  Printer,
  Search,
  search_whites,
  EditIcon,
  DeleteIcon,
  Thomas,
  Benjamin,
  James,
  Bruklin,
  Beverly,
} from "../../EntryFile/imagePath";

const CustomerList = () => {
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

  const [data] = useState([
    {
      id: 1,
      image: Thomas,
      customerName: "Thomas",
      code: "201",
      customer: "Thomas",
      phone: "+12163547758",
      email: "thomas@example.com",
      country: "USA",
    },
    {
      id: 2,
      image: Benjamin,
      customerName: "Benjamin",
      code: "202",
      customer: "Benjamin",
      phone: "123-456-776",
      email: "benjamin@example.com",
      country: "Germany",
    },
    {
      id: 3,
      image: James,
      customerName: "James",
      code: "203",
      customer: "James",
      phone: "+123-890-876",
      email: "james@example.com",
      country: "Tailand",
    },
    {
      id: 4,
      image: Bruklin,
      customerName: "Bruklin",
      code: "204",
      customer: "Bruklin",
      phone: "+123-876-876",
      email: "bruklin@example.com",
      country: "Angola",
    },
    {
      id: 5,
      image: Beverly,
      customerName: "Beverly",
      code: "205",
      customer: "Beverly",
      phone: "+0987652112",
      email: "beverly@example.com",
      country: "Albania",
    },
  ]);

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "productName",
      render: (text, record) => (
        <div className="productimgname">
          <Link to="#" style={{ width: "30%" }} className="product-img">
            <img alt="" src={record.image} />
          </Link>
          <Link to="#" style={{ fontSize: "15px", marginLeft: "10px" }}>
            {record.customerName}
          </Link>
        </div>
      ),
      sorter: (a, b) => a.customerName.length - b.customerName.length,
      width: "170px",
    },
    {
      title: "Code",
      dataIndex: "code",
      sorter: (a, b) => a.code.length - b.code.length,
    },
    {
      title: "Customer",
      dataIndex: "customer",
      sorter: (a, b) => a.customer.length - b.customer.length,
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
      title: "Country",
      dataIndex: "country",
      sorter: (a, b) => a.country.length - b.country.length,
    },
    {
      title: "Action",
      render: () => (
        <>
          <Link className="me-3" to="/dream-pos/people/editcustomer-people">
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
              <h4>Customer List</h4>
              <h6>Manage your Customers</h6>
            </div>
            <div className="page-btn">
              <Link
                to="/dream-pos/people/addcustomer-people"
                className="btn btn-added"
              >
                <img src={PlusIcon} alt="img" className="me-1" />
                Add Customer
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
                        <input type="text" placeholder="Enter Customer Code" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Customer Name" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Phone Number" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Email" />
                      </div>
                    </div>
                    <div className="col-lg-1 col-sm-6 col-12  ms-auto">
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
export default CustomerList;
