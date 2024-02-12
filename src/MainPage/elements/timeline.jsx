import React from "react";
import { Link } from "react-router-dom";
const Timeline = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper cardhead">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Timeline</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/dream-pos/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Timeline</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Ribbon */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <ul className="timeline">
                    <li>
                      <div className="timeline-badge success">
                        <i className="fa fa-user" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">Title</h4>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Libero laboriosam dolor perspiciatis omnis
                            exercitationem. Beatae, officia pariatur? Est cum
                            veniam excepturi. Maiores praesentium, porro
                            voluptas suscipit facere rem dicta, debitis.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge warning">
                        <i className="fa fa-users" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">Title </h4>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laudantium maiores odit qui est tempora eos,
                            nostrum provident explicabo dignissimos debitis vel!
                            Adipisci eius voluptates, ad aut recusandae minus
                            eaque facere.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-badge danger">
                        <i className="fa fa-gift" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">Lorem ipsum dolor</h4>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Repellendus numquam facilis enim eaque,
                            tenetur nam id qui vel velit similique nihil iure
                            molestias aliquam, voluptatem totam quaerat, magni
                            commodi quisquam.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">Lorem ipsum dolor</h4>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptates est quaerat asperiores sapiente,
                            eligendi, nihil. Itaque quos, alias sapiente rerum
                            quas odit! Aperiam officiis quidem delectus libero,
                            omnis ut debitis!
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-badge info">
                        <i className="fa fa-save" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">Lorem ipsum dolor</h4>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Nobis minus modi quam ipsum alias at est
                            molestiae excepturi delectus nesciunt, quibusdam
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge success">
                        <i className="fa fa-graduation-cap" />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">Lorem ipsum dolor</h4>
                        </div>
                        <div className="timeline-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Deserunt obcaecati, quaerat tempore officia
                            voluptas debitis consectetur culpa amet, accusamus
                            dolorum fugiat, animi dicta aperiam, enim incidunt
                            quisquam maxime neque eaque.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Ribbon */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};
export default Timeline;
