import React, { useEffect, useState, useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Table from '../../EntryFile/datatable';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Tabletop from '../../EntryFile/tabletop';
import Swal from 'sweetalert2';
import 'react-datepicker/dist/react-datepicker.css';
import {
  ClosesIcon,
  Excel,
  Filter,
  Pdf,
  Eye1,
  Calendar,
  Printer,
  search_whites,
  Search,
  PlusIcon,
  EditIcon,
  Dollar1,
  plusCircle,
  Download,
  delete1,
  DeleteIcon,
  datepicker,
} from '../../EntryFile/imagePath';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import { api } from '../../utils/api';
import ReactToPrint from 'react-to-print';
import FeatherIcon from 'feather-icons-react';
import LoadingSpinner from '../../InitialPage/Sidebar/LoadingSpinner';
import { useTranslation } from 'react-i18next';

const SalesList = (props) => {
  const ref = useRef();
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [inputfilter, setInputfilter] = useState(false);
  const [customerName, setCustomerName] = useState([]);
  const [orderDate, setOrderDate] = useState([]);
  const [payMethod, setPayMethod] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [orderPrice, setOrderPrice] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [orderDetail, setOrderDetail] = useState({});
  const { t } = useTranslation();

  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function handleSetOrderDetail(text) {
    setOrderDetail(text);
  }

  const togglefilter = (value) => {
    setInputfilter(value);
  };

  const confirmText = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: !0,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn btn-danger ml-1',
      buttonsStyling: !1,
    }).then(function (t) {
      t.value &&
        Swal.fire({
          type: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          confirmButtonClass: 'btn btn-success',
        });
    });
  };
  const options = [
    { id: 1, text: 'Completed', text: 'Completed' },
    { id: 2, text: 'Paid', text: 'Paid' },
  ];
  const options1 = [
    { id: 1, text: 'Cash', text: 'Cash' },
    { id: 2, text: 'Online', text: 'Online' },
    { id: 3, text: 'Inprogess', text: 'Inprogess' },
  ];

  const columns = [
    {
      title: t('orders.table.customer_name'),
      dataIndex: 'customer',
      sorter: (a, b) => a.customer.length - b.customer.length,
    },
    {
      title: t('orders.table.order_type'),
      dataIndex: 'orderType',
      sorter: (a, b) => a.orderType.length - b.orderType.length,
    },
    {
      title: t('created_at'),
      dataIndex: 'createdAt',
      sorter: (a, b) => a.createdAt.length - b.createdAt.length,
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   render: (text, record) => (
    //     <>
    //       {text === 'New' && <span className="badges bg-lightred">{text}</span>}
    //       {text === 'In Progress' && (
    //         <span className="badges bg-lightgreen">{text}</span>
    //       )}
    //       {text === 'Completed' && (
    //         <span className="badges bg-lightred">{text}</span>
    //       )}
    //       {text === 'Cancelled' && (
    //         <span className="badges bg-lightred">{text}</span>
    //       )}
    //       {text === 'Refunded' && (
    //         <span className="badges bg-lightred">{text}</span>
    //       )}
    //       {text === 'Hold On' && (
    //         <span className="badges bg-lightred">{text}</span>
    //       )}
    //     </>
    //   ),
    //   sorter: (a, b) => a.status.length - b.status.length,
    // },
    {
      title: t('orders.table.payment_method'),
      dataIndex: 'paymethod',
      render: (text, record) => (
        <>
          {text === 'Cash' && (
            <span className="badges bg-lightgreen">{text}</span>
          )}
          {text === 'Debit' && (
            <span className="badges bg-lightred">{text}</span>
          )}
          {text === 'Scan' && (
            <span className="badges bg-lightred">{text}</span>
          )}
        </>
      ),
      sorter: (a, b) => a.paymethod.length - b.paymethod.length,
    },
    // {
    //   title: 'Payment',
    //   dataIndex: 'Payment',
    //   render: (text, record) => (
    //     <>
    //       {text === 'Paid' && (
    //         <span className="badges bg-lightgreen">{text}</span>
    //       )}
    //       {text === 'Due' && <span className="badges bg-lightred">{text}</span>}
    //     </>
    //   ),
    //   sorter: (a, b) => a.Payment.length - b.Payment.length,
    // },
    {
      title: t('price'),
      dataIndex: 'totalPrice',
      sorter: (a, b) => a.totalPrice.length - b.totalPrice.length,
    },
    // {
    //   title: 'Paid',
    //   dataIndex: 'Paid',
    //   render: (text, record) => (
    //     <>
    //       {text === 100 && <div className="text-green">{text}</div>}
    //       {text === 0 && <div>{text}</div>}
    //     </>
    //   ),
    //   sorter: (a, b) => a.Paid.length - b.Paid.length,
    // },
    // {
    //   title: 'Due',
    //   dataIndex: 'Due',
    //   render: (text, record) => (
    //     <>
    //       {text === 100 && <div className="text-red">{text}</div>}
    //       {text === 0 && <div>{text}</div>}
    //     </>
    //   ),
    //   sorter: (a, b) => a.Due.length - b.Due.length,
    // },
    {
      title: t('action'),
      render: (order) => (
        <>
          <div>
            <Link
              className="me-2"
              data-bs-toggle="modal"
              onClick={() => handleSetOrderDetail(order)}
              data-bs-target="#order-details"
            >
              <img src={Eye1} className="me-2" alt="img" />
            </Link>

            <Link>
              <img src={DeleteIcon} className="me-2" alt="img" />
            </Link>
          </div>
        </>
      ),
    },
  ];

  // useEffect(() => {
  //   (async () => {
  //     await api.get('/order').then(async (res) => {
  //       const customers = [];
  //       const ordersWithCustomers = await Promise.all(
  //         res.data.map(async (order) => {
  //           const customer = await api.get(`/customer/${order.customer}`);
  //           customers.push(customer.data.customerName);
  //           order.customer = customer.data.customerName;
  //           order.createdAt = new Date(order.createdAt).toDateString();
  //           return order;
  //         })
  //       );
  //       setCustomerName(customers);
  //       setOrderList(ordersWithCustomers);
  //     });
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const res = await api.get('/order');
  //     const orderData = res.data;
  //     const customerIds = orderData.map((order) => order.customer);
  //     const customerRes = await api.get(
  //       `/customer?ids=${customerIds.join(',')}`
  //     );
  //     const customerData = customerRes.data;

  //     const ordersWithCustomers = orderData.map((order) => {
  //       const customer = customerData.find(
  //         (customer) => customer._id === order.customer
  //       );
  //       order.customer = customer.customerName;
  //       order.createdAt = new Date(order.createdAt).toDateString();
  //       const customers = customerData.map((customer) => customer.customerName);
  //       setCustomerName(customers);
  //       return order;
  //     });
  //     setOrderList(ordersWithCustomers);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const orderRes = await api.get('/order');
        const customerIds = orderRes.data.map((order) => order.customer);
        const customerRes = await api.get(
          `/customer?ids=${customerIds.join(',')}`
        );
        const customerData = customerRes.data.reduce((acc, customer) => {
          acc[customer._id] = customer.customerName;
          return acc;
        }, {});

        const ordersWithCustomers = orderRes.data.map((order) => ({
          ...order,
          customer: customerData[order.customer],
          createdAt: new Date(order.createdAt).toDateString(),
        }));

        setOrderList(ordersWithCustomers);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!orderList.length) return <LoadingSpinner />;

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>{t('orders.title')}</h4>
              <h6>{t('orders.description')}</h6>
            </div>
            <div className="page-btn">
              <Link to="/dream-pos/sales/add-sales" className="btn btn-added">
                <img src={PlusIcon} alt="img" className="me-1" />
                {t('orders.make_order')}
              </Link>
            </div>
            {/* <div className="fixed inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
              >
                Open dialog
              </button>
            </div> */}
          </div>
          {/* /product list */}
          <div className="card" ref={ref}>
            <div className="card-body align-items-center justify-center">
              <Tabletop inputfilter={inputfilter} togglefilter={togglefilter} />
              {/* /Filter */}
              <div
                className={`card mb-0 ${inputfilter ? 'toggleCls' : ''}`}
                id="filter_inputs"
                style={{ display: inputfilter ? 'block' : 'none' }}
              >
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Name" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" placeholder="Enter Reference No" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="form-group">
                        <Select2
                          className="select"
                          data={options}
                          options={{
                            placeholder: 'Choose Suppliers',
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                      <div className="form-group">
                        <Link to="#" className="btn btn-filters ms-auto">
                          <img src={search_whites} alt="img" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Filter */}
              <div className="table-responsive">
                <Table props={props} columns={columns} dataSource={orderList} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
      <>
        <div
          className="modal fade"
          id="showpayment"
          tabIndex={-1}
          aria-labelledby="showpayment"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Show Payments</h5>
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
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Reference</th>
                        <th>Amount </th>
                        <th>Paid By </th>
                        <th>Paid By </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bor-b1">
                        <td>2022-03-07 </td>
                        <td>INV/SL0101</td>
                        <td>$ 0.00 </td>
                        <td>Cash</td>
                        <td>
                          <Link className="me-2" to="#">
                            <img src={Printer} alt="img" />
                          </Link>
                          <Link
                            className="me-2"
                            to="#"
                            data-bs-target="#editpayment"
                            data-bs-toggle="modal"
                            data-bs-dismiss="modal"
                          >
                            <img src={EditIcon} alt="img" />
                          </Link>
                          <Link className="me-2 confirm-text" to="#">
                            <img src={DeleteIcon} alt="img" />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* show payment Modal */}
        {/* show payment Modal */}
        <div
          className="modal fade"
          id="createpayment"
          tabIndex={-1}
          aria-labelledby="createpayment"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Payment</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label>Customer</label>
                      <div className="input-groupicon">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                        <div className="addonset">
                          <img src={Calendar} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label>Reference</label>
                      <input type="text" defaultValue="INV/SL0101" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label>Received Amount</label>
                      <input type="text" defaultValue={0.0} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label>Paying Amount</label>
                      <input type="text" defaultValue={0.0} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label>Payment type</label>
                      <Select2
                        className="select"
                        data={options1}
                        options={{
                          placeholder: 'Choose Suppliers',
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-0">
                      <label>Note</label>
                      <textarea className="form-control" defaultValue={''} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-submit">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-cancel"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* show payment Modal */}
        {/* edit payment Modal */}
        <div
          className="modal fade"
          id="editpayment"
          tabIndex={-1}
          aria-labelledby="editpayment"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Payment</h5>
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
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label>Customer</label>
                      <div className="input-groupicon">
                        <DatePicker
                          selected={startDate1}
                          onChange={(date) => setStartDate1(date)}
                        />
                        <div className="addonset">
                          <img src={datepicker} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label>Reference</label>
                      <input type="text" defaultValue="INV/SL0101" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label>Received Amount</label>
                      <input type="text" defaultValue={0.0} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label>Paying Amount</label>
                      <input type="text" defaultValue={0.0} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label>Payment type</label>
                      <Select2
                        className="select"
                        data={options1}
                        options={{
                          placeholder: 'Choose Suppliers',
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-0">
                      <label>Note</label>
                      <textarea className="form-control" defaultValue={''} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-submit">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-cancel"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      <div
        className="modal fade"
        id="order-details"
        tabIndex={-1}
        aria-labelledby="create"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="row" ref={ref}>
              <div className="bill-container">
                <div className="col-lg-12 col-sm-12">
                  <div className="card">
                    <div className="text-center mt-3 mb-2 font-weight-bold">
                      <h2>Restaurant Receipt</h2>
                    </div>
                    {/* <div className="text-center mt-2 mb-2 font-weight-bold text-yellow">
                    <h4>Authentic Food At its Finest!</h4>
                  </div> */}
                    <div className="card-body">
                      <div className="table-responsive">
                        <div>
                          <div className="d-flex justify-content-center mb-3 align-items-center px-5">
                            <p>
                              Customer :{' '}
                              <span className="font-weight-bold">
                                {orderDetail.customer}
                              </span>
                            </p>
                          </div>
                          <div className="d-flex justify-content-center mb-3 align-items-center px-5">
                            <p>PayMethod : {orderDetail.paymethod} </p>
                          </div>
                          <div className="d-flex justify-content-center mb-3 align-items-center px-5">
                            <p>Time : {orderDetail.createdAt}</p>
                          </div>
                        </div>
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>List of Items</th>
                              <th>Quantity</th>
                              <th>Unit Cost</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {!(orderDetail === null) &&
                              orderDetail.dishes !== undefined &&
                              orderDetail.dishes.map((orderDishes, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{orderDishes.dishName}</td>
                                  <td>{orderDishes.counter}</td>
                                  <td>£{orderDishes.dishPrice}</td>
                                  <td>
                                    £
                                    {orderDishes.dishPrice *
                                      orderDishes.counter}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        <tfoot className="d-flex justify-content-end px-5 mt-2">
                          <span>Total Price : £{orderDetail.totalPrice}</span>
                        </tfoot>
                      </div>
                      <div className="text-center mt-2 mb-2 font-weight-bold text-yellow">
                        <h5>Eat As much As You Like!</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end p-2">
              <div className="px-3 border-end">
                <Link className="d-flex align-items-center">
                  <FeatherIcon icon="edit" />
                  <span className="px-2">Edit</span>
                </Link>
              </div>
              <div className="px-3 border-end">
                <ReactToPrint
                  bodyClass="print-agreement"
                  content={() => ref.current}
                  trigger={() => (
                    <Link className="d-flex align-items-center">
                      <FeatherIcon icon="printer" />
                      <span className="px-2">Print</span>
                    </Link>
                  )}
                />
              </div>
              <div className="px-3">
                <Link
                  className="d-flex align-items-center"
                  data-bs-dismiss="modal"
                >
                  <FeatherIcon icon="x" />
                  <span className="px-2">Close</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesList;
