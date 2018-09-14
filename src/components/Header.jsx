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
  const header =
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
    </div> ; 

  const employee =  
    <div style={styles}> 
      <style jsx>{`
        .removeDecoration {
          text-decoration: none;
          color: #fff;
          margin-right: 10px;
          cursor: pointer;
        }
      `}
      </style>
      <h2>{props.title}</h2>
      <ul className="nav justify-content-end removeDecoration">
        <li className="nav-item removeDecoration">
          <Link to='/' className='removeDecoration'>Home</Link>
        </li>
        <li className="nav-item removeDecoration">
          <a onClick={props.onShowingForm}>Add A New Keg</a>
        </li>
        <li className="nav-item removeDecoration">
          <a onClick={props.onHidingForm}>Keg List</a>
        </li>
      </ul>
    </div> ; 
   

  if(props.location === '/BarKeeper'){
    return(<div>{employee}</div>);
  } else {
    return(<div>{header}</div>);
  }
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  onShowingForm: PropTypes.func,
  onHidingForm: PropTypes.func
};

export default Header;