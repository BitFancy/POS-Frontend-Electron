import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import alertify from "alertifyjs";
import "../../../node_modules/alertifyjs/build/css/alertify.css";
import "../../../node_modules/alertifyjs/build/css/themes/semantic.css";

const Toastr = () => {
  const toastrSuccess = () => {
    alertify.set("notifier", "position", "top-right");
    alertify.success("Have fun storming the castle!");
  };
  const toastrInfo = () => {
    alertify.set("notifier", "position", "top-right");
    alertify.message("Have fun storming the castle!");
  };
  const toastrWarning = () => {
    alertify.set("notifier", "position", "top-right");
    alertify.warning("Have fun storming the castle!");
  };
  const toastrError = () => {
    alertify.set("notifier", "position", "top-right");
    alertify.error("Have fun storming the castle!");
  };
  const topLeft = () => {
    alertify.set("notifier", "position", "top-left");
    alertify.message("Top Left! Have fun storming");
  };
  const topCenter = () => {
    alertify.set("notifier", "position", "top-center");
    alertify.message("Top Center! Have fun storming");
  };
  const topRight = () => {
    alertify.set("notifier", "position", "top-right");
    alertify.message("Top Right! Have fun storming");
  };
  const topFull = () => {
    alertify.set("notifier", "position", "top-full");
    alertify.message("Top Full! Have fun storming");
  };
  const bottomLeft = () => {
    alertify.set("notifier", "position", "bottom-left");
    alertify.message("Bottom Left! Have fun storming");
  };
  const bottomCenter = () => {
    alertify.set("notifier", "position", "bottom-center");
    alertify.message("Bottom Center! Have fun storming");
  };
  const bottomRight = () => {
    alertify.set("notifier", "position", "bottom-right");
    alertify.message("Bottom Right! Have fun storming");
  };
  const bottomFull = () => {
    alertify.set("notifier", "position", "bottom-full");
    alertify.message("Bottom Full! Have fun storming");
  };
  const notifications = () => {
    alertify.set("notifier", "position", "top-right");
    alertify.message("Notification! Have fun storming");
  };
  const closeButton = () => {
    alertify.set("notifier", "position", "top-right");
    alertify.success("Close Button! Have fun storming");
  };
  const progessBar = () => {
    var canDismiss = false;
    var notification = alertify.success(
      "You can dismiss this after Progessbar!"
    );
    notification.ondismiss = function () {
      return canDismiss;
    };
    setTimeout(function () {
      canDismiss = true;
    }, 3000);
  };
  const clearToast = () => {
    alertify.message("Cleared").dismissOthers();
  };
  const show5 = () => {
    var duration = 5;
    alertify.set("notifier", "position", "top-right");
    var msg = alertify.message(
      "Auto-dismiss in " + duration + " seconds.",
      5,
      function () {
        clearInterval(interval);
      }
    );
    var interval = setInterval(function () {
      msg.setContent("Auto-dismiss in " + --duration + " seconds.");
    }, 1000);
  };
  const hide3 = () => {
    var duration = 3;
    alertify.set("notifier", "position", "top-right");
    var msg = alertify.message(
      "Auto-dismiss in " + duration + " seconds.",
      3,
      function () {
        clearInterval(interval);
      }
    );
    var interval = setInterval(function () {
      msg.setContent("Auto-dismiss in " + --duration + " seconds.");
    }, 1000);
  };
  const timeout5 = () => {
    var duration = 5;
    alertify.set("notifier", "position", "top-right");
    var msg = alertify.message(
      "Auto-dismiss in " + duration + " seconds.",
      5,
      function () {
        clearInterval(interval);
      }
    );
    var interval = setInterval(function () {
      msg.setContent("Auto-dismiss in " + --duration + " seconds.");
    }, 1000);
  };
  const sticky = () => {
    var canDismiss = false;
    var notification = alertify.success(
      "Sticky Toaster have Fun"
    );
    notification.ondismiss = function () {
      return canDismiss;
    };
    setTimeout(function () {
      canDismiss = true;
    }, 100000);
  };
  return (
    <div className="page-wrapper cardhead">
      <div className="content ">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Toastr</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dream-pos/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Toastr</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card" id="types">
              <div className="card-header">
                <h4 className="card-title">Types</h4>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-outline-success me-1 mb-1"
                  onClick={toastrSuccess}
                >
                  Success
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info me-1 mb-1"
                  onClick={toastrInfo}
                >
                  Info
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning me-1 mb-1"
                  onClick={toastrWarning}
                >
                  Warning
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger me-1 mb-1"
                  onClick={toastrError}
                >
                  Error
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Position</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 mb-4">
                    <h5 className="mb-3">Top Positions</h5>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 mb-1"
                      onClick={topLeft}
                    >
                      Top Left
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 mb-1"
                      onClick={topCenter}
                    >
                      Top Center
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 mb-1"
                      onClick={topRight}
                    >
                      Top Right
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 mb-1"
                      onClick={topFull}
                    >
                      Top Full Width
                    </button>
                  </div>
                  <div className="col-sm-12">
                    <h5 className="mb-3">Bottom Positions</h5>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 mb-1"
                      onClick={bottomLeft}
                    >
                      Bottom Left
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 mb-1"
                      onClick={bottomCenter}
                    >
                      Bottom Center
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 mb-1"
                      onClick={bottomRight}
                    >
                      Bottom Right
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 mb-1"
                      onClick={bottomFull}
                    >
                      Bottom Full Width
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Options</h4>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-outline-success me-1 mb-1"
                  onClick={notifications}
                >
                  Notifications
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success me-1 mb-1"
                  onClick={closeButton}
                >
                  Close Button
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success me-1 mb-1"
                  onClick={progessBar}
                >
                  Progress Bar
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success me-1 mb-1"
                  onClick={clearToast}
                >
                  Clear Toast
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Clear Toasts</h4>
              </div>
              <div className="card-body">
                <div className="row mt-1">
                  <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
                    <h5>Remove</h5>
                    <p>
                      Immediately remove current toasts without using animation.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-info me-1 mb-1"
                      onClick={topRight}
                    >
                      Show Toast
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger me-1 mb-1"
                      onClick={clearToast}
                    >
                      Remove Toast
                    </button>
                  </div>
                  <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
                    <h5>Clear</h5>
                    <p>Remove current toasts using animation.</p>
                    <button
                      type="button"
                      className="btn btn-outline-info me-1 mb-1"
                      onClick={topRight}
                    >
                      Show Toast
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger me-1 mb-1"
                      onClick={clearToast}
                    >
                      Clear Toast
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Duration &amp; Timeout</h4>
              </div>
              <div className="card-body">
                <p>
                  you can use options like <code>showDuration</code>,{" "}
                  <code>hideDuration</code>, <code>timeout</code> for your
                  toasts. To create a sticky toast set the <code>timeout</code>{" "}
                  to <code>0</code>
                </p>
                <button
                  type="button"
                  className="btn btn-outline-info me-1 mb-1"
                  onClick={show5}
                >
                  Show .5s
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info me-1 mb-1"
                  onClick={hide3}
                >
                  Hide 3s
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info me-1 mb-1"
                  onClick={timeout5}
                >
                  Timeout 5s
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info me-1 mb-1"
                  onClick={sticky}
                >
                  Sticky Toast
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Toastr;
