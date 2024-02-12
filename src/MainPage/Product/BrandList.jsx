import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import { Link } from "react-router-dom";
import Tabletop from "../../EntryFile/tabletop";
import {
  ClosesIcon,
  Excel,
  Filter,
  Pdf,
  PlusIcon,
  Printer,
  Search,
  MacbookIcon,
  search_whites,
  Samsung,
  EarpodIcon,
  OrangeImage,
  PineappleImage,
  Adidas,
  Colgate,
  EyeIcon,
  EditIcon,
  DeleteIcon,
} from "../../EntryFile/imagePath";
import Swal from "sweetalert2";

const BrandList = () => {
  const [inputfilter, setInputfilter] = useState(false);
  const togglefilter = (value) => {
    setInputfilter(value);
  };
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
      image: Adidas,
      brandName: "Adidas",
      brandDescription: "shoes,sportswear",
    },
    {
      id: 2,
      image: Colgate,
      brandName: "Colgate",
      brandDescription: "Oral hygiene, Toothbrushes",
    },
    {
      id: 3,
      image: Samsung,
      brandName: "Samsung",
      brandDescription: "Electronics",
    },
  ]);
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      className: "text-center",
      render: (text, record) => (
        <Link to="#" className="product-img text-center">
          <img
            alt=""
            src={record.image}
            style={{ height: "40px", width: "40px" }}
          />
        </Link>
      ),
      sorter: (a, b) => a.image.length - b.image.length,
      width: "150px",
    },
    {
      title: "Brand Name",
      dataIndex: "brandName",
      sorter: (a, b) => a.brandName.length - b.brandName.length,
    },
    {
      title: "Brand Description",
      dataIndex: "brandDescription",
      sorter: (a, b) => a.brandDescription.length - b.brandDescription.length,
    },
    {
      title: "Action",
      render: () => (
        <>
          <>
            <Link className="me-3" to="/dream-pos/product/editbrand-product">
              <img src={EditIcon} alt="img" />
            </Link>
            <Link className="confirm-text" to="#" onClick={confirmText}>
              <img src={DeleteIcon} alt="img" />
            </Link>
          </>
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
              <h4>Brand List</h4>
              <h6>Manage your Brand</h6>
            </div>
            <div className="page-btn">
              <Link
                to="/dream-pos/product/addbrand-product"
                className="btn btn-added"
              >
                <img src={PlusIcon} alt="img" className="me-1" />
                Add Brand
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
                    <div className="col-lg-12 col-sm-12">
                      <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-group">
                            <input type="text" placeholder="Enter Brand Name" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Enter Brand Description"
                            />
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
export default BrandList;
