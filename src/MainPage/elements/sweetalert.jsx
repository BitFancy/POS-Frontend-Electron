import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default class Sweetalert extends Component {
  constructor() {
    super();
    this.HandleClick = this.HandleClick.bind(this);
  }
  HandleClick = () => {
    Swal.fire({
      title: "Any fool can use a computer",
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  HandleWithTitle = () => {
    Swal.fire({
      title: "The Internet?,",
      text: "That thing is still around?",
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  HandleWithFooter = () => {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "<a href>Why do I have this issue?</a>",
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  topStart = () => {
    Swal.fire({
      position: "top-start",
      type: "success",
      title: "Your work has been saved",
      showConfirmButton: !1,
      timer: 1500,
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  topEnd = () => {
    Swal.fire({
      position: "top-end",
      type: "success",
      title: "Your work has been saved",
      showConfirmButton: !1,
      timer: 1500,
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  bottomStart = () => {
    Swal.fire({
      position: "bottom-start",
      type: "success",
      title: "Your work has been saved",
      showConfirmButton: !1,
      timer: 1500,
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  bottomEnd = () => {
    Swal.fire({
      position: "bottom-end",
      type: "success",
      title: "Your work has been saved",
      showConfirmButton: !1,
      timer: 1500,
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  Success = () => {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      type: "success",
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  Info = () => {
    Swal.fire({
      title: "Info!",
      text: "You clicked the button!",
      type: "info",
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  Warning = () => {
    Swal.fire({
      title: "Warning!",
      text: " You clicked the button!",
      type: "warning",
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  Error = () => {
    Swal.fire({
      title: "Error!",
      text: " You clicked the button!",
      type: "error",
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  autoClose = () => {
    var t;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <strong></strong> seconds.",
      timer: 2e3,
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
      onBeforeOpen: function () {
        Swal.showLoading(),
          (t = setInterval(function () {
            Swal.getContent().querySelector("strong").textContent =
              Swal.getTimerLeft();
          }, 100));
      },
      onClose: function () {
        clearInterval(t);
      },
    }).then(function (t) {
      t.dismiss === Swal.DismissReason.timer &&
        console.log("I was closed by the timer");
    });
  };
  outsideClick = () => {
    Swal.fire({
      title: "Click outside to close!",
      text: "This is a cool message!",
      allowOutsideClick: !0,
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
    });
  };
  Prompt = () => {
    Swal.fire({
      input: "text",
      confirmButtonText: "Next &rarr;",
      showCancelButton: !0,
      progressSteps: ["1", "2", "3"],
      confirmButtonClass: "btn btn-primary",
      buttonsStyling: !1,
      cancelButtonClass: "btn btn-danger ml-1",
    })
      .queue([
        { title: "Question 1", text: "Chaining swal2 modals is easy" },
        "Question 2",
        "Question 3",
      ])
      .then(function (t) {
        t.value &&
          Swal.fire({
            title: "All done!",
            html:
              "Your answers: <pre><code>" +
              JSON.stringify(t.value) +
              "</code></pre>",
            confirmButtonText: "Lovely!",
          });
      });
  };
  confirmText = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: !0,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      confirmButtonClass: "btn btn-primary",
      cancelButtonClass: "btn btn-danger ml-1",
      buttonsStyling: !1,
    }).then(function (t) {
      t.value &&
        Swal.fire({
          type: "success",
          title: "Deleted!",
          text: "Your file has been deleted.",
          confirmButtonClass: "btn btn-success",
        });
    });
  };
  confirmColor = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: !0,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      confirmButtonClass: "btn btn-primary",
      cancelButtonClass: "btn btn-danger ml-1",
      buttonsStyling: !1,
    }).then(function (t) {
      t.value
        ? Swal.fire({
            type: "success",
            title: "Deleted!",
            text: "Your file has been deleted.",
            confirmButtonClass: "btn btn-success",
          })
        : t.dismiss === Swal.DismissReason.cancel &&
          Swal.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            type: "error",
            confirmButtonClass: "btn btn-success",
          });
    });
  };
  render() {
    return (
      <div className="page-wrapper cardhead">
        <div className="content ">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Sweetalerts</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/dream-pos/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Sweetalerts</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              {/* Basic Examples */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Basic Examples</h4>
                </div>
                <div className="card-body">
                  <p>
                    SweetAlert automatically centers itself on the page and
                    looks great no matter if you're using a desktop computer,
                    mobile or tablet. It's even highly customizable, as you can
                    see below!
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary  me-1 mb-1"
                    id="basic-alert" onClick={this.HandleClick}
                  >
                    Basic
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary  me-1 mb-1"
                    id="with-title" onClick={this.HandleWithTitle}
                  >
                    With Title
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary  me-1 mb-1"
                    id="footer-alert"  onClick={this.HandleWithFooter} 
                  >
                    With Footer
                  </button>
                </div>
              </div>
              {/* /Basic Examples */}
              {/* Position */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Position</h4>
                </div>
                <div className="card-body">
                  <p>
                    You can specify position of your alert with{" "}
                    <code>
                      position : {"{"} top-start | top-end | bottom-start |
                      bottom-end {"}"}
                    </code>{" "}
                    in js.
                  </p>
                  <button
                    className="btn btn-outline-success  me-1 mb-1"
                    id="position-top-start"  onClick={this.topStart}
                  >
                    Top Start
                  </button>
                  <button
                    className="btn btn-outline-success  me-1 mb-1"
                    id="position-top-end" onClick={this.topEnd}
                  >
                    Top End
                  </button>
                  <button
                    className="btn btn-outline-success  me-1 mb-1"
                    id="position-bottom-start" onClick={this.bottomStart}
                  >
                    Bottom Starts
                  </button>
                  <button
                    className="btn btn-outline-success  me-1 mb-1"
                    id="position-bottom-end" onClick={this.bottomEnd}
                  >
                    Bottom End
                  </button>
                </div>
              </div>
              {/* \Position */}
              {/* Types */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Types</h4>
                </div>
                <div className="card-body">
                  <p>
                    The type of the modal. SweetAlert comes with 4 built-in
                    types which will show a corresponding icon animation:
                    "warning", "error", "success" and "info". You can also set
                    it as "input" to get a prompt modal. It can either be put in
                    the object under the key "icon" or passed as the third
                    parameter of the function.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-success  me-1 mb-1"
                    id="type-success" onClick={this.Success}
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info  me-1 mb-1"
                    id="type-info" onClick={this.Info}
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning  me-1 mb-1"
                    id="type-warning" onClick={this.Warning}
                  >
                    Warning
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger  me-1 mb-1"
                    id="type-error" onClick={this.Error}
                  >
                    Error
                  </button>
                </div>
              </div>
              {/* \Types */}
              {/* Options */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Options</h4>
                </div>
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-outline-primary  me-1 mb-1"
                    id="auto-close" onClick={this.autoClose}
                  >
                    Auto Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary  me-1 mb-1"
                    id="outside-click" onClick={this.outsideClick}
                  >
                    Click Outside
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary  me-1 mb-1"
                    id="prompt-function" onClick={this.Prompt}
                  >
                    Question
                  </button>
                </div>
              </div>
              {/* \Options */}
              {/* Confirm Options */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Confirm Options</h4>
                </div>
                <div className="card-body">
                  <h5>Confirm Button Text</h5>
                  <p>
                    Use <code>confirmButtonText: "Your text here!"</code> option
                    to change the text of the "Confirm" button.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary mb-3"
                    id="confirm-text" onClick={this.confirmText}
                  >
                    Confirm Text
                  </button>
                  <h5>Confirm Button Color</h5>
                  <p>
                    Use{" "}
                    <code>
                      confirmButtonClass: "btn btn-{"{"}colorName{"}"}"
                    </code>{" "}
                    option to change the color of the "Confirm" button.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary mb-2"
                    id="confirm-color" onClick={this.confirmColor}
                  >
                    Confirm Button Color
                  </button>
                </div>
              </div>
              {/* \Confirm Options */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
