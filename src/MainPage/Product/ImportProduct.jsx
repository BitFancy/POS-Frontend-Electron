import React from 'react'
import { Upload } from '../../EntryFile/imagePath';

const ImportProduct =()=>{
    return(
        <>
        <div className="page-wrapper">
  <div className="content">
    <div className="page-header">
      <div className="page-title">
        <h4>Import Menus</h4>
        <h6>Bulk upload your menus</h6>
      </div>
    </div>
    {/* /product list */}
    <div className="card">
      <div className="card-body">
        <div className="requiredfield">
          <h4>Field must be in csv format</h4>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="form-group">
              <a className="btn btn-submit w-100">Download Sample File</a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label> Upload CSV File</label>
              <div className="image-upload">
                <input type="file" />
                <div className="image-uploads">
                  <img src={Upload} alt="img" />
                  <h4>Drag and drop a file to upload</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="productdetails productdetailnew">
              <ul className="product-bar">
                <li>
                  <h4>Food Name</h4>
                  <h6 className="manitorygreen">This Field is required</h6>
                </li>
                <li>
                  <h4>Category</h4>
                  <h6 className="manitorygreen">This Field is required</h6>
                </li>
                {/* <li>
                  <h4>SKU code</h4>
                  <h6 className="manitorygreen">This Field is required</h6>
                </li> */}
                {/* <li>
                  <h4>Product Cost</h4>
                  <h6 className="manitorygreen">This Field is required</h6>
                </li> */}
                <li>
                  <h4>Food Price</h4>
                  <h6 className="manitorygreen">This Field is required</h6>
                </li>
                <li>
                  <h4>Food Unit</h4>
                  <h6 className="manitorygreen">This Field is required</h6>
                </li>
                <li>
                  <h4>Description</h4>
                  <h6 className="manitoryblue">Field optional</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="productdetails productdetailnew">
              <ul className="product-bar">
                <li>
                  <h4>Minimum Qty</h4>
                  <h6 className="manitoryblue">Field optional</h6>
                </li>
                <li>
                  <h4>Quantity</h4>
                  <h6 className="manitoryblue">Field optional</h6>
                </li>
                <li>
                  <h4>Tax</h4>
                  <h6 className="manitoryblue">Field optional</h6>
                </li>
                <li>
                  <h4>Discount Type</h4>
                  <h6 className="manitoryblue">Field optional</h6>
                </li>
                {/* <li>
                  <h4>Brand</h4>
                  <h6 className="manitoryblue">Field optional</h6>
                </li> */}
                <li>
                  <h4>Minimum Qty</h4>
                  <h6 className="manitoryblue">Field optional</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group mb-0">
              <button href="#" className="btn btn-submit me-2">
                Submit
              </button>
              <button href="#" className="btn btn-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /product list */}
  </div>
</div>
</>
    )
}

export default ImportProduct;