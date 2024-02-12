import React from "react";
import { Link } from "react-router-dom";
const Spinner = () => {
  return (
    <div className="page-wrapper cardhead">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Spinner</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dream-pos/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Spinner</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Spinner */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Border Spinner</h5>
              </div>
              <div className="card-body">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          {/* /Spinner */}
          {/* Spinner */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Colored Spinner</h5>
              </div>
              <div className="card-body">
                <div className="spinner-border text-primary me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-secondary me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-success me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-danger me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-warning me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-info me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-light me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-dark me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          {/* /Spinner */}
          {/* Spinner */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Grow Spinner</h5>
              </div>
              <div className="card-body">
                <div className="spinner-grow" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          {/* /Spinner */}
          {/* Spinner */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Colored Grow Spinner</h5>
              </div>
              <div className="card-body">
                <div className="spinner-grow text-primary me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-success me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-light me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-dark me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          {/* /Spinner */}
          {/* Spinner */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Flex Alignment</h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <strong>Loading...</strong>
                  <div
                    className="spinner-border"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Spinner */}
          {/* Spinner */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Float Alignment</h5>
              </div>
              <div className="card-body">
                <div className="spinner-border float-end" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          {/* /Spinner */}
          {/* Spinner */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Different Sizes</h5>
              </div>
              <div className="card-body">
                <div className="spinner-border spinner-border-sm me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div
                  className="spinner-grow spinner-grow-sm me-3"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow me-3" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border spinner-border-lg me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow spinner-grow-lg me-1" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          {/* /Spinner */}
          {/* Spinner */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Buttons</h5>
              </div>
              <div className="card-body">
                <button
                  className="btn btn-primary mb-1 me-1"
                  type="button"
                  disabled=""
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Loading...</span>
                </button>
                <button
                  className="btn btn-primary mb-1 me-1"
                  type="button"
                  disabled=""
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </button>
                <button
                  className="btn btn-primary mb-1 me-1"
                  type="button"
                  disabled=""
                >
                  <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Loading...</span>
                </button>
                <button
                  className="btn btn-primary mb-1 me-1"
                  type="button"
                  disabled=""
                >
                  <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </button>
              </div>
            </div>
          </div>
          {/* /Spinner */}
        </div>
      </div>
    </div>
  );
};
export default Spinner;
