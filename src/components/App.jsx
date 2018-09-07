import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Welcome';
import KegList from './KegList';

const App = () => {
  var style = {
   
  };
  return (
    <div>
      <style jsx>{`
      .everyPage {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;    
      }
      .headerMargin{
        margin-top: 90px;
        display: grid;
      }
      `}</style>
      <Switch>
        <div className='everyPage'>
          <Route exact path='/'
            component={Welcome} />
          <div className='headerMargin'>   
            <Route path='/offerings'
              component={KegList} /> 
          </div>  
        </div>
      </Switch>
    </div>
  );
};

export default App;
