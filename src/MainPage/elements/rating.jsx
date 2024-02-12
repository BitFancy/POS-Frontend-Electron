import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/font-awesome.min.css";
import ReactStars from "react-rating-stars-component";
const Rating = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="page-wrapper cardhead">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Rating</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/dream-pos/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Rating</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Rating */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Default Rating</h5>
              </div>
              <div className="card-body">
                <p>This is the most basic example of ratings.</p>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
              </div>
            </div>
          </div>
          {/* /Rating */}
          {/* Rating */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Score</h5>
              </div>
              <div className="card-body">
                <p>Stars with a saved rating.</p>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    value={3}
                  />
              </div>
            </div>
          </div>
          {/* /Rating */}
          {/* Rating */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Max Number</h5>
              </div>
              <div className="card-body">
                <p>Change the max numbers of stars</p>
                <ReactStars
                    count={10}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
              </div>
            </div>
          </div>
          {/* /Rating */}
          {/* Rating */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Read Only</h5>
              </div>
              <div className="card-body">
                <p>Prevent users from voting</p>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    value={3}
                    disabled={true}
                  />
              </div>
            </div>
          </div>
          {/* /Rating */}
          {/* Rating */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Half Rating</h5>
              </div>
              <div className="card-body">
                <p>You can represent a float score as a half star icon.</p>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    value={3.5}
                    isHalf={true}
                  />
              </div>
            </div>
          </div>
          {/* /Rating */}
          {/* Rating */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Custom Icon</h5>
              </div>
              <div className="card-body">
                <p>Use any icon you want.</p>
                <ReactStars
                    count={5}
                    icon={<i className="fa fa-heart-o"></i>}                    
                    size={24}
                    activeColor="#FF0000"                    
                  />
              </div>
            </div>
          </div>
          {/* /Rating */}
        </div>
      </div>
    </div>
  );
};
export default Rating;
