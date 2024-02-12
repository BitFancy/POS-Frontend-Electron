import React, { useEffect, useState, useRef } from 'react';
// import * as React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { barcode1, Printer, Product69 } from '../../EntryFile/imagePath';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { any } from 'prop-types';
import { api } from '../../utils/api';
import ReactToPrint from 'react-to-print';

const ProductDetails = () => {
  const { productId } = useParams();
  const [productName, setProductName] = React.useState('');
  const [productCategory, setProductCategory] = React.useState('');
  const [productType, setProductType] = React.useState('');
  const [productPrice, setProductPrice] = React.useState('');
  const [createdAt, setCreatedAt] = React.useState('');
  const [updatedAt, setUpdatedAt] = React.useState('');
  const history = useHistory();
  const ref = useRef();

  // useEffect(() => {
  //   (async () => {
  //     const response = await api.get(`/product/${productId}`);
  useEffect(() => {
    (async () => {
      const response = await api.get(`/product/product-detail/${productId}`);
      for (let j = 0; j < response.data.category.length; j++) {
        response.data.category[
          j
        ] = `${response.data.category[j].categoryName}, `;
      }
      response.data.category[response.data.category.length - 1] =
        response.data.category[response.data.category.length - 1].slice(0, -2);

      response.data.createdAt = new Date(
        response.data.createdAt
      ).toDateString();
      response.data.updatedAt = new Date(
        response.data.updatedAt
      ).toDateString();
      switch (response.data.productType[0]) {
        case 0:
          response.data.productType = 'Main Product';
          break;
        case 1:
          response.data.productType = 'Sub Product1';
          break;
        case 2:
          response.data.productType = 'Sub Product2';
          break;
        case 3:
          response.data.productType = 'Sub Product3';
          break;
        case 4:
          response.data.productType = 'Addon';
          break;
        case 5:
          response.data.productType = 'Minus';
          break;
      }
      setProductName(response.data.productName);
      setProductCategory(response.data.category);
      setProductType(response.data.productType);
      setProductPrice(response.data.price);
      setCreatedAt(response.data.createdAt);
      setUpdatedAt(response.data.updatedAt);
    })();
  }, []);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Product Details</h4>
            <h6>Full details of a product</h6>
          </div>
          <button type="button" class="btn btn-secondary" onClick={goBack}>
            Back
          </button>
          {/* <ReactToPrint
            bodyClass="print-agreement"
            content={() => ref.current}
            trigger={() => (
              <button type="primary" class="btn btn-primary">
                Print
              </button>
            )}
          /> */}
        </div>
        <div ref={ref} className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="productdetails">
                  <ul className="product-bar">
                    <li>
                      <h4>Product Name</h4>
                      <h6>{productName}</h6>
                    </li>
                    <li>
                      <h4>Category</h4>
                      <h6>{productCategory}</h6>
                    </li>
                    <li>
                      <h4>Product Type</h4>
                      <h6>{productType}</h6>
                    </li>
                    <li>
                      <h4>Price</h4>
                      <h6>£{productPrice}</h6>
                    </li>
                    <li>
                      <h4>Created At</h4>
                      <h6>{createdAt}</h6>
                    </li>
                    <li>
                      <h4>Updated At</h4>
                      <h6>{updatedAt}</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
