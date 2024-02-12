import { useState, useEffect, useRef, useContext } from 'react';
import React from 'react';
// import Header from './posheader';
import Header from '../Sidebar/Header';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
// import { DateTimeFormatter } from 'react-intl';
import Swal from 'sweetalert2';
import POSLeft2 from './posleft2';
import Transactions from './transactions';
import FeatherIcon from 'feather-icons-react';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import {
  Product34,
  wallet1,
  transcation,
  trash12,
  Scan,
  Edit6,
  pause1,
  Debit,
  Cash,
  Product30,
  Product31,
  Product35,
  delete2,
  ellipise1,
  scanner1,
  PlusIcon,
} from '../../EntryFile/imagePath';
import Addon from '../../MainPage/Component/AddOn';
import Minus from '../../MainPage/Component/Minus';
import { api } from '../../utils/api';
import alertify from 'alertifyjs';
import './index.css';
import TimeDate from '../../MainPage/DateTime/Date';
import TimeClock from '../../MainPage/DateTime/Clock';
import LoadingSpinner from '../Sidebar/LoadingSpinner';
import { useTranslation } from 'react-i18next';
import { GeneralContext } from '../../context/GeneralContext';
import { css, get } from 'jquery';
import { set } from 'react-hook-form';

const Pos = () => {
  const ref = useRef();
  const [dishes, setDishes] = useState([]);
  const [isActive, setIsActive] = useState('');
  const [orderType, setOrderType] = useState('');
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState('');
  const [orderPrice, setOrderPrice] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  const [totalProdutPrice, setTotalProdutPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  // const [dishName, setDishName] = useState('');
  const [productNameList, setProductNameList] = useState([]);
  const [status, setStatus] = useState('');
  const [activeState, setActiveState] = useState({});
  const [paymethod, setPaymethod] = useState('');
  const [productIdList, setProductIdList] = useState([]);
  const [isPayActive, setIsPayActive] = useState(false);
  const [isStatusActive, setIsStatusActive] = useState(false);
  const [distance, setDistance] = useState(0);
  const [direction, setDirection] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [postCode, setPostCode] = useState('');
  const [customerAddress, setCustomerAddress] = useState({});
  const [restuarantAddress, setRestaurantAddress] = useState({});
  const [restaurantPostCode, setRestaurantPostCode] = useState('');
  const [customerPostCode, setCustomerPostCode] = useState('');
  const date = new Date();
  const { t } = useTranslation();
  const restaurant = useContext(GeneralContext);

  const currentRestaurant = restaurant[0];
  useEffect(() => {
    if (currentRestaurant) {
      setRestaurantPostCode(currentRestaurant.postcode);
    }
  }, [currentRestaurant]);

  useEffect(() => {
    (async () => {
      await api.get(`/customer/${customer}`).then((res) => {
        setCustomerPostCode(res.data.postCode);
      });
    })();
  }, [customer]);

  useEffect(() => {
    (async () => {
      const res = await api.get('/category/all');
      const tempData = [];

      for (let i = 0; i < res.data.length; i++) {
        tempData.push({ id: res.data[i]._id, text: res.data[i].categoryName });
        if (i === res.data.length - 1) {
          setCategories([...tempData]);
        }
      }

      const res2 = await api.get('/product');
      setProducts(res2.data);
    })();
  }, []);

  useEffect(() => {
    setTotalProdutPrice(
      productList.reduce((acc, product) => {
        if (product.productType.includes(6))
          return Number(acc) - Number(product.price);
        return Number(acc) + Number(product.price);
      }, 0)
    );
  }, [productList]);

  useEffect(() => {
    setTotalPrice(
      dishes.reduce((acc, dish) => {
        return Number(acc) + Number(dish.dishPrice * dish.counter);
      }, 0)
    );
  }, [dishes]);

  const deleteDish = (id) => {
    setDishes(dishes.filter((item) => item.id !== id));
  };

  const confirmText = (id, active) => {
    handleSelected(id, active);
  };

  useEffect(() => {
    (async () => {
      await api.get('/customer').then((res) => {
        res.data.forEach((row) => {
          setCustomers((prevCustomer) => [
            ...prevCustomer,
            {
              id: row._id,
              text: row.customerName,
              // phoneNumber: row.phoneNumber,
              email: row.email,
              // houseNumber: row.houseNumber,
              // streetName: row.streetName,
              // postCode: row.postCode,
            },
          ]);
        });
      });
    })();
  }, []);

  const orderTypes = [
    { id: 1, text: 'Dine-in', text: t('order_type.dine-in') },
    { id: 2, text: 'TakeOut', text: t('order_type.takeout') },
    { id: 2, text: 'Delivery', text: t('order_type.delivery') },
  ];
  const options1 = [
    { id: 1, text: 'Product', text: 'Product' },
    { id: 2, text: 'Barcode', text: 'Barcode' },
  ];
  const options2 = [
    { id: 1, text: 'Exclusive', text: 'Exclusive' },
    { id: 2, text: 'Inclusive', text: 'Inclusive' },
  ];

  const paymethods = [t('cash'), t('debit'), t('scan')];
  // const orderStatus = [
  //   'New',
  //   'In Progress',
  //   'Completed',
  //   'Cancelled',
  //   'Refunded',
  //   'Hold On',
  // ];

  const handlePriceChange = (index, value) => {
    const updatedPrices = [...productList];
    updatedPrices[index].price = value;
    setProductList(updatedPrices);
  };

  // const { changeAction, setChangeAction } = useOrderContext();

  const handleSubmit = () => {
    const dishname = productList.reduce((acc, product) => {
      return acc + ' ' + product.productName;
    }, '');

    setDishes([
      ...dishes,
      {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        dishName: dishname,
        productList: productIdList,
        dishPrice: totalProdutPrice,
        counter: 1,
      },
    ]);
    setIsActive(false);
    setProductList([]);
  };

  const handleAddCustomer = async (e) => {
    e.preventDefault();

    try {
      await api.get(`/postcode/${postCode}`);
      console.log('Postcode found');
      await api.post('/customer/add', {
        customerName,
        email,
        phoneNumber,
        houseNumber,
        streetName,
        postCode,
      });
      alertify.success('Successfully Customer Added');
      setCustomerName('');
      setEmail('');
      setPhoneNumber('');
      setHouseNumber('');
      setStreetName('');
      setPostCode('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log('Postcode not found');
        alertify.warning('PostCode invalid!');
      } else if (error.response && error.response.status === 400) {
        alertify.warning('Customer Already Exists');
      } else {
        console.error('An error occurred:', error);
      }
    }
  };

  useEffect(() => {
    setProductIdList(productList.map((product) => product._id));
  }, [productList]);

  const orderData = {
    orderType,
    customer,
    dishes,
    totalPrice,
    paymethod,
    status,
  };

  const calculateInitialBearing = (lat1, lon1, lat2, lon2) => {
    const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    let brng = Math.atan2(y, x);
    brng = (brng * 180) / Math.PI; // Convert radians to degrees
    return (brng + 360) % 360; // Normalize to a value between 0 and 360 degrees
  };

  const detectDirection = (lat1, lon1, lat2, lon2) => {
    const bearing = calculateInitialBearing(lat1, lon1, lat2, lon2);
    const directions = [
      t('direction.north'),
      t('direction.north-east'),
      t('direction.east'),
      t('direction.south-east'),
      t('direction.south'),
      t('direction.south-west'),
      t('direction.west'),
      t('direction.north-west'),
    ];
    const index = Math.round(bearing / 45) % 8;
    return directions[index];
  };

  const handleMakeOrder = async () => {
    if (orderData.orderType === '') {
      alertify.warning('Please select the order type!');
    } else if (orderData.customer === '') {
      alertify.warning('Please select the customer!');
    } else if (orderData.paymethod === '') {
      alertify.warning('Please select the paymethod!');
      // } else if (orderData.status === '') {
      //   alertify.warning('Please select the order status!');
    } else {
      determineDirection();
      await api
        .post('/order/add', orderData)
        .then((res) => {
          // alertify.success('Successfully Order Added!');
          // setDishes([]);
        })
        .catch((err) => {
          alertify.warning('Some error!');
        });
    }
  };

  const handleSelected = (id, isActive) => {
    if (isActive === true) {
      setProductList([
        ...productList,
        ...products.filter((item) => item._id === id),
      ]);
    } else {
      setProductList(productList.filter((item) => item._id !== id));
    }
  };

  const handlePayMethod = (paymethod) => {
    setPaymethod(paymethod);
    setIsPayActive(paymethod);
  };

  // const handleStatus = (orderStatus) => {
  //   setStatus(orderStatus);
  //   setIsStatusActive(orderStatus);
  // };

  const removeOrderList = () => {
    setDishes([]);
  };

  const printOrder = () => {
    alertify.success('Successfully Order Added!');
    setDishes([]);
  };

  const getPosition = async (postCode) => {
    const res = await api.get(`/postcode/${postCode}`);
    console.log(res.data.latitude, 'get lan long from post code');
    return res.data;
  };

  const determineDirection = async () => {
    console.log(']]]]]]]]]]]]]]]]]]]]]]determineDirection===========');
    const resPosition = await getPosition(restaurantPostCode);
    const cusPosition = await getPosition(customerPostCode);
    const detectdirection = detectDirection(
      resPosition.latitude,
      resPosition.longitude,
      cusPosition.latitude,
      cusPosition.longitude
    );
    console.log('handle getdirection', detectdirection);
    setDirection(detectdirection);
  };

  if (!products.length) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="main-wrappers">
        <Header />
        <div className="page-wrapper ms-0">
          <div className="content">
            <div className="row">
              <POSLeft2
                categories={categories}
                products={products}
                productList={productList}
                setProductList={setProductList}
                activeState={activeState}
                setActiveState={setActiveState}
                handleSelected={handleSelected}
              />
              <div className="col-lg-2 col-sm-12">
                <div className="order-list">
                  <div className="orderid">
                    <h4>{t('pos.dish')}</h4>
                  </div>
                </div>
                <div className="card card-order">
                  <div className="split-card"></div>
                  <div className="card-body pt-0">
                    <div className="totalitem">
                      <h4>
                        {t('pos.total_items')} : {productList.length}
                      </h4>
                    </div>
                    <div className="dish-table">
                      {productList.length > 0 &&
                        productList.map((product) => (
                          <div key={product._id}>
                            {product.productType.includes(5) && (
                              <span>{t('pos.addon')}</span>
                            )}
                            {product.productType.includes(6) && (
                              <span>{t('pos.minus')}</span>
                            )}
                            <div className="product-lists-dish">
                              <div className="row align-items-center">
                                <div className="col-lg-10">
                                  <div className="productimg">
                                    <div className="productcontent">
                                      <h4>{product.productName}</h4>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-lg-10">
                                  <div className="input-group">
                                    <span className="input-group-text">£</span>
                                    <input
                                      type="text"
                                      className="form-control text-end"
                                      aria-label="Amount (to the nearest dollar)"
                                      value={product.price}
                                      onChange={(e) =>
                                        handlePriceChange(index, e.target.value)
                                      }
                                      style={{
                                        padding: '6px 3px',
                                      }}
                                    />
                                  </div>
                                </div> */}
                                <div className="col-lg-2">
                                  <Link
                                    to="/#"
                                    className="confirm-text"
                                    onClick={() =>
                                      confirmText(product._id, false)
                                    }
                                  >
                                    <img src={delete2} alt="img" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="split-card"></div>
                  <div className="card-body pt-2 pb-2">
                    <div className="setvalue">
                      <ul>
                        <li className="total-value">
                          <h5>{t('pos.total')}</h5>
                          <h6>£{totalProdutPrice}</h6>
                        </li>
                      </ul>
                    </div>
                    {/* <div
                      onClick={handleSubmit}
                      className="btn-totallabel cursorHand"
                    >
                      <h5>Submit</h5>
                    </div> */}
                    <button onClick={handleSubmit} className="btn btn-adds">
                      {t('submit')}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12">
                <div className="order-list">
                  <div className="orderid">
                    <h4>{t('pos.order_list')}</h4>
                  </div>

                  <Link
                    to="/main/sales/saleslist"
                    // className="btn btn-added"
                    className="d-flex align-items-center"
                  >
                    <span style={{ fontWeight: 'bold' }}>
                      {t('pos.go_order_list')}{' '}
                    </span>
                    <FeatherIcon icon="arrow-right" />
                  </Link>
                  {/* </div> */}
                </div>
                <div className="card card-order">
                  <div className="card-body">
                    <div className="select-split">
                      <div className="w-25">{t('pos.order_type')}:</div>
                      <div className="select-group w-75">
                        <Select2
                          className="select"
                          data={orderTypes}
                          options={{
                            placeholder: t('pos.select_order_type'),
                          }}
                          onChange={(e) => setOrderType(e.target.value)}
                          value={orderType}
                        />
                      </div>
                    </div>
                    {/* <div className="d-flex align-items-center">
                      <div className="w-25">Customer:</div>
                      <div className="w-70 d-flex justify-content-between">
                        <div className="select-group">
                          <Select2
                            className="select"
                            data={customers}
                            options={{
                              placeholder: 'Select Customer',
                            }}
                            onChange={(e) => setCustomer(e.target.value)}
                            value={customer}
                          />
                        </div>
                        <div>
                          <Link
                            className="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#create"
                            style={{
                              color: '#28c76f',
                              border: '2px solid #28c76f',
                            }}
                            onMouseEnter={() => {
                              this.setState({
                                color: '#fff',
                              });
                            }}
                            onMouseLeave={() => {
                              this.setState({
                                color: '#28c76f',
                              });
                            }}
                          >
                            <i className="fa fa-plus me-2" />
                            New
                          </Link>
                        </div>
                      </div>
                    </div> */}
                    <div className="d-flex align-items-center">
                      <div className="w-25">{t('pos.customer')}:</div>
                      <div className="w-75 d-flex justify-content-between">
                        <div
                          className="select-group"
                          style={{ minWidth: '65%' }}
                        >
                          <Select2
                            className="select"
                            data={customers}
                            options={{
                              placeholder: t('pos.select_customer'),
                            }}
                            onChange={(e) => setCustomer(e.target.value)}
                            value={customer}
                          />
                        </div>
                        <Link
                          to="/#"
                          className="btn"
                          data-bs-toggle="modal"
                          data-bs-target="#newCustomer"
                          style={{
                            color: '#28c76f',
                            border: '2px solid #28c76f',
                            minWidth: '25%',
                            minHight: '',
                          }}
                        >
                          <i className="fa fa-plus me-2" />
                          {t('new')}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="split-card"></div>
                  <div className="card-body pt-0">
                    <div className="totalitem">
                      <h4>
                        {t('pos.total_items')} : {dishes.length}
                      </h4>
                      <h6 onClick={removeOrderList} className="cursorHand">
                        <Link to="/#">{t('clear_all')}</Link>
                      </h6>
                    </div>
                    <div className="order-table">
                      {dishes.length > 0 &&
                        dishes.map((dish, index) => (
                          <ul className="product-lists-order" key={index}>
                            <div className="row align-items-center">
                              <div className="col-lg-6">
                                <li>
                                  <div className="productimg">
                                    <div className="productcontent">
                                      <h4>{dish.dishName}</h4>
                                      <div className="increment-decrement">
                                        <div className="input-groups">
                                          <input
                                            onClick={() => {
                                              dish.counter--;
                                              setDishes([...dishes]);
                                            }}
                                            type="button"
                                            defaultValue="-"
                                            className="button-minus dec button"
                                          />
                                          <input
                                            type="text"
                                            name="child"
                                            value={dish.counter}
                                            className="quantity-field"
                                          />
                                          <input
                                            onClick={() => {
                                              dish.counter++;
                                              setDishes([...dishes]);
                                            }}
                                            type="button"
                                            defaultValue="+"
                                            className="button-plus inc button"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div className="col-lg-4 align-items-center">
                                <div className="input-group">
                                  <span className="input-group-text">£</span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Amount (to the nearest dollar)"
                                    value={dish.dishPrice * dish.counter}
                                    onChange={(e) =>
                                      handlePriceChange(index, e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <li className="col-lg-2">
                                <Link
                                  to="/#"
                                  className="confirm-text"
                                  onClick={() => deleteDish(dish.id)}
                                >
                                  <img src={delete2} alt="img" />
                                </Link>
                              </li>
                            </div>
                          </ul>
                        ))}
                    </div>
                  </div>
                  <div className="split-card"></div>
                  <div className="card-body pt-2 pb-2">
                    <div className="setvalue">
                      <ul>
                        <li className="total-value">
                          <h5>{t('pos.total')}</h5>
                          <h6>£{totalPrice}</h6>
                        </li>
                      </ul>
                    </div>
                    <div className="setvaluecash">
                      <ul>
                        {paymethods.map((pay, index) => (
                          <li
                            key={index}
                            className={isPayActive === pay ? 'active' : ''}
                          >
                            <a
                              className="paymentmethod"
                              onClick={() => handlePayMethod(pay)}
                            >
                              {pay}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <div className="btn-pos">
                      <ul>
                        {orderStatus.map((orderStatus, index) => (
                          <li
                            key={index}
                            className={
                              isStatusActive === orderStatus ? 'active' : ''
                            }
                          >
                            <a
                              className="btn"
                              onClick={() => handleStatus(orderStatus)}
                            >
                              {orderStatus}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                    {/* <div
                      onClick={handleMakeOrder}
                      className="btn-totallabel cursorHand"
                    >
                      <h5>Checkout</h5>
                    </div> */}
                    <button
                      onClick={handleMakeOrder}
                      data-bs-toggle="modal"
                      className="btn btn-adds mt-2"
                      data-bs-target="#order-details"
                    >
                      {t('pos.checkout')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="newCustomer"
        tabIndex={-1}
        aria-labelledby="newCustomer"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{t('customers.add_button')}</h5>
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
                    <label>{t('add_customer.customer_name')}</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>{t('email')}</label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>{t('phone')}</label>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>{t('house_number')}</label>
                    <input
                      type="text"
                      value={houseNumber}
                      onChange={(e) => setHouseNumber(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>{t('street_name')}</label>
                    <input
                      type="text"
                      value={streetName}
                      onChange={(e) => setStreetName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="form-group">
                    <label>{t('postcode')}</label>
                    <input
                      type="text"
                      value={postCode}
                      onChange={(e) => setPostCode(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <Link
                  to="/#"
                  className="btn btn-submit me-2"
                  onClick={handleAddCustomer}
                >
                  {t('submit')}
                </Link>
                <Link
                  to="/#"
                  className="btn btn-cancel"
                  data-bs-dismiss="modal"
                >
                  {t('cancel')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="addon"
        tabIndex={-1}
        aria-labelledby="create"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <Addon
              activeState={activeState}
              setActiveState={setActiveState}
              productList={productList}
              handleSelected={handleSelected}
            />
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="minus"
        tabIndex={-1}
        aria-labelledby="create"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <Minus
              activeState={activeState}
              setActiveState={setActiveState}
              productList={productList}
              handleSelected={handleSelected}
            />
          </div>
        </div>
      </div>
      <Transactions />
      <div
        className="modal fade"
        id="order-details"
        tabIndex={-1}
        aria-labelledby="create"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          {/* <div className="modal-content"> */}
          <div className="bill-modal d-flex flex-column justify-content-between">
            <div
              className="bill-receipt d-flex flex-column justify-content-between"
              ref={ref}
            >
              <div>
                <div className="text-center mt-5 mb-2 font-weight-bold">
                  <h2>{t('restaurant_receipt')}</h2>
                </div>
                <div className="table-responsive">
                  {/* <div className="d-flex justify-content-between"> */}
                  <div className="px-5">
                    <div className="mt-4 pb-3 border-bottom">
                      <div className="d-flex justify-content-between pb-2">
                        <span>{t('restaurant')} : </span>
                        <span>YGO </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>{t('address')} : </span>
                        <span>xxx</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2 mb-3 align-items-center px-5">
                    <span>{t('customer')} : </span>
                    <span className="font-weight-bold">
                      {customers.map((list) => {
                        if (list.id === customer) {
                          return (
                            <span key={list.id} className="font-weight-bold">
                              {list.text}
                            </span>
                          );
                        } else {
                          return null; // or any other fallback value
                        }
                      })}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-3 align-items-center px-5">
                    <span>{t('paymethod')} : </span>
                    <span>{paymethod}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3 align-items-center px-5">
                    {/* <p>Time : {date.toISOString()}</p>*/}
                    <span>{t('date')} : </span>
                    <span>
                      {<TimeDate />} {<TimeClock />}
                    </span>
                  </div>
                  {/* </div> */}
                  <div className="px-4 pt-2">
                    <table className="table mb-0 p-5">
                      <thead>
                        <tr>
                          <th style={{ width: '80%' }}>{t('list_of_items')}</th>
                          <th>{t('quantity')}</th>
                          <th>{t('amount')}</th>
                        </tr>
                      </thead>
                      <tbody className="table-striped">
                        {dishes.map((dish, index) => (
                          <tr key={index}>
                            <td
                              className="d-flex flex-wrap text-wrap"
                              style={{
                                width: '80%',
                                wordWrap: 'break-word',
                                minWidth: '100px',
                                maxWidth: '300px',
                              }}
                            >
                              {index + 1}.{dish.dishName}
                            </td>
                            <td className="text-end">{dish.counter}</td>
                            <td className="text-end">
                              £{dish.dishPrice * dish.counter}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 border-top mx-5">
                    <div className="d-flex justify-content-between mt-2">
                      <span>{t('total_price')} : </span>
                      <span>£{totalPrice}</span>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <span>{t('direction.direction')} : </span>
                      <span>{direction}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 mb-2 font-weight-bold text-yellow">
                <h5>{t('thanks')} </h5>
                <h5>{t('please_come_again')} </h5>
              </div>
            </div>
            <div className="d-flex justify-content-center p-3">
              <div className="px-3 border-end" onClick={printOrder}>
                <ReactToPrint
                  bodyClass="print-agreement"
                  content={() => ref.current}
                  trigger={() => (
                    <Link to="/#" className="d-flex align-items-center">
                      <FeatherIcon icon="printer" />
                      <span className="px-2"> {t('print')} </span>
                    </Link>
                  )}
                />
              </div>
              <div className="px-3">
                <Link
                  to="/#"
                  className="d-flex align-items-center"
                  data-bs-dismiss="modal"
                >
                  <FeatherIcon icon="x" />
                  <span className="px-2">{t('close')} </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Pos;
