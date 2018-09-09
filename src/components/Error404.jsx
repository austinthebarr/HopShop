import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Error404 = (props) => {

  return (
    <div className='splash'> 
      <style jsx>{`  
    @import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');
    .splash {
      background-color: #3A3335;
      color: #FFF;
      font-family:  'Gloria Hallelujah', cursive;
      width: 100%;
      height: 100vh;
      text-align: center;
      background: cover;
    }
    .center {
      padding-top: 25%;
    }
    .error {
      color:#ED1C24;
    } 
      `}
      </style>
      <div className='center'>
        <h2>Bummer, the page: <span className='error'>{props.location.pathname}</span> does not exist!</h2>
        <Link to='/'><button className='btn btn-danger'>Home</button></Link>
      </div> 
    </div>
  );
};

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;