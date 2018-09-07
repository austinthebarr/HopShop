import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  
  
  return(
    <div className='splash'>
      <style jsx>{`
    .splash {
      background-color: #41463D;
      color: #FFF;
      font-family: Monospace;
      width: 100%;
      height: 100%;
      text-align: center;
    }
    .center {
      margin-top: 25%
    }  
`}</style>
      <div className='center'>
        <h1 className='style'>Welcome to HOPSHOP</h1>
        <Link to='/offerings'><button className=' btn btn-danger'>Enter</button></Link>
      </div>
    </div>
  );
};

export default Welcome;