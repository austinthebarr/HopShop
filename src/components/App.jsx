import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Welcome';

const App = () => {
  var style = {
    position: 'fixed',
    width: '100%',
    height:' 100%',
    left: '0',
    top: '0',
    display: 'flex'
  }
  return (
    <div>
      <Switch>
        <div style ={style}>
          <Route path='/'
            component={Welcome} />
        </div>
      </Switch>
    </div>
  );
};

export default App;
