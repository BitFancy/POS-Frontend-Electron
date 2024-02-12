import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import Tabletop from "../../EntryFile/tabletop"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  ClosesIcon,
  Noimage,
  Excel,
  Filter,
  Pdf,
  PlusIcon,
  Printer,
  Search,
  search_whites,
  EditIcon,
  DeleteIcon,
} from "../../EntryFile/imagePath";

const SupplierList = () => {
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
      supplierName: "Apex Computers",
      code: "201",
      phone: "+12163547758",
      email: "thomas@example.com",
      country: "USA",
    },
    {
      id: 2,
      supplierName: "AIM Infotech",
      code: "202",
      phone: "123-456-776",
      email: "benjamin@example.com",
      country: "Germany",
    },
    {
      id: 3,
      supplierName: "Best Power Tools",
      code: "203",
      phone: "+123-890-876",
      email: "james@example.com",
      country: "Tailand",
    },
    {
      id: 4,
      supplierName: "Modern Automobile",
      code: "204",
      phone: "+123-876-876",
      email: "bruklin@example.com",
      country: "Angola",
    },
    {
      id: 5,
      supplierName: "Vinayak Tools",
      code: "205",
      phone: "+0987652112",
      email: "beverly@example.com",
      country: "Albania",
    },
  ]);

  const columns = [
    {
      title: "Supplier Name",
      dataIndex: "supplierName",
      render: (text, record) => (
        <div className="productimgname">
          <Link to="#" className="product-img">
            <img src={Noimage} alt="product" />
          </Link>
          <Link to="#">{text}</Link>
        </div>
      ),
      sorter: (a, b) => a.supplierName.length - b.supplierName.length,
      width: "250px",
    },
    {
      title: "Code",
      dataIndex: "code",
      sorter: (a, b) => a.code.length - b.code.length,
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
          <Link className="me-3" to="/dream-pos/people/editsupplier-people">
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
              <h4>Supplier List</h4>
              <h6>Manage your Supplier</h6>
            </div>
            <div className="page-btn">
              <Link
                to="/dream-pos/people/addsupplier-people"
                className="btn btn-added"
              >
                <img src={PlusIcon} alt="img" className="me-1" />
                Add Supplier
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
                        <input type="text" placeholder="Enter Supplier Code" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Supplier" />
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
export default SupplierList;
