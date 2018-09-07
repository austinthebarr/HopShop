import React from 'react';

const Header = () => {
  return (
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
  );
};

export default Header;