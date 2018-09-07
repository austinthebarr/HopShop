import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => {
  return(
    <div>
      <h3>{props.brew}</h3>
      <p>{props.brewery}</p>
      <p>{props.abv}</p>
      <p>{props.price}</p>
      <p>{props.availble}</p>
    </div>
  );
};

Keg.propTypes = {
  brew: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  availble: PropTypes.string.isRequired
};

export default Keg;