import React from "react";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { IMG01, IMG02, IMG03, IMG04, IMG05 } from "./img.jsx";
import MyComponent from "./mycomponent.jsx";
import Description from "./description";

const LightBox = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper cardhead">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Lightbox</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/dream-pos/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Lightbox</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Lightbox */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Single Image Lightbox</div>
                </div>
                <div className="card-body">
                  <SimpleReactLightbox>
                    <MyComponent />
                  </SimpleReactLightbox>
                </div>
              </div>
            </div>
            {/* /Lightbox */}
            {/* Lightbox */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Image with Description</div>
                </div>
                <div className="card-body">
                  <SimpleReactLightbox>
                    <Description />
                  </SimpleReactLightbox>
                </div>
              </div>
            </div>
            {/* /Lightbox */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};
export default LightBox;
