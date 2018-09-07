import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
  var styles = {
    overflow: 'hidden',
    position: 'fixed',
    top: '0',
    width: '100%' ,
    zIndex: '5',
    backgroundColor: 'black',
    marginBottom:'50px',
    color: '#fff',
    padding: '10px'
  };
  return (
    <div style={styles}> 
      <style jsx>{`
        .removeDecoration a{
          text-decoration: none;
          color: #fff;
        }
      `}
      </style>
      <h2>{props.title}</h2>
      <ul className="nav justify-content-end removeDecoration">
        <li className="nav-item removeDecoration">
          <Link to='/' className='removeDecoration'>Home</Link>
        </li>
      </ul>
    </div>  
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;