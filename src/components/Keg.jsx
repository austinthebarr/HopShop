import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => {
  return(
   
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.brew}</h5>
        <h6 className="card-subtitle mb-2">{props.brewery}</h6>
        <p className="card-text">Type: {props.type}</p>
        <p className="card-text">ABV: {props.abv}</p>
        <p className="card-text">Price: ${props.price}</p>
        <p className="card-text">Amount: {props.availble}</p>
      </div>
    </div>
  );
};

Keg.propTypes = {
  brew: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  availble: PropTypes.string.isRequired
};

export default Keg;