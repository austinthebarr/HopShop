import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Welcome from './Welcome';
import KegList from './KegList';
import Error404 from './Error404';
import Employee from './Employee';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterTapList: {},
    };
  }
  render(){
    return (
      <Wrapper>
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.pathname}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}>
            <section className="route-section">
              <Switch location={this.props.location}>
                <Route exact path='/'
                  component={Welcome} />
                <Route path='/offerings'
                  component={KegList} />  
                 <Route path='/BarKeeper' component={Employee}/> 
                <Route component={Error404}/>
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    );
  }
}

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

App.propTypes = {
  location: PropTypes.object
};


export default withRouter(App);
