import React from 'react';

const Header = () => {
  var styles = {
    paddingTop: '10px',
    overflow: 'hidden',
    position: 'fixed',
    top: '0',
    width: '100%' ,
    zIndex: '5',
    backgroundColor: 'black',
    marginBottom:'50px'
  };
  return (
    <div style={styles}> 
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>  
  );
};

export default Header;