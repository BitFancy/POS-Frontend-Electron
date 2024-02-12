import React from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
class Clipboard extends React.Component {
  state = {
    value: "http://www.admin-dashboard.com",
    copied: false,
  };
  state2 = {
    value2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    copied2: false,
  };
  state3 = {
    value3: "22991",
    copied3: false,
  };
  render() {
    return (
      <div className="page-wrapper cardhead">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Clipboard</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/dream-pos/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Clipboard</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Drag Card */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy from input</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard">
                    <form className="form-horizontal">
                      <input
                        type="text"
                        className="form-control mb-4"
                        id="input-copy"
                        value={this.state.value}
                        onChange={({ target: { value } }) =>
                          this.setState({ value, copied: false })
                        }
                      />
                      <CopyToClipboard
                        text={this.state.value}
                        onCopy={() => this.setState({ copied: true })}
                      >
                        <a className="mb-1 btn clip-btn btn-primary me-1">
                          <i className="fa fa-copy" /> Copy from Input
                        </a>
                      </CopyToClipboard>
                      <CopyToClipboard
                        text={this.state.value}
                        onCopy={() => this.setState({ copied: true })}
                      >
                        <a className="mb-1 btn clip-btn btn-dark me-1">
                          <i className="fa fa-cut" /> Cut from Input
                        </a>
                      </CopyToClipboard>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy from Text Area</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard">
                    <form className="form-horizontal">
                      <textarea
                        className="form-control mb-4"
                        rows={3}
                        value={this.state2.value2}
                        onChange={({ target: { value2 } }) =>
                          this.setState({ value2, copied2: false })
                        }
                      />
                      <CopyToClipboard
                        text={this.state2.value2}
                        onCopy={() => this.setState({ copied2: true })}
                      >
                        <a className="mb-1 btn clip-btn btn-primary me-1">
                          <i className="fa fa-copy" /> Copy from Input
                        </a>
                      </CopyToClipboard>
                      <CopyToClipboard
                        text={this.state2.value2}
                        onCopy={() => this.setState({ copied2: true })}
                      >
                        <a className="mb-1 btn clip-btn btn-dark me-1">
                          <i className="fa fa-cut" /> Cut from Input
                        </a>
                      </CopyToClipboard>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy Text from Paragraph</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard copy-txt">
                    <p className="otp-pass">
                      Here is your OTP <span id="paragraph-copy1">22991</span>.
                    </p>
                    <p className="mb-4">Please do not share it to anyone</p>
                    <CopyToClipboard text={this.state3.value3}
                   onCopy={() => this.setState({copied3: true})}>
                    <a className="mb-1 btn clip-btn btn-primary me-1">
                      <i className="fa fa-copy" /> Copy from Input
                    </a>
                  </CopyToClipboard>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy Hidden Text (Advanced)</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard copy-txt">
                    <p className="mb-4">
                      Link -&gt;{" "}
                      <span id="advanced-paragraph">
                        http://www.example.com/example
                      </span>
                    </p>
                    <a
                      className="mb-1 btn clip-btn btn-primary me-1"
                      href="#"
                      data-clipboard-action="copy"
                      data-clipboard-target="#advanced-paragraph"
                    >
                      <i className="far fa-copy" /> Copy Link
                    </a>
                    <a
                      className="mb-1 btn clip-btn btn-warning"
                      href="#"
                      data-clipboard-action="copy"
                      data-clipboard-text={2291}
                    >
                      <i className="far fa-copy" /> Copy Hidden Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /Drag Card */}
          </div>
        </div>
      </div>
    );
  }
}
export default Clipboard;
