import React from "react";
import { Link } from "react-router-dom";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
const popper = () => {
  const popover1 = () => (
    <Popover className="popover1">
      <Popover.Title as="h3">Popover title</Popover.Title>
      <Popover.Content>
        <p>And here's some amazing content. It's very engaging. Right?</p>
      </Popover.Content>
    </Popover>
  );
  const popover2 = () => (
    <Popover className="popover2">
      <Popover.Title as="h3">Popover title</Popover.Title>
      <Popover.Content>
        <p>And here's some amazing content. It's very engaging. Right?</p>
      </Popover.Content>
    </Popover>
  );
  const popover3 = () => (
    <Popover className="popover3">
      <Popover.Title as="h3">Popover title</Popover.Title>
      <Popover.Content>
        <p>And here's some amazing content. It's very engaging. Right?</p>
      </Popover.Content>
    </Popover>
  );
  const popover4 = () => (
    <Popover className="popover4">
      <Popover.Content>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
      </Popover.Content>
    </Popover>
  );
  const popover5 = () => (
    <Popover className="popover5">
      <Popover.Content>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
      </Popover.Content>
    </Popover>
  );
  const popover6 = () => (
    <Popover className="popover6">
      <Popover.Content>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
      </Popover.Content>
    </Popover>
  );
  const popover7 = () => (
    <Popover className="popover7">
      <Popover.Content>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</p>
      </Popover.Content>
    </Popover>
  );
  return (
    <div className="page-wrapper cardhead">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Popover</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dream-pos/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Popover</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Popover */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Basic Popover</h5>
              </div>
              <div className="card-body">
                <div className="popover-list">
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popover1}
                  >
                    <Button variant="primary" className="me-1">
                      Click to toggle popover
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    trigger="focus"
                    placement="right"
                    overlay={popover2}
                  >
                    <Button variant="primary" className="me-1">
                      Dismissible popover
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    trigger={["hover", "hover"]}
                    placement="right"
                    overlay={popover3}
                  >
                    <Button variant="primary" className="me-1">
                      On Hover Tooltip
                    </Button>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
          {/* /Popover */}
          {/* Popover */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Direction Popover</h5>
              </div>
              <div className="card-body">
                <div className="popover-list">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={popover4}
                  >
                    <Button variant="primary" className="me-1">
                      Popover on top
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popover5}
                  >
                    <Button variant="primary" className="me-1">
                      Popover on right
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={popover6}
                  >
                    <Button variant="primary" className="me-1">
                      Popover on bottom
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popover7}
                  >
                    <Button variant="primary" className="me-1">
                      Popover on left
                    </Button>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
          {/* /Popover */}
        </div>
      </div>
    </div>
  );
};
export default popper;
