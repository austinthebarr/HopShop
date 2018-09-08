import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';


import Welcome from './Welcome';
import KegList from './KegList';
import Error404 from './Error404';

const App = ({ location }) => {
  console.log({ location })
  return (
    
    <Wrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <Switch location={location}>
          
            <Route exact path='/'
              component={Welcome} />
            <Route exact path='/offerings'
              component={KegList} />  
            <Route component={Error404}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
.fade-enter {
  opacity: 0.01;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}

.fade-exit {
  opacity: 1;
}

.fade-exit.fade-exit-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
`;



export default withRouter(App);
