import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const Tooltip = () => {
  const [Place,setPlace] = useState();
  return (
    <div className="page-wrapper cardhead">
      <div className="content ">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Tooltip</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dream-pos/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Tooltip</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Tooltip */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Html Element</h5>
              </div>
              <div className="card-body">
                <div className="popover-list">                                  
                  <button
                    className="example-popover btn btn-primary me-1"
                    type="button"
                    data-tip="Popover-title"                                        
                  >
                    Hover Me
                  </button>                
                </div>
              </div>
            </div>
          </div>
          {/* /Tooltip */}
          {/* Popover */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Direction Tooltip</h5>
              </div>
              <div className="card-body">
                <div className="tooltip-list">
                  <button
                    type="button"
                    className="btn btn-primary me-1"
                    data-tip="tooltip on Top" 
                    onMouseOver={()=>setPlace("top")}
                    onMouseLeave={()=>setPlace("")}
                  >
                    Tooltip on top
                  <ReactTooltip place={Place} type="dark" effect="solid" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary me-1"                    
                    data-tip="Tooltip on right"
                    onMouseOver={()=>setPlace("right")}
                    onMouseLeave={()=>setPlace("")}
                  >
                    Tooltip on right                  
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary me-1"                    
                    data-tip="Tooltip on bottom"
                    onMouseOver={()=>setPlace("bottom")}
                    onMouseLeave={()=>setPlace("")}
                  >
                    Tooltip on bottom                  
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary me-1"                   
                    data-tip="Tooltip on left"
                    onMouseOver={()=>setPlace("left")}
                    onMouseLeave={()=>setPlace("")}
                  >
                    Tooltip on left                
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Popover */}
          {/* Tooltip */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Html Element</h5>
              </div>
              <div className="card-body">
                <div className="popover-list">
                  <button
                    type="button"
                    className="btn btn-primary me-1" 
                    data-html={true}                   
                    data-tip="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                    onMouseOver={()=>setPlace("top")}
                    onMouseLeave={()=>setPlace("")}
                  >
                    Tooltip with HTML
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary me-1"
                    data-html={true}                   
                    data-tip="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                    data-event="click"
                    onMouseOver={()=>setPlace("bottom")}
                    onMouseLeave={()=>setPlace("")}
                  >
                    Click Me
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /Tooltip */}
        </div>
      </div>
    </div>
  );
};
export default Tooltip;
