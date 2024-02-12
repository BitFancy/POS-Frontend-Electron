import React from 'react'
import {Link} from "react-router-dom"
import { Samsung, Upload } from '../../EntryFile/imagePath'

const EditBrand = () =>{
    return(
        <>
        <div className="page-wrapper">
  <div className="content">
    <div className="page-header">
      <div className="page-title">
        <h4>Brand Edit</h4>
        <h6>Update your Brand</h6>
      </div>
    </div>
    {/* /add */}
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="form-group">
              <label>Brand Name</label>
              <input type="text" defaultValue="samsung" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                defaultValue={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                }
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label> Product Image</label>
              <div className="image-upload">
                <input type="file" />
                <div className="image-uploads">
                  <img src={Upload}alt="img" />
                  <h4>Drag and drop a file to upload</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="product-list">
              <ul className="row">
                <li>
                  <div className="productviews">
                    <div className="productviewsimg">
                      <img src={Samsung} alt="img" />
                    </div>
                    <div className="productviewscontent">
                      <div className="productviewsname">
                        <h2>samsung</h2>
                        <h3>581kb</h3>
                      </div>
                      <a href="#">x</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <button href="#" className="btn btn-submit me-2">
              Submit
            </button>
            <Link to="/brandlist" className="btn btn-cancel">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* /add */}
  </div>
</div>

        </>
    )
}

export default EditBrand