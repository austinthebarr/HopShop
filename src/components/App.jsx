import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Welcome';
import KegList from './KegList';

const App = () => {
  var style = {
    position: 'fixed',
    width: '100%',
    height:' 100%',
    left: '0',
    top: '0',
    display: 'flex'
  };
  return (
    <div>
      <Switch>
        <div style ={style}>
          <Route exact path='/'
            component={Welcome} />
          <Route path='/offerings'
             component={KegList} /> 
        </div>
      </Switch>
    </div>
  );
};

export default App;
