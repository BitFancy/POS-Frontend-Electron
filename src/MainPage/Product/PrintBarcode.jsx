import React, { useState } from "react";
import { Scanner } from "../../EntryFile/imagePath";
import  Table  from "../../EntryFile/datatables";
import { Link } from "react-router-dom";
import { DeleteIcon } from "../../EntryFile/imagePath";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const options = [
  { id: 1, text: "36mm (1.4inch)", text: "36mm (1.4inch)" },
  { id: 2, text: "12mm (1inch)", text: "12mm (1inch)" },
];

const deleteRow = () => {
  $(document).on("click", ".delete-set", function () {
    $(this).parent().parent().parent().hide();
  });
};

const PrintBarcode = () => {
  const [data] = useState([
    { id: 1, name: "Macbook pro", sku: "PT001", qty: "100.00" },
    { id: 2, name: "Apple Earpods", sku: "PT002", qty: "1000.00" },
    { id: 3, name: "Macbook pro", sku: "PT003", qty: "5000.00" },
  ]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "SKU",
      dataIndex: "sku",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      width: "200px",
    },

    {
      render: () => (
        <div className="text-end">
          <Link className="delete-set" to="#" onClick={deleteRow}>
            <img src={DeleteIcon} alt="img" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Print Barcode</h4>
              <h6>Print product barcodes</h6>
            </div>
          </div>
          {/* /add */}
          <div className="card">
            <div className="card-body">
              <div className="requiredfield">
                <h4>
                  The field labels marked with * are required input fields.
                </h4>
              </div>
              <div className="form-group">
                <label>Product Name</label>
                <div className="input-groupicon">
                  <input
                    type="text"
                    placeholder="Please type product code and select..."
                  />
                  <div className="addonset">
                    <img src={Scanner} alt="img" />
                  </div>
                </div>
              </div>
              <div className="table-responsive table-height">
                <Table columns={columns} dataSource={data}/>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Paper Size</label>
                    <Select2
                      className="select"
                      data={options}
                      options={{
                        placeholder: "36mm (1.4inch)",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button className="btn btn-submit me-2">Submit</button>
                  <button className="btn btn-cancel">Cancel</button>
                </div>
              </div>
            </div>
          </div>
          {/* /add */}
        </div>
      </div>
    </>
  );
};

export default PrintBarcode;
