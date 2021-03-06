import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => {
  var widthStyle = {
    width:'18rem',
    height: '18rem',
    marginTop: '10px'
  };
  return(
    <div className="card" style={widthStyle}>
      <div className="card-body">
        <h5 className="card-title">{props.brew}</h5>
        <h6 className="card-subtitle mb-2">{props.brewery}</h6>
        <hr/>
        <p className="card-text">Type: {props.type}</p>
        <p className="card-text">ABV: {props.abv}</p>
        <p className="card-text">Price: ${props.price}</p>
        <p className="card-text">Amount: {props.available}</p>
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
  available: PropTypes.string.isRequired
};

export default Keg;