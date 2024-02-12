import React from "react";
import { Link } from "react-router-dom";
import ReactStickyNotes from "@react-latest-ui/react-sticky-notes";

const Stickynote = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper cardhead">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Sticky Note</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/dream-pos/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Sticky Note</li>
                </ul>
              </div>
            </div>
          </div>

          {/* /Page Header */}
          <div className="row">
            {/* Sticky */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Sticky Note </h5>
                </div>
                <div className="card-body">                                          
                  <ReactStickyNotes />                                                             
                </div>
              </div>
            </div>
            {/* /Sticky */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};
export default Stickynote;
