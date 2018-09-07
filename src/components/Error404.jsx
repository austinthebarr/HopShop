import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Error404 = (props) => {
  return (
    <div> 
      <h2>Bummer, the page {props.location.pathname} does not exist!</h2>
      <Link to='/'><button className='btn btn-danger'>Home</button></Link>
    </div>
  );
};

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;