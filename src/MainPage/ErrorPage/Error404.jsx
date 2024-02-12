import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  useEffect(()=>{
    document.body.classList.add("error-page");
  })
  const removeClass =()=>{
    document.body.classList.remove("error-page");
  }
  return (
    <>
      <div className="main-wrapper">
        <div className="error-box">
          <h1>404</h1>
          <h3 className="h2 mb-3">
            <i className="fas fa-exclamation-circle" /> Oops! Page not found!
          </h3>
          <p className="h4 font-weight-normal">
            The page you requested was not found.
          </p>
          <Link to="/dream-pos/dashboard" className="btn btn-primary" onClick={removeClass}>
            Back to Home
          </Link>
        </div>
      </div>


    </>
  )
}

export default Error404;