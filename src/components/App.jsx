import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import Welcome from './Welcome';
import KegList from './KegList';
import Error404 from './Error404';

const App = ({ location }) => {
  return (
    
    <Wrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}>
          <section className="route-section">
            <Switch location={location}>
              <Route exact path='/'
                component={Welcome} />
              <Route exact path='/offerings'
                component={KegList} />  
              <Route component={Error404}/>
            </Switch>
          </section>
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

div.transition-group {
  position: relative;
}

section.route-section {
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
}
`;



export default withRouter(App);
