import React from "react";
import { Link } from "react-router-dom";
import { TextEditor } from "text-editor-react";

const Texteditor = () => {
  return (
    <div className="page-wrapper cardhead">
      <div className="content ">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Text Editor</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dream-pos/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Text Editor</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Editor */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Editor</h5>
              </div>
              <div className="card-body">               
                <TextEditor
                  id="editor"
                  showHeadings={true}
                  showJustify={true}
                  showUndoRedo={true}
                  toolbarStyle={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                  editorStyle={{
                    margin: 0,
                    // height: '20%',
                  }}
                />
              </div>
            </div>
          </div>
          {/* /Editor */}
        </div>
      </div>
    </div>
  );
};
export default Texteditor;
