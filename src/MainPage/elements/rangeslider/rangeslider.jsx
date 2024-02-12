import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/ion.rangeSlider.min.css";
import "./js/ion.rangeSlider.min.js";
import "./js/custom-rangeslider.js";

const Rangeslider = () => {
  return (
    <div className="page-wrapper cardhead">
      <div className="content ">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Range Slider</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dream-pos/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Range Slider</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Rangeslider */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Default</h5>
              </div>
              <div className="card-body">
                <input type="text" id="range_01" />
              </div>
            </div>
          </div>
          {/* /Rangeslider */}
          {/* Rangeslider */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Min-Max</h5>
              </div>
              <div className="card-body">
                <input type="text" id="range_02" />
              </div>
            </div>
          </div>
          {/* /Rangeslider */}
          {/* Rangeslider */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Prefix</h5>
              </div>
              <div className="card-body">
                <input type="text" id="range_03" />
              </div>
            </div>
          </div>
          {/* /Rangeslider */}
          {/* Rangeslider */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Range</h5>
              </div>
              <div className="card-body">
                <input type="text" id="range_04" />
              </div>
            </div>
          </div>
          {/* /Rangeslider */}
          {/* Rangeslider */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Step</h5>
              </div>
              <div className="card-body">
                <input type="text" id="range_05" />
              </div>
            </div>
          </div>
          {/* /Rangeslider */}
          {/* Rangeslider */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Custom Values</h5>
              </div>
              <div className="card-body">
                <input type="text" id="range_06" />
              </div>
            </div>
          </div>
          {/* /Rangeslider */}
          {/* Rangeslider */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Modern skin</h5>
              </div>
              <div className="card-body">
                <input type="text" id="range_13" />
              </div>
            </div>
          </div>
          {/* /Rangeslider */}
          {/* Rangeslider */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Sharp Skin</h5>
              </div>
              <div className="card-body">
                <input type="text" id="range_14" />
              </div>
            </div>
          </div>
          {/* /Rangeslider */}
          {/* Rangeslider */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Round skin</h5>
              </div>
              <div className="card-body">
                <input type="text" id="range_15" />
              </div>
            </div>
          </div>
          {/* /Rangeslider */}
          {/* Rangeslider */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Square Skin</h5>
              </div>
              <div className="card-body">
                <input type="text" id="range_16" />
              </div>
            </div>
          </div>
          {/* /Rangeslider */}
        </div>
      </div>
    </div>
  );
};
export default Rangeslider;
