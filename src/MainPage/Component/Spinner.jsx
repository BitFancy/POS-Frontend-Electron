import React from 'react';
import spinner from '../../assets/img/gif/snipper.gif';

const Spinner = () => {
  return (
    <div className="spinner-border text-warning me-1" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
