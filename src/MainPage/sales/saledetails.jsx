import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Pdf,
  Excel,
  Product7,
  Printer,
  EditIcon,
  Calendar,
  Product8,
  Product1,
} from "../../EntryFile/imagePath";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const SalesDetail = () => {
  
  const options = [
    { id: 1, text: "Completed", text: "Completed" },
    { id: 2, text: "Inprogess", text: "Inprogess" },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Sale Details</h4>
            <h6>View sale details</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-sales-split">
              <h2>Sale Detail : SL0101</h2>
              <ul>
                <li>
                  <Link to="#">
                    <img src={EditIcon} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src={Pdf} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src={Excel} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src={Printer} alt="img" />
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="invoice-box table-height"
              style={{
                maxWidth: 1600,
                width: "100%",
                overflow: "auto",
                margin: "15px auto",
                padding: 0,
                fontSize: 14,
                lineHeight: "24px",
                color: "#555",
              }}
            >
              <table
                cellPadding={0}
                cellSpacing={0}
                style={{
                  width: "100%",
                  lineHeight: "24px",
                  textAlign: "left",
                }}
              >
                <tbody>
                  <tr className="top">
                    <td
                      colSpan={6}
                      style={{ padding: 5, verticalAlign: "top" }}
                    >
                      <table
                        style={{
                          width: "100%",
                          lineHeight: "24px",
                          textAlign: "left",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                padding: 5,
                                verticalAlign: "top",
                                textAlign: "left",
                                paddingBottom: 20,
                              }}
                            >
                              <font
                                style={{
                                  verticalAlign: "top",
                                  marginBottom: 25,
                                }}
                              >
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#7367F0",
                                    fontWeight: 600,
                                    lineHeight: "35px",
                                  }}
                                >
                                  Customer Info
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  walk-in-customer
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  walk-in-customer@example.com
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  123456780
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  N45 , Dhaka
                                </font>
                              </font>
                              <br />
                            </td>
                            <td
                              style={{
                                padding: 5,
                                verticalAlign: "top",
                                textAlign: "left",
                                paddingBottom: 20,
                              }}
                            >
                              <font
                                style={{
                                  verticalAlign: "top",
                                  marginBottom: 25,
                                }}
                              >
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#7367F0",
                                    fontWeight: 600,
                                    lineHeight: "35px",
                                  }}
                                >
                                  Company Info
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  DGT{" "}
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  admin@example.com
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  6315996770
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  3618 Abia Martin Drive
                                </font>
                              </font>
                              <br />
                            </td>
                            <td
                              style={{
                                padding: 5,
                                verticalAlign: "top",
                                textAlign: "left",
                                paddingBottom: 20,
                              }}
                            >
                              <font
                                style={{
                                  verticalAlign: "top",
                                  marginBottom: 25,
                                }}
                              >
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#7367F0",
                                    fontWeight: 600,
                                    lineHeight: "35px",
                                  }}
                                >
                                  Invoice Info
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  Reference{" "}
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  Payment Status
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  Status
                                </font>
                              </font>
                              <br />
                            </td>
                            <td
                              style={{
                                padding: 5,
                                verticalAlign: "top",
                                textAlign: "right",
                                paddingBottom: 20,
                              }}
                            >
                              <font
                                style={{
                                  verticalAlign: "top",
                                  marginBottom: 25,
                                }}
                              >
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#7367F0",
                                    fontWeight: 600,
                                    lineHeight: "35px",
                                  }}
                                >
                                  &nbsp;
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#000",
                                    fontWeight: 400,
                                  }}
                                >
                                  SL0101{" "}
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#2E7D32",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  Paid
                                </font>
                              </font>
                              <br />
                              <font style={{ verticalAlign: "top" }}>
                                <font
                                  style={{
                                    verticalAlign: "top",
                                    fontSize: 14,
                                    color: "#2E7D32",
                                    fontWeight: 400,
                                  }}
                                >
                                  {" "}
                                  Completed
                                </font>
                              </font>
                              <br />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr className="heading " style={{ background: "#F3F2F7" }}>
                    <td
                      style={{
                        padding: 10,
                        verticalAlign: "middle",
                        fontWeight: 600,
                        color: "#5E5873",
                        fontSize: 14,
                      }}
                    >
                      Product Name
                    </td>
                    <td
                      style={{
                        padding: 10,
                        verticalAlign: "middle",
                        fontWeight: 600,
                        color: "#5E5873",
                        fontSize: 14,
                      }}
                    >
                      QTY
                    </td>
                    <td
                      style={{
                        padding: 10,
                        verticalAlign: "middle",
                        fontWeight: 600,
                        color: "#5E5873",
                        fontSize: 14,
                      }}
                    >
                      Price
                    </td>
                    <td
                      style={{
                        padding: 10,
                        verticalAlign: "middle",
                        fontWeight: 600,
                        color: "#5E5873",
                        fontSize: 14,
                      }}
                    >
                      Discount
                    </td>
                    <td
                      style={{
                        padding: 10,
                        verticalAlign: "middle",
                        fontWeight: 600,
                        color: "#5E5873",
                        fontSize: 14,
                      }}
                    >
                      TAX
                    </td>
                    <td
                      style={{
                        padding: 10,
                        verticalAlign: "middle",
                        fontWeight: 600,
                        color: "#5E5873",
                        fontSize: 14,
                      }}
                    >
                      Subtotal
                    </td>
                  </tr>
                  <tr
                    className="details"
                    style={{ borderBottom: "1px solid #E9ECEF" }}
                  >
                    <td
                      style={{
                        padding: 10,
                        verticalAlign: "top",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={Product1}
                        alt="img"
                        className="me-2"
                        style={{ width: 40, height: 40 }}
                      />
                      Macbook pro
                    </td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>1.00</td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>
                      1500.00
                    </td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>0.00</td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>0.00</td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>
                      1500.00
                    </td>
                  </tr>
                  <tr
                    className="details"
                    style={{ borderBottom: "1px solid #E9ECEF" }}
                  >
                    <td
                      style={{
                        padding: 10,
                        verticalAlign: "top",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={Product7}
                        alt="img"
                        className="me-2"
                        style={{ width: 40, height: 40 }}
                      />
                      Apple Earpods
                    </td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>1.00</td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>
                      2000.00
                    </td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>0.00</td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>0.00</td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>
                      1500.00
                    </td>
                  </tr>
                  <tr
                    className="details"
                    style={{ borderBottom: "1px solid #E9ECEF" }}
                  >
                    <td
                      style={{
                        padding: 10,
                        verticalAlign: "top",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={Product8}
                        alt="img"
                        className="me-2"
                        style={{ width: 40, height: 40 }}
                      />
                      samsung
                    </td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>1.00</td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>
                      8000.00
                    </td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>0.00</td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>0.00</td>
                    <td style={{ padding: 10, verticalAlign: "top" }}>
                      1500.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Order Tax</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Discount</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Shipping</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
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
              <div className="row">
                <div className="col-lg-6 ">
                  <div className="total-order w-100 max-widthauto m-auto mb-4">
                    <ul>
                      <li>
                        <h4>Order Tax</h4>
                        <h5>$ 0.00 (0.00%)</h5>
                      </li>
                      <li>
                        <h4>Discount </h4>
                        <h5>$ 0.00</h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="total-order w-100 max-widthauto m-auto mb-4">
                    <ul>
                      <li>
                        <h4>Shipping</h4>
                        <h5>$ 0.00</h5>
                      </li>
                      <li className="total">
                        <h4>Grand Total</h4>
                        <h5>$ 0.00</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <Link to="#" className="btn btn-submit me-2">
                  Update
                </Link>
                <Link to="#" className="btn btn-cancel">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDetail;
