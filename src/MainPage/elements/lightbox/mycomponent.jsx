import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import {Tooltip, OverlayTrigger}from 'react-bootstrap';

import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import {IMG01,IMG02,IMG03,IMG04,IMG05} from './img.jsx'

const MyComponent=(props)=>{

        return(
            
            <div>                            
                <SRLWrapper>            
                <div className="row">
              
                <div className="col-md-4 mb-2 mb-md-0">
                  <a href={IMG01} className="image-popup">
                    <img
                      src={IMG01}
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
               
                               <div className="col-md-4 mb-2 mb-md-0">
                  <a href={IMG02} className="image-popup">
                    <img
                      src={IMG02}
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
            
                </SRLWrapper>
            </div>
                           
        );
    }


export default MyComponent;