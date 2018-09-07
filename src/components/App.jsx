import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Welcome';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/'
          component={Welcome} />
      </Switch>
    </div>
  );
};

export default App;
