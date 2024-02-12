import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import {Tooltip, OverlayTrigger}from 'react-bootstrap';

import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import {IMG01,IMG02,IMG03,IMG04,IMG05} from './img.jsx'

const Description=(props)=>{

        return(
            
            <div>                            
                <SRLWrapper>            
                <div className="row">
                <div className="col-md-4 mb-2 mb-md-0">
                  <a
                    href={IMG03}
                    className="image-popup-desc"
                    data-title="Title 01"
                    data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                  >
                    <img
                      src={IMG03}
                      className="img-fluid"
                      alt="work-thumbnail"
                    />
                  </a>
                </div>
                <div className="col-md-4 mb-2 mb-md-0">
                  <a
                    href={IMG04}
                    className="image-popup-desc"
                    data-title="Title 02"
                    data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                  >
                    <img
                      src={IMG04}
                      className="img-fluid"
                      alt="work-thumbnail"
                    />
                  </a>
                </div>
                <div className="col-md-4 mb-2 mb-md-0">
                  <a
                    href={IMG05}
                    className="image-popup-desc"
                    data-title="Title 03"
                    data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                  >
                    <img
                      src={IMG05}
                      className="img-fluid"
                      alt="work-thumbnail"
                    />
                  </a>
                </div>
              </div>
            
                </SRLWrapper>
            </div>
                           
        );
    }


export default Description;