import React,{useState} from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Plus,
  Scanner,
  Product7,
  DeleteIcon,
  Calendar,
  Product8,
  Product1,
} from "../../EntryFile/imagePath";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import { useEffect } from "react";
const Addsales = () => {
  const [startDate, setStartDate] = useState(new Date());
  const options = [
    { id: 1, text: "Choose", text: "Choose" },
    { id: 2, text: "Costumer Name", text: "Costumer Name" },
  ];
  const options1 = [
    { id: 1, text: "Choose", text: "Choose" },
    { id: 2, text: "Supplier Name", text: "Supplier Name" },
  ];
  const options2 = [
    { id: 1, text: "Completed", text: "Completed" },
    { id: 2, text: "Inprogess", text: "Inprogess" },
  ];

  useEffect(() => {
    $(document).on("click", ".delete-set", function () {
      $(this).parent().parent().hide();
    });
  });

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Add Sale</h4>
            <h6>Add your new sale</h6>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Customer</label>
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-10">
                      <Select2
                        className="select"
                        data={options}
                        options={{
                          placeholder: "Choose",
                        }}
                      />
                    </div>
                    <div className="col-lg-2 col-sm-2 col-2 ps-0">
                      <div className="add-icon">
                        <span>
                          <img src={Plus} alt="img" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Customer</label>
                  <div className="input-groupicon">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                    <Link to="#" className="addonset">
                      <img src={Calendar} alt="img" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="form-group">
                  <label>Supplier</label>
                  <Select2
                    className="select"
                    data={options1}
                    options={{
                      placeholder: "Choose",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-sm-6 col-12">
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
              </div>
            </div>
            <div className="row">
              <div className="table-responsive mb-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>QTY</th>
                      <th>Price</th>
                      <th>Discount</th>
                      <th>Tax</th>
                      <th>Subtotal</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="productimgname">
                        <Link to="#" className="product-img">
                          <img src={Product7} alt="product" />
                        </Link>
                        <Link to="#">Apple Earpods</Link>
                      </td>
                      <td>1.00</td>
                      <td>15000.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>1500.00</td>
                      <td>
                        <Link to="#" className="delete-set">
                          <img src={DeleteIcon} alt="svg" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="productimgname">
                        <Link to="#" className="product-img">
                          <img src={Product8} alt="product" />
                        </Link>
                        <Link to="#">iPhone 11</Link>
                      </td>
                      <td>1.00</td>
                      <td>1500.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>1500.00</td>
                      <td>
                        <Link to="#" className="delete-set">
                          <img src={DeleteIcon} alt="svg" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="productimgname">
                        <Link to="#" className="product-img">
                          <img src={Product1} alt="product" />
                        </Link>
                        <Link to="#">Macbook pro</Link>
                      </td>
                      <td>1.00</td>
                      <td>1500.00</td>
                      <td>0.00</td>
                      <td>0.00</td>
                      <td>1500.00</td>
                      <td>
                        <Link to="#" className="delete-set">
                          <img src={DeleteIcon} alt="svg" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                    data={options2}
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
                  Submit
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

export default Addsales;
