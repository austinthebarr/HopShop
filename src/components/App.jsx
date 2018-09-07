import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Welcome';
import KegList from './KegList';
import Error404 from './Error404';

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
            <Route exact path='/offerings'
              component={KegList} /> 
          </div> 
        </div>
       <div>
            <Route component={Error404}/>
          </div>
      
      </Switch>
    </div>
  );
};

export default App;
